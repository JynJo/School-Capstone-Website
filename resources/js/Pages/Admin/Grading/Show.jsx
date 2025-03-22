import DashboardLayout from '../DashboardLayout.jsx'

export default function Show({ student }) {
	return (<>
		<div className='card'>
			<div className='card-header'>
				<h1 className='text-lg font-bold'>{ student.name }</h1>
				<span>Section: <b>{ student.section.name }</b></span>
			</div>
			<div className='card-body'>
				<table className='table table-bordered table-responsive table-hover'>
					<thead>
						<th>Subject</th>
						<th>Average</th>
						<th>Term</th>
						<th>Semester</th>
					</thead>
					<tbody>
						{ student.grades.map((grades, index) => <tr key={index}>
							<td>{grades.subject.name}</td>
							<td>{grades.average}%</td>
							<td>{grades.term}</td>
							<td>{grades.semester}</td>
						</tr>)}
					</tbody>
				</table>
			</div>
		</div>

	</>)
}

Show.layout = page => <DashboardLayout children={page} title="Add Grading"/>;
