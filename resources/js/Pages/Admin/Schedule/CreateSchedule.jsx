import DashboardLayout from '../DashboardLayout.jsx'
import { useForm } from '@inertiajs/react'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function CreateSchedule({ sections, days }) {
	const { data, setData, post } = useForm({
		schedule: days.map(day => ({
			day_id: day.id,
			start_time: '',
			end_time: '',
		})),
	});
	const [sectionId, setSectionId] = useState();
	const [subjectId, setSubjectId] = useState();

	const [subjects, setSubjects] = useState();

	useEffect(() => {
		if (sectionId) {
		setData('section_id', sectionId);
			axios.get(route('get.assigned_subjects', { section_id: sectionId }))
			.then((response) => {
				console.log(response.data)
				setSubjects(response.data.subjects)
			})
		}

	}, [sectionId])

	useEffect(() => {
		setData('subject_id', subjectId);
	}, [subjectId])

	const handleTimeChange = (index, field, value) => {
		const updatedSched = [...data.schedule]
		updatedSched[index][field] = value;
		setData('schedule', updatedSched)
	}

	const submitHandler = (e) => {
		e.preventDefault()
		post(route('schedule.store'));
	}

	return (<div className="container mt-2 p-4 bg-light border rounded">
		<form onSubmit={submitHandler}>
		    <div className="form-group">
		      <label htmlFor="section">Select Section</label>
		      <select
		      	value={sectionId}
		      	onChange={e => setSectionId(e.target.value)}
		      	className="select form-control">
		      	<option  hidden>Please select</option>
		      	{
		      		sections.map(section => (
		      			<option  value={section.id}>{section.name}</option>
		      		))
		      	}
		      </select>
		    </div>

		     <div className="form-group">
		      <label htmlFor="section">Select Subject</label>
		      <select
		      	value={subjectId}
		      	onChange={e => setSubjectId(e.target.value)}
		      	className="select form-control">
		      	<option  hidden>Please select</option>
		      	{
		      		subjects && subjects.map(subject => (
		      			<option  value={subject.id}>{subject.name}</option>
		      		))
		      	}
		      </select>
		    </div>

		    <table className="table">
		    	<thead>
		    		<th>Day</th>
		    		<th>Time Start</th>
		    		<th>Time End</th>
		    	</thead>
		    	<tbody>
		    		{ days.map((day, index) => (
		    			<tr>
		    				<input type="hidden" value={day.id}/>
		    				<td>{day.name}</td>
		    				<td><input type="time" value={data['schedule'][index].start_time} onChange={e => handleTimeChange(index, 'start_time', e.target.value)}/></td>
		    				<td><input type="time" value={data['schedule'][index].end_time} onChange={e => handleTimeChange(index, 'end_time', e.target.value)}/></td>
		    			</tr>
		    			))
		    		}
		    	</tbody>
		    </table>
		    <button className="p-2 bg-slate-800 text-white block" type="submit">Create Schedule</button>
		</form>
</div>
)
}
CreateSchedule.layout = page => <DashboardLayout children={page} title="Assign Subject to a Section"/>
