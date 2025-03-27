import DashboardLayout from '../DashboardLayout.jsx'
import { Link, useForm, router } from '@inertiajs/react'

export default function EventsIndex({ events }) {
	const deleteHandler = (id) => {
		router.delete( route('events.destroy', { id: id }) );
	}

    const limitText = (text) => {
        const limit = 12;
        return text.length > limit ? text.slice(0, limit) + '...': text;
    }
    console.log(events)
	return (<>
		<div className="">
			 <div className="my-4 flex flex-row items-center gap-4">
                    <h1 class="font-semibold">
                        Event Management
                    </h1>

                <div>
                    <Link
                        href={route('events.create')}
                        className="btn btn-primary btn-sm mt-2"
                    >
                        Create New Event
                    </Link>
                    
                </div>
            </div>
			<table className="table table-bordered table-hover table-responsive">
	        <thead className="">
	        <tr>
                <th >
	                Category
	            </th>
	            <th>
	                Title
	            </th>
	            <th>
	                Description
	            </th>
	            <th>
	                Image
	            </th>
	            <th>
	                Date
	            </th>
	            <th>
	                Options
	            </th>
	        </tr>
	        </thead>
	        <tbody className="">
	       { events && events?.data.length > 0 ? events.data.map((event, index) => <>
						 <tr>
                        <td >{ event.category }</td>
                        <td >{ event.title }</td>
                        <td >{ limitText(event.description) }</td>
                        <td ><img width="100" src={`/storage/${event.image}`}/></td>
                        <td >{ event.date }</td>
						<td >
                            <button class="btn btn-sm btn-danger" onClick={e => deleteHandler(event.id)}>
                                Delete
                            </button>
                            </td>
						</tr>
						</>) : "No records available." }
	        </tbody>
	    </table>
	    <div className="flex justify-between mt-4">
	        <div className="text-sm text-slate-500">
	        Showing <b>{	events && events.current_page}</b> of { events &&  events.total }
	        </div>
	        <div>
	        { events && events.links.map((link) => (
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

EventsIndex.layout = page => <DashboardLayout children={page}/>
//export default EventsIndex

