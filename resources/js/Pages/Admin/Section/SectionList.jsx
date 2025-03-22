import DashboardLayout from '../DashboardLayout.jsx'
import { Link, useForm, router } from '@inertiajs/react'
import SubjectList from '../Subject/SubjectList.jsx'
import AssignSubject from '../SectionSubject/Create.jsx'

export default function SectionList({ sections, subjects }) {

	const { data, setData, post, errors, processing } = useForm({
		subject_name: '',
		section_name: ''
	});


	const deleteHandler = (id) => {
		router.delete( route('section.destroy', { id: id }) );
	}

	const storeSubject = (e) => {	
		e.preventDefault();
		post( route('subject.store') );
	}

	const storeSection = (e) => {	
		e.preventDefault();
		post(route('section.store') );
	}

	return (<>
		<div className="p-4 shadow-sm">
			<div className="my-4 flex flex-col  gap-4">
                    <h1 class="font-semibold">
                        Section Management
                    </h1>

                <div>
                <form onSubmit={storeSection}>
                	<input value={data.section_name} onChange={(e) => setData('section_name', e.target.value)} className="form-control" placeholder="Subject name"/>
                    <button
                    	type='submit'
                        className="btn btn-primary btn-sm mt-2"
                    >
                        Insert new
                    </button>
                	
                </form>
                </div>

                </div>

			<table className="table table-bordered table-hover table-responsive ">
	        <thead>
	        <tr>
	            <th>
	                Section Name
	            </th>
	            <th >
	                Action
	            </th>
	        </tr>
	        </thead>
	        <tbody className="">
	       { sections?.data.length > 0 ? sections.data.map((section, index) => <>
						<tr key={section.id}>
			             <td className="px-3">
			            	<p>
								{section.name}
			            	</p>
			            </td>
			            <td class="flex flex-row gap-2">
			             <a href={`/admin/schedule/show/${section.id}`} class="btn btn-sm btn-warning">
                                View Class Schedule
                            </a>
                                            <button
                                                onClick={e => deleteHandler(section.id)}
                                                className="btn btn-danger btn-sm"
                                            >
                                                Delete
                                            </button>
                                           <Link href={ route('section.edit', { id: section.id }) } class="btn btn-sm btn-primary">
                                Update
                            </Link>
                                        </td>

                            
                           
                           
						</tr>
						</>) : <p className="text-muted p-4 text-sm bg-slate-200">No records available.</p> }
	        </tbody>
	    </table>
	    <div className="flex justify-between mt-4">
	        <div className="">
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

	    {/* Subject */}
		<div className="my-4 flex flex-col  gap-4">
                    <h1 class="font-semibold">
                        Subject Management
                    </h1>

                <div>
                <form onSubmit={storeSubject}>
                	<input value={data.subject_name} onChange={(e) => setData('subject_name', e.target.value)} className="form-control" placeholder="Subject name"/>
                    <button
                    	type='submit'
                        className="btn btn-primary btn-sm mt-2"
                    >
                        Insert new
                    </button>
                	
                </form>
                </div>

                </div>

		<SubjectList subjects={subjects}/>


		{/*Assign Subject to Section*/}

		<AssignSubject />

		</div>



	</>)
}

SectionList.layout = page => <DashboardLayout children={page}/>
