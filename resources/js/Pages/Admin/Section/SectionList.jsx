import DashboardLayout from '../DashboardLayout.jsx'
import { Link, useForm, router } from '@inertiajs/react'

export default function SectionList({ sections }) {

	const deleteHandler = (id) => {
		router.delete( route('section.destroy', { id: id }) );
	}

	return (<>
		<div className="p-4 shadow-sm">
			<div>
	            <h3 class="text-lg font-semibold text-slate-600 mb-2 ">List of current sections.</h3>
	            {/*<p class="text-slate-500">List of the current students.</p>*/}
	        </div>
			<Link href={route('section.create')} className="font-light p-2 btn btn-dark m-4">Add new section</Link>
			<table className="w-full table-auto border table-bordered">
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
	        <tbody className="">
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
                            <td className="text-center">
                         <div class="hs-dropdown [--strategy:absolute] [--flip:false] hs-dropdown-example relative inline-flex">
                            <button id="hs-dropdown-example" type="button" class="hs-dropdown-toggle py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none "aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                                Actions
                                <svg class="hs-dropdown-open:rotate-180 size-4 text-gray-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="m6 9 6 6 6-6"></path>
                                </svg>
                            </button>

							 <div class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 w-56 hidden z-10 mt-2 min-w-60 bg-white shadow-md rounded-lg p-2"role="menu" aria-orientation="vertical" aria-labelledby="hs-dropdown-example">
                            <Link href={ route('section.edit', { id: section.id }) } class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 ">
                                Edit
                            </Link>
                            <a href={`/admin/schedule/show/${section.id}`} class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100">
                                View Class Schedule
                            </a>
                            <button class="flex w-full items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 " onClick={e => deleteHandler(section.id)}>
                                Delete
                            </button>
                            </div>
                            </div>
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
