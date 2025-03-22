import { useForm } from '@inertiajs/react'


export default function CreateSchedule({ sections }) {
	const { data, setData, post, errors, processing } = useForm({
			section_id: '',
			subject_id: '',
	});

	const uploadSchedule = (e) => {
		e.preventDefault()
		post( route('schedule.store') );

	}

	return <>
		<div className="mt-4">
			<h1 className="mb-2 font-semibold">
			 	Upload Class Schedule
			 </h1>

			 <form onSubmit={uploadSchedule}>
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

	          <input type='file' onChange={e => setData('image', e.target.files[0])} className='form-control'/>

		    <button disabled={processing} className="mt-2 btn btn-primary btn-sm" type="submit">{ processing ? 'Uploading...' : 'Upload'}</button>

			 </form>


			</div>
	</>
}