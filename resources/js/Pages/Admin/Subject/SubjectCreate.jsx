import DashboardLayout from '../DashboardLayout.jsx'
import { useForm } from '@inertiajs/react'

export default function SectionCreate() {
	const { data, setData, post, errors, processing } = useForm({
		name: '',
	});


	const submitHandler = (e) => {	
		e.preventDefault();
		post( route('subject.store') );
	}

	return (		 
		<div className="">
    <div className="mx-auto">
      <div className="bg-white p-6">
      { errors.name && (
		      	<div role="alert" className="rounded border-s-4 border-red-400 bg-red-100 p-4 mb-4">
		            <strong className="block font-bold text-red-800">Validation error</strong>
		            <p className="mt-2 text-sm text-red-700 font-medium">
		             { errors.name }
		            </p>
		         </div>
	          )}
        <form onSubmit={submitHandler}>
          <div>
            <input
              type="text"
              value={data.name}
		      onChange={e => setData('name', e.target.value)}
              placeholder="Section Name"
              className="border p-2 rounded w-full"
            />
		      
          </div>
          <button
            type="submit"
            id="theme-toggle"
            disabled={processing}
            className="btn btn-primary"
          >
            { processing ? 'Saving...' : 'Save'}
          </button>
        </form>
      </div>
    </div>
  </div>
)
}
SectionCreate.layout = page => <DashboardLayout children={page}/>