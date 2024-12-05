import DashboardLayout from '../DashboardLayout.jsx'
import { Link, useForm } from '@inertiajs/react'

export default function SectionEdit({ section, subject, subjects }) {
	const { data, setData, put, errors, processing } = useForm({
			subject_id: "",
		});

	const submitHandler = (e) => {
		e.preventDefault()
		put(route('section-subject.update', { section_id: section.id, subject_id: subject.id }));
	}
	return (<>
		{ JSON.stringify(errors)}
		<Link href={ route('section-subject.index') } className="btn btn-primary">Back</Link>
		<div className="container mt-2 p-4 bg-light border rounded">
			<form onSubmit={submitHandler}>
			    <div className="form-group">
			      <label htmlFor="section">Select Section</label>
			      <select 
			      	className="select form-control">
			      	<option selected disabled>{ section.name }</option>
			      </select>
			    </div>

			    <div className="form-group">
			      <label htmlFor="section">Assign Subject</label>
			      <select 
			      	value={data.subject_id}
			      	onChange={e => setData('subject_id', e.target.value)}
			      	className="select form-control">
			      	<option disabled value="">{ subject.name } </option>
			      	{ subjects.length > 0 ? subjects.map((subject) => (
			      		<option value={subject.id} >{subject.name}</option>
			      	)) : <option disabled>---No subject available---</option>}
			      </select>
			      { errors.subject_id && <p className="text-danger">{ errors.subject_id }</p>}
			    </div>

			  
			    <button disabled={processing} className="btn btn-primary form-control" type="submit">{ processing ? 'Updating...' : 'Save Changes'}</button>
		</form>
		</div>
</>
)

}

SectionEdit.layout = page => <DashboardLayout children={page} title="Edit Assigned Subject"/>
