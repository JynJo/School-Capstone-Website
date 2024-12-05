import DashboardLayout from '../DashboardLayout.jsx'
import { Link, useForm, router } from '@inertiajs/react'

export default function StudentList({ grades }) {

	// const deleteHandler = (id) => {
	// 	router.delete( route('student.destroy', { id: id }) );
	// }

	return (<>
		{ console.log(grades)}
		<div className="container p-4 bg-light border rounded">
			<table className="table table-bordered table-striped shadow-sm">
				<thead>
					<tr>
						<th>#</th>
						<th>ID</th>
						<th>Name</th>
						<th>Subject</th>
						<th>Grade</th>
						<th>Final Average</th>
						<th>Term</th>
						<th>Semester</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					{ grades.data.length > 0 ? grades.data.map((grade, index) => (
							<tr key={grade.id}>
								<td>{(grades.current_page - 1) * grades.per_page + index + 1}</td>
								<td>{grade.student.id_number}</td>
								<td>{grade.student.user.name}</td>
								<td>{grade.subject_id}</td>
								<td>{grade.subject_average}</td>
								<td>{grade.final_average || 'Not set'}</td>
								<td style={{ textTransform: 'capitalize'}}>{grade.term}</td>
								<td style={{ textTransform: 'capitalize'}}>{grade.semester}</td>
								<td>
									<button onClick={e => deleteHandler(grade.id)} className="btn btn-danger btn-sm mr-2">Delete</button>
									<Link href={ route('student.edit', { id: grade.id }) } className="btn btn-primary btn-sm">Update</Link>
								</td>
							</tr>
						)
					) : <p className="text-muted">No records available.</p> }
				</tbody>
			</table>
			<div>
				{ grades.links.map((link) => (
					link.url ? (
					<Link 
						key={link.url}
						href={link.url}
						dangerouslySetInnerHTML={{ __html: link.label }}
						className={`px-2 btn ${link.active ? 'btn-primary' : ''}`}
					/>) : (
						<span
							key={link.url}
							dangerouslySetInnerHTML={{ __html: link.label }}
							className={`px-2 btn text-muted`}
						>
							
						</span>
					)
				))}
			</div>
		</div>

	</>)
}

StudentList.layout = page => <DashboardLayout children={page} title="Grade list"/>