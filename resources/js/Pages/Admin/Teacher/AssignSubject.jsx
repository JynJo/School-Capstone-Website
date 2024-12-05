import DashboardLayout from '../DashboardLayout.jsx'
import { useForm, Link } from '@inertiajs/react'

export default function CombinationCreate({ subjects, teacher, section}) {
	const { data, setData, post, errors, processing } = useForm({
		section_id: section.id,
		teacher_id: teacher.id,
		subject_id: '',
	});


	const submitHandler = (e) => {	
		e.preventDefault();
		post( route('teacher-subject.store') );
	}


	return (
		<div className="container p-6">
      <div className="bg-white p-6">
		<Link href={ route('teacher.show', { id: teacher.id }) }>Back</Link>
		<form onSubmit={submitHandler} className="mt-2">
		   <div className="mb-4">
	          <select 
			      value={data.subject_id}
			      onChange={e => setData('subject_id', e.target.value)}
			      className="border p-2 rounded w-full">
			      	<option  hidden>Select subject to assign to { teacher.name } for section {section.name}</option>
			      	{ subjects.length > 0 ? subjects.map((subject) => (
			      		<option value={subject.id}>{subject.name}</option>
			      	)) : <option disabled>---No subject available---</option>}
			      </select>
          </div>
		    <button disabled={processing} className="btn btn-dark" type="submit">{ processing ? 'Saving...' : 'Save'}</button>
	</form>
</div>
</div>
)
}
CombinationCreate.layout = page => <DashboardLayout children={page}/>