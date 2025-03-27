import DashboardLayout from '../DashboardLayout.jsx'
import { Link, useForm } from '@inertiajs/react'
import EventsList from '../Events/Index.jsx'
const Index = ({ announcements, events }) => {

    const { post } = useForm();

    const deleteHandler = (id) => {
        post( route('announcement.delete', { id: id }));
    }
    return (<>
        <div className='p-4 shadow-sm'>
           <div className="my-4 flex flex-row items-center gap-4">
                    <h1 class="font-semibold">
                        Announcement Management
                    </h1>

                <div>
                    <Link
                        href={route('announcement.create')}
                        className="btn btn-primary btn-sm mt-2"
                    >
                        Create New Announcement
                    </Link>
                    
                </div>
            </div>
  <div >
        <table class="table table-responsive table-hover table-bordered">
          <thead>
            <tr>
              <th >Image</th>
              <th >Title</th>
              <th>Notice For</th>
              <th >Action</th>
            </tr>
          </thead>
          <tbody >
            { announcements.data.map((announcement, index) => (
                <tr class="">
                    <td><img width="80"src={`/storage/${announcement.image}`}/></td>
                    <td>{announcement.title.length > 20 
                        ? `${announcement.title.substring(0, 20)}...` 
                        : announcement.title}</td>
                    <td className='uppercase' >{ announcement.notice_for}</td>
                    <td className="flex flex-row gap-2">
                            <Link 
                                href={ route('announcement.show', { id: announcement.id}) } 
                                className='btn btn-warning btn-sm'>
                                View
                            </Link>
                            <Link 
                                href={ route('announcement.edit', { id: announcement.id }) } 
                                className='btn btn-primary btn-sm'>
                                Update
                            </Link>

                            <button 
                                className='btn btn-danger btn-sm'
                                onClick={e => deleteHandler(announcement.id)}>
                                Delete
                            </button>
                            </td>
                </tr>
            ))}
            </tbody>
        </table>
  </div>

<div className="flex gap-2 mt-4">
	        <div className="text-sm text-slate-500">
	        Showing <b>{announcements.current_page}</b> of { announcements.total }
	        </div>
	        <div>
	        { announcements.links.map((link) => (
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

        <EventsList events={events}/>

</div>
    </>)
}

Index.layout = page => <DashboardLayout children={page}/>

export default Index;
