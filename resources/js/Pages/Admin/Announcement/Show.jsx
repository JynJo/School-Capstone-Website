import DashboardLayout from '../DashboardLayout.jsx'
import { Link } from '@inertiajs/react'

const Show = ({ announcement }) => {
    return (<>
        <section className='p-6'>
        <Link className='btn btn-sm btn-primary my-2' href={ route('announcement.index') }>Back</Link>
  <div className="">
  <div>
        <img
            src={`/storage/${announcement.image}`}
            className="rounded"
            width="800"
        />
      </div>
      <div>
        <div className="max-w-lg md:max-w-none">
          <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
            { announcement.title }
          </h2>

          <p className="mt-4 text-gray-700 break-words" dangerouslySetInnerHTML={{ __html: announcement.content}}>
          </p>
        <small className="text-gray-500">Announced on: { new Date(announcement.created_at).toLocaleString()}</small>
        </div>
      </div>

      
  </div>
</section>


    </>)
}

Show.layout = page => <DashboardLayout children={page}/>
export default Show;
