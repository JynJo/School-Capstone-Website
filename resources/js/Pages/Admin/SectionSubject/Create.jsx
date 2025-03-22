import DashboardLayout from '../DashboardLayout.jsx'
import { useForm } from '@inertiajs/react'
import CreateSchedule from '../Schedule/CreateSchedule.jsx'
export default function AssignSubject({ sections, subjects }) {
	const { data, setData, post, errors, processing } = useForm({
		section_id: '',
		subject_id: '',
	});


	const submitHandler = (e) => {
		e.preventDefault();
		post( route('section-subject.store') );
	}

	const uploadSchedule = (e) => {
		e.preventDefault()
		post( route('schedule.store') );

	}


	return (<>
      <div className="mt-4">
			<h1 className="mb-2 font-semibold">
			 	Assign Subject
			 </h1>
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
	     
       
		<form onSubmit={submitHandler}>
		    <div className="mb-2">
	          <select
			      value={data.section_id}
			      onChange={e => setData('section_id', e.target.value)}
			      className="form-control">
			      	<option  hidden>Select Section</option>
			      	{ sections && sections.length > 0 ? sections.map((section) => (
			      		<option value={section.id}>{section.name}</option>
			      	)) : <option disabled>---No section available---</option>}
			      </select>
          </div>

		   <div>
	          <select
			      value={data.subject_id}
			      onChange={e => setData('subject_id', e.target.value)}
			      className="form-control">
			      	<option  hidden>Select Subject</option>
			      	{ subjects && subjects.length > 0 ? subjects.map((section) => (
			      		<option value={section.id}>{section.name}</option>
			      	)) : <option disabled>---No section available---</option>}
			      </select>
          </div>
		    <button disabled={processing} className="mt-2 btn btn-primary btn-sm" type="submit">{ processing ? 'Saving...' : 'Assign'}</button>
	</form>
</div>
	
	<CreateSchedule sections={sections}/>
	
</>)
}
