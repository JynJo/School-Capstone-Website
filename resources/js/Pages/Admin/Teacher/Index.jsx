import DashboardLayout from '../DashboardLayout.jsx'
import { Link, useForm, router } from '@inertiajs/react'

export default function TeacherIndex({ auth, teachers }) {
	const deleteHandler = (id) => {
		router.delete( route('teacher.destroy', { id: id }) );
	}
    console.log(teachers)
	return (<>
		<div className="p-4">
			<div className="mb-4">
	            <h3 className="text-lg font-semibold text-slate-600 mb-2 ">List of the current teachers.</h3>
	            <p className="text-slate-500 text-sm">There's a scroll bar in the bottom (in case of table overlapping).</p>
	        </div>
			<Link href={route('teacher.create')} className="font-light p-2 btn btn-dark m-4 text-uppercase">Add new teacher</Link>
			<Link href={route('teacher-section.create')} className="font-light p-1 btn btn-dark m-4 text-uppercase">Assign teacher to advisory</Link>
			<table>
	        <thead className="bg-gray-50">
	        <tr>
	            <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase ">
	                Name
	            </th>
	            <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">
	                Email
	            </th>
	            <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">
	                Section
	            </th>
	            <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">
	                Gender
	            </th>
	            <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase ">
	                Address
	            </th>
	            <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">
	                Contact Number
	            </th>
	            <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">
	                Options
	            </th>
	        </tr>
	        </thead>
	        <tbody className="">
	       { teachers && teachers?.data.length > 0 ? teachers.data.map((teacher, index) => <>
						 <tr className="hover:bg-gray-100">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">{ teacher.name }</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{ teacher.email }</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{ teacher.section ? teacher.section.name : <p className="text-red-600 text-sm">No Advisory</p> }</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800  text-capitalize">{ teacher.gender }</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">{ teacher.address }</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">{ teacher.phone_number }</td>
						<td className="">
                        <div class="hs-dropdown [--strategy:absolute] [--flip:false] hs-dropdown-example relative inline-flex">
                            <button id="hs-dropdown-example" type="button" class="hs-dropdown-toggle py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none "aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                                Actions
                                <svg class="hs-dropdown-open:rotate-180 size-4 text-gray-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="m6 9 6 6 6-6"></path>
                                </svg>
                            </button>

                            <div class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 w-56 hidden z-10 mt-2 min-w-60 bg-white shadow-md rounded-lg p-2"role="menu" aria-orientation="vertical" aria-labelledby="hs-dropdown-example">
                            <Link class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 " href={ route('teacher.edit', { id: teacher.id}) }>
                                Edit
                            </Link>
                            <Link class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100" href={ route('teacher.show', { id: teacher.id })}>
                                View
                            </Link>
                            <button class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 " onClick={e => deleteHandler(teacher.id)}>
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
	        Showing <b>{	teachers && teachers.current_page}</b> of { teachers &&  teachers.total }
	        </div>
	        <div>
	        { teachers && teachers.links.map((link) => (
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

TeacherIndex.layout = page => <DashboardLayout children={page}/>
