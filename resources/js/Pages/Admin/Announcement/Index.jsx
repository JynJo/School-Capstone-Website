import DashboardLayout from '../DashboardLayout.jsx'
import { Link, useForm } from '@inertiajs/react'

const Index = ({ announcements }) => {

    const { post } = useForm();

    const deleteHandler = (id) => {
        post( route('announcement.delete', { id: id }));
    }
    return (<>
        <h2 className="text-lg font-bold">Announcements</h2>
        <div class="bg-white border border-gray-200 shadow-sm rounded-xl p-4 md:p-5 ">
           <Link href={ route('announcement.create')}>
                <button type="button" class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none">
                    New announcement
                    <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M5 12h14"></path>
                        <path d="m12 5 7 7-7 7"></path>
                    </svg>
                </button>
            </Link>
            <div class="flex flex-col">
  <div class="-m-1.5 overflow-x-auto">
    <div class="p-1.5 min-w-full inline-block align-middle">
      <div class="min-h-[90vh]">
        <table class="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th scope="col" class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Image</th>
              <th scope="col" class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase ">Title</th>
              <th scope="col" class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase ">Notice For</th>
              <th scope="col" class="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase ">Action</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200 ">
            { announcements.data.map((announcement, index) => (
                <tr class="hover:bg-gray-100">
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800"><img width="80"src={`/storage/${announcement.image}`}/></td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">{announcement.title.length > 20 
    ? `${announcement.title.substring(0, 20)}...` 
    : announcement.title}</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 text-uppercase">{ announcement.notice_for}</td>
                    <td className="z-50">
                        <div class="hs-dropdown [--strategy:absolute] [--flip:false] hs-dropdown-example relative inline-flex">
                            <button id="hs-dropdown-example" type="button" class="hs-dropdown-toggle py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none "aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                                Actions
                                <svg class="hs-dropdown-open:rotate-180 size-4 text-gray-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="m6 9 6 6 6-6"></path>
                                </svg>
                            </button>

                            <div class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 w-56 hidden z-10 mt-2 min-w-60 bg-white shadow-md rounded-lg p-2"role="menu" aria-orientation="vertical" aria-labelledby="hs-dropdown-example">
                            <Link href={ route('announcement.edit', { id: announcement.id }) } class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 ">
                                Edit
                            </Link>
                            <Link href={ route('announcement.show', { id: announcement.id}) } class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100">
                                View
                            </Link>
                            <button class="flex w-full items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 " onClick={e => deleteHandler(announcement.id)}>
                                Delete
                            </button>
                            </div>
                            </div>
                            </td>
                </tr>
            ))}
            </tbody>
        </table>
      </div>
    </div>
  </div>
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

</div>
    </>)
}

Index.layout = page => <DashboardLayout children={page}/>

export default Index;
