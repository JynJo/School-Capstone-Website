import DashboardLayout from '../DashboardLayout.jsx'
import { useState, useEffect } from 'react'
import { Row } from 'react-bootstrap'
import axios from 'axios'

export default function ScheduleList({ sections }) {
	const [sectionId, setSectionId] = useState();
	const [schedule, setSchedule] = useState();

	useEffect(() => {
		if (sectionId) {
			axios.get(route('get.schedule', { section_id: sectionId }))
				.then((response) => setSchedule(response.data));
		}
	}, [sectionId]);

	// Group schedules by subject (for a single row per subject)
	const groupedSchedule = schedule ? schedule.reduce((acc, sched) => {
		if (!acc[sched.subjects.name]) {
			acc[sched.subjects.name] = {
				subject: sched.subjects.name,
				days: {
					Monday: null,
					Tuesday: null,
					Wednesday: null,
					Thursday: null,
					Friday: null
				}
			};
		}
		// Assign the schedule to the correct day
		acc[sched.subjects.name].days[sched.days.name] = {
			start_time: sched.start_time,
			end_time: sched.end_time
		};
		return acc;
	}, {}) : {};

	const groupedScheduleArray = Object.values(groupedSchedule);

	return (
		<>
			{/* Section Selection */}
			<div className="form-group">
				<label htmlFor="section">Select Section</label>
				<select 
					value={sectionId}
					onChange={e => setSectionId(e.target.value)}
					className="select form-control"
				>
					<option hidden>---Select Section---</option>
					<option value="none" className="text-muted">None</option>
					{sections.length > 0 ? sections.map((section) => (
						<option value={section.id} key={section.id}>{section.name}</option>
					)) : <option disabled>---No section available---</option>}
				</select>
			</div>

			<Row className="p-2">
				<table className="table table-bordered">
					<thead>
						<tr>
							<th>Subject</th>
							<th>Monday</th>
							<th>Tuesday</th>
							<th>Wednesday</th>
							<th>Thursday</th>
							<th>Friday</th>
						</tr>
					</thead>
					<tbody>
						{groupedScheduleArray.length > 0 && groupedScheduleArray.map((subject, index) => (
							<tr key={index}>
								<td className="p-4">
									<span>{subject.subject}</span>
								</td>

								{/* Days */}
								<td>{subject.days.Monday ? `${subject.days.Monday.start_time} - ${subject.days.Monday.end_time}` : 'No Class'}</td>
								<td>{subject.days.Tuesday ? `${subject.days.Tuesday.start_time} - ${subject.days.Tuesday.end_time}` : 'No Class'}</td>
								<td>{subject.days.Wednesday ? `${subject.days.Wednesday.start_time} - ${subject.days.Wednesday.end_time}` : 'No Class'}</td>
								<td>{subject.days.Thursday ? `${subject.days.Thursday.start_time} - ${subject.days.Thursday.end_time}` : 'No Class'}</td>
								<td>{subject.days.Friday ? `${subject.days.Friday.start_time} - ${subject.days.Friday.end_time}` : 'No Class'}</td>
							</tr>
						))}
					</tbody>
				</table>
			</Row>
		</>
	)
}

ScheduleList.layout = page => <DashboardLayout children={page} title="Schedules list" />;
