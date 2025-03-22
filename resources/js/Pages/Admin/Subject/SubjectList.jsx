import DashboardLayout from '../DashboardLayout.jsx'
import { Link, useForm, router } from '@inertiajs/react'

export default function SubjectList({ subjects }) {

	const deleteHandler = (id) => {
		router.delete( route('subject.destroy', { id: id }) );
	}

	return (<>
		<div className=""> 
			<table className="table table-responsive table-bordered table-hover">
	        <thead>
	        <tr>
	            <th >
	                Subject Name
	            </th>
	            <th>
	                Options
	            </th>
	        </tr>
	        </thead>
	        <tbody className="">
	       { subjects?.data.length > 0 ? subjects.data.map((subject, index) => <>
						<tr key={subject.id}>
			             <td className="">
								{subject.name}
			            </td>
						<td className="flex flex-row gap-2">
							<button onClick={e => deleteHandler(subject.id)} className="btn btn-danger btn-sm">Delete</button>
							<Link href={ route('subject.edit', { id: subject.id }) } className="btn btn-primary btn-sm">Update</Link>
						</td>
						</tr>
						</>) :"No records available." }
	        </tbody>
	    </table>
	    <div className="flex justify-between mt-4">
	        <div className="text-sm text-slate-500">
	        { subjects && <>
	    	   	 Showing <b>{subjects.current_page}</b> of {subjects.total}
	        	</>
	    	}
	        </div>
	        <div>
	        { subjects && subjects.links.map((link) => (
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

SubjectList.layout = page => <DashboardLayout children={page} />