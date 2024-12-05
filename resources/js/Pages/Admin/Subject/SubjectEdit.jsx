import DashboardLayout from '../DashboardLayout.jsx'
import { Link, useForm } from '@inertiajs/react'

export default function SectionEdit({ subject }) {
	const { data, setData, put, errors, processing } = useForm({
		name: subject.name,
	});

	const submitHandler = (e) => {
		e.preventDefault()

		put( route('subject.update', { id: subject.id }) )
	}


	return (<>
			<div className="">
    <div className="mx-auto">
      <div className="bg-white p-6">
      { errors.name && (
		      	<div role="alert" className="rounded border-s-4 border-red-400 bg-red-100 p-4 mb-4">
		            <strong className="block font-bold text-red-800"> Validation Error! </strong>
		            <p className="mt-2 text-sm text-red-700 font-medium">
		             { errors.name }
		            </p>
		         </div>
	          )}
        <h1 className="text-lg font-semibold text-gray-700 mb-3">
          Subject information
        </h1>
        <p className="text-gray-500  mb-6 text-sm">
          partial information only.
        </p>
        <form onSubmit={submitHandler}>
          <div>
            <input
              type="text"
              value={data.name}
		      onChange={e => setData('name', e.target.value)}
              placeholder="Name"
              className="border p-2 rounded w-full"
            />
		      
          </div>
          <button
            type="submit"
            id="theme-toggle"
            disabled={processing}
            className="mt-4 py-2 px-4 text-md rounded bg-slate-800 text-white hover:bg-slate-900 focus:outline-none"
          >
            { processing ? 'Updating...' : 'Save Changes'}
          </button>
        </form>
      </div>
    </div>
  </div>
  </>
)

}

SectionEdit.layout = page => <DashboardLayout children={page} title="Edit student"/>
