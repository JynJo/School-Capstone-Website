import DashboardLayout from '../DashboardLayout.jsx'
import { useState, useEffect } from 'react' 
import { useForm } from '@inertiajs/react'
import axios from 'axios'

export default function GradeCreate({sections}) {
	const { errors, get, post, data, setData } = useForm({
		student_id: null,
		section_id: "",
		term: "",
		subjects: {},
		average: 0
	});

	const [students, setStudents] = useState();
	const [subjects, setSubjects] = useState();

	useEffect(() => {

		if (data.section_id == "none") {
			setStudents(null)
			setSubjects(null)
		}else if (data.section_id != "") {
			axios.get( route('get.students', { section_id: data.section_id}) )
			.then((res) => {
				setStudents(res.data.section[0].students)
				console.log('student', res.data.section[0].students)
				console.log('subjects', res.data.subjects)
				setSubjects(res.data.subjects)

                const subjectsData = res.data.subjects.reduce((acc, subject) => {
                    acc[subject.id] = ""; 
                    
                    return acc;
              	}, {});
                setData('subjects', subjectsData);

			})
		}

	}, [data.section_id])

	useEffect(() => {
		handleAverage()
	}, [data.subjects])

	const submitHandler = (e) => {
		e.preventDefault()

		if (data.section_id == "" || data.section_id == "none") {
			alert('Please select which section');
			return 
		}

		post(route('grade.store'))

	}
	const handleGradeChange = (subjectId, grade) => {
        setData('subjects', {
            ...data.subjects,
            [subjectId]: grade
        });
    };

    const handleAverage = () => {
    	let grades = Object.values(data.subjects)

    	let average = grades.reduce((acc, val) => {
    		return acc + parseInt(val)
    	}, 0);

    	setData('average', (average/grades.length).toFixed(2));
    }

	return (<>
		{ console.log(subjects)}
		{ errors.subject_id && 
		<div class="alert alert-danger" role="alert">
		  { errors.subject_id }
		</div>
		}
		{ errors.student_id && 
		<div class="alert alert-danger" role="alert">
		  { errors.student_id }
		</div>
		}
	<div className="container mt-2 p-4 bg-light border rounded">
	 	<p className="text-sm text-muted mb-3">Take note that the grades that are already set will be updated.</p>
		<form onSubmit={submitHandler}>
			<div className="form-group">
				<label htmlFor="section">Select Section</label>
				      <select 
				      value={data.section_id}
				      onChange={e => setData('section_id', e.target.value)}
				      className="select form-control">
				      	<option hidden>---Select Section---</option>
						<option value="none" className="text-muted">None</option>

				      	{ sections.length > 0 ? sections.map((section) => (
				      		<option value={section.id}>{section.name}</option>
				      	)) : <option disabled>---No section available---</option>}
				      </select>
				      { errors.section_id && <p className="text-danger">{ errors.section_id }</p>}
			</div>

			{ students && (
				<div className="form-group">
				<label htmlFor="section">Select Student</label>
				      <select 
				      value={data.student_id}
				      onChange={e => setData('student_id', e.target.value)}
				      className="select form-control">
				      	<option  hidden>---Select Student---</option>
				      	{ students.map((student) => (
				      		<option value={student.id}>{student.user.name}</option>
				      	))}

				      </select>
				</div>
			)}

			<select 
			value={data.term}
			onChange={e => setData('term', e.target.value)}
			className="select form-control">
				<option  hidden>---Select Term---</option>
				<option value="prelims">Prelims</option>
				<option value="mid_term">Midterm</option>
				<option value="finals">Finals</option>
			</select>

			{ subjects && (<>
				<div className="form-group">
				    { subjects.map((subject) => (<>
				      	<div className="form-group">
					      <label htmlFor={`subject-${subject.id}`}>{subject.name}</label>
					      <input
					        type="text"
					        className="form-control"
					        id={`subject-${subject.id}`}
					        placeholder="00.00"
					        value={data.subjects[subject.id] || ""}
                            onChange={(e) => handleGradeChange(subject.id, e.target.value)}
					      />
					      { errors.name && <p className="text-danger">{ errors.name }</p>}
					    </div>
				      	{ errors[`subjects.${subject.id}`] && <p className="text-danger">{ errors[`subjects.${subject.id}`] }</p>}
				    </>))}
				</div>
				<label htmlFor="average">
					Average
				</label>
				<input 
				value={data.average}
				id="average" type="number" disabled className="form-control w-full mb-2"/>


				</>
			)}

			<button type="submit" className="btn btn-primary">Declare Grades</button>
		</form>
	</div>
	</>)
}
GradeCreate.layout = page => <DashboardLayout children={page} title="Add Grading"/>