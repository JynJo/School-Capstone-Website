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
		<div className="p-4">
			<div className="mb-4">
	            <h3 className="text-lg font-semibold text-slate-600 mb-2 ">List of the Events.</h3>

            <Link href={ route('events.create')}>
                <button type="button" class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none">
                    New event
                    <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M5 12h14"></path>
                        <path d="m12 5 7 7-7 7"></path>
                    </svg>
                </button>
            </Link>

	        </div>
			<table className="w-full">
	        <thead className="bg-gray-50">
	        <tr>
                <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase ">
	                Category
	            </th>
	            <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase ">
	                Title
	            </th>
	            <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">
	                Description
	            </th>
	            <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">
	                Image
	            </th>
	            <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">
	                Date
	            </th>
	            <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">
	                Options
	            </th>
	        </tr>
	        </thead>
	        <tbody className="">
	       { events && events?.data.length > 0 ? events.data.map((event, index) => <>
						 <tr className="hover:bg-gray-100">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">{ event.category }</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">{ event.title }</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{ limitText(event.description) }</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800  text-capitalize"><img width="100" src={`/storage/${event.image}`}/></td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">{ event.date }</td>
						<td className="">
                        <div class="hs-dropdown [--strategy:absolute] [--flip:false] hs-dropdown-example relative inline-flex">
                            <button id="hs-dropdown-example" type="button" class="hs-dropdown-toggle py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none "aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                                Actions
                                <svg class="hs-dropdown-open:rotate-180 size-4 text-gray-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="m6 9 6 6 6-6"></path>
                                </svg>
                            </button>

                            <div class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 w-56 hidden z-10 mt-2 min-w-60 bg-white shadow-md rounded-lg p-2"role="menu" aria-orientation="vertical" aria-labelledby="hs-dropdown-example">
                            {/*<Link class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 " href={ route('event.edit', { id: event.id}) }>
                                Edit
                            </Link>
                            <Link class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100" href={ route('event.show', { id: event.id })}>
                                View
                            </Link>
                            */}
                            <button class="w-full flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 " onClick={e => deleteHandler(event.id)}>
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

