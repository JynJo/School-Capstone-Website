import DashboardLayout from '../DashboardLayout.jsx'

export default function Subjects({ subjects }) {
	return <div className='card'>
		{ subjects && <>
			<div className="card-header">
				<h1 className='text-xl'>{subjects.name}</h1>
			</div>
			<div className="card-body">
			<h4 className="my-2 font-bold">Subjects: </h4>
			{ subjects.subjects.length > 0 ? (<>
				{ subjects.subjects.map((subject, index) => <div>
					{ subject.name }
				</div>
				)}
			</>) : (<><h4>No subjects available</h4></>)}
			</div>
		</>}

	</div>
}
Subjects.layout = page => <DashboardLayout children={page} />
