import DashboardLayout from '../DashboardLayout.jsx'
import { useForm } from '@inertiajs/react'

export default function CombinationCreate({ sections, teachers }) {
	const { data, setData, post, errors, processing } = useForm({
		section_id: '',
		teacher_id: '',
	});


	const submitHandler = (e) => {	
		e.preventDefault();
		post( route('teacher-section.store') );
	}


	return (
		<div className="container p-6">
      <div className="bg-white p-6">
		
		{ errors.subject_id  && errors.section_id && (
		      	<div role="alert" className="rounded border-s-4 border-red-400 bg-red-100 p-4 mb-4">
		            <strong className="block font-bold text-red-800"> Validation Error! </strong>
		            <p className="mt-2 text-sm text-red-700 font-medium">
		            <ul>
		            	<li>
		             		{errors.subject_id} 
		            	</li>
		            	<li>
		            	 	{errors.section_id}
		            	</li>
		            </ul>
		            </p>
		         </div>
	    )}
	    { errors.subject_id  && !errors.section_id && (
		      	<div role="alert" className="rounded border-s-4 border-red-400 bg-red-100 p-4 mb-4">
		            <strong className="block font-bold text-red-800"> Validation Error! </strong>
		            <p className="mt-2 text-sm text-red-700 font-medium">
		            <ul>
		            	<li>
		             		{errors.subject_id} 
		            	</li>
		            </ul>
		            </p>
		         </div>
	    )}
	    { errors.section_id  && !errors.subject_id && (
		      	<div role="alert" className="rounded border-s-4 border-red-400 bg-red-100 p-4 mb-4">
		            <strong className="block font-bold text-red-800"> Validation Error! </strong>
		            <p className="mt-2 text-sm text-red-700 font-medium">
		            <ul>
		            	<li>
		             		{errors.section_id} 
		            	</li>
		            </ul>
		            </p>
		         </div>
	    )}
	     <h1 className="text-lg font-semibold text-gray-900">
        </h1>
        <p className="text-gray-500  mb-6 text-sm">
          NOTE: This page is for assigning subjects to sections.
        </p>
		<form onSubmit={submitHandler}>
		    <div className="mb-4">
	          <select 
			      value={data.section_id}
			      onChange={e => setData('section_id', e.target.value)}
			      className="border p-2 rounded w-full">
			      	<option  hidden>SELECT SECTION</option>
			      	{ sections.length > 0 ? sections.map((section) => (
			      		<option value={section.id}>{section.name}</option>
			      	)) : <option disabled>---No section available---</option>}
			      </select>
          </div>

		   <div className="mb-4">
	          <select 
			      value={data.subject_id}
			      onChange={e => setData('teacher_id', e.target.value)}
			      className="border p-2 rounded w-full">
			      	<option  hidden>SELECT TEACHER</option>
			      	{ teachers.length > 0 ? teachers.map((teacher) => (
			      		<option value={teacher.id}>{teacher.name}</option>
			      	)) : <option disabled>---No section available---</option>}
			      </select>
          </div>
		    <button disabled={processing} className="btn btn-dark" type="submit">{ processing ? 'Saving...' : 'Save'}</button>
	</form>
</div>
</div>
)
}
CombinationCreate.layout = page => <DashboardLayout children={page}/>