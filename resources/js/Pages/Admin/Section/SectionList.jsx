import DashboardLayout from '../DashboardLayout.jsx'
import { Link, useForm, router } from '@inertiajs/react'

export default function SectionList({ sections }) {

	const deleteHandler = (id) => {
		router.delete( route('section.destroy', { id: id }) );
	}

	return (<>
		<div className="overflow-x-auto overflow-y-auto p-4 shadow-sm"> 
			<div>
	            <h3 class="text-lg font-semibold text-slate-600 mb-2 ">List of current sections.</h3>
	            {/*<p class="text-slate-500">List of the current students.</p>*/}
	        </div>
			<Link href={route('section.create')} className="font-light p-2 btn btn-dark m-4">Add new section</Link>
			<table className="w-full table-auto min-w-max border table-bordered">
	        <thead>
	        <tr>
	            <th className="p-4 border-b border-slate-200 bg-slate-50">
	            <p className="text-sm font-normal leading-none text-slate-500">
	                #
	            </p>
	            </th>
	            <th className="p-4 border-b border-slate-200 bg-slate-50">
	            <p className="text-sm font-normal leading-none text-slate-500">
	                Full Name
	            </p>
	            </th>
	            <th className="p-4 border-b border-slate-200 bg-slate-50">
	            <p className="text-sm font-normal leading-none text-slate-500">
	                Options
	            </p>
	            </th>
	        </tr>
	        </thead>
	        <tbody className="max-h-12 overflow-y-auto">
	       { sections?.data.length > 0 ? sections.data.map((section, index) => <>
						<tr key={section.id}>
						 <td className="p-2 py-4">
			            	<p className="text-sm text-slate-500">
								{index+1}
			            	</p>
			            </td>
			             <td className="px-3">
			            	<p className="text-sm text-slate-500">
								{section.name}
			            	</p>
			            </td>
						<td className="">
							<button     onClick={e => deleteHandler(section.id)} className="inline-block rounded bg-red-600 px-3 py-2 text-xs font-medium text-white hover:bg-red-700 mx-2">Delete</button>
							<Link href={ route('section.edit', { id: section.id }) } className="inline-block rounded bg-indigo-600 px-3 py-2 text-xs font-medium text-white hover:bg-indigo-700">Update</Link>
						</td>
						</tr>
						</>) : <p className="text-muted p-4 text-sm bg-slate-200">No records available.</p> }
	        </tbody>
	    </table>
	    <div className="flex justify-between mt-4">
	        <div className="text-sm text-slate-500">
	        Showing <b>{sections.current_page}</b> of { sections.total }
	        </div>
	        <div>
	        { sections.links.map((link) => (
	        	link.url ? (
	        		<Link 
	        			href={link.url}
						className={`${link.active ? 'bg-slate-800' : 'bg-white'} px-3 py-1 min-w-9 min-h-9 text-sm font-normal text-white border border-slate-800 rounded hover:bg-slate-600 hover:border-slate-600 transition duration-200 ease`}
	        			// className={`
	        			dangerouslySetInnerHTML={{ __html: link.label == 'Next &raquo;' ? 'Next' : link.label == '&laquo; Previous' ? 'Prev' : link.label }}
	        		/>
	        	) : (
	        	<span
					key={link.url}
					// dangerouslySetInnerHTML={{ __html: link.label }}
					className="px-3 py-1 min-w-9 min-h-9 text-sm font-normal text-slate-500 bg-white border border-slate-200 rounded hover:bg-slate-50 hover:border-slate-400 transition duration-200 ease"
				>{link.label == 'Next &raquo;' ? 'Next' : 'Prev'}</span>
	        	)
	        ))}
	        </div>
	    </div>
		</div>



	</>)
}

SectionList.layout = page => <DashboardLayout children={page}/>