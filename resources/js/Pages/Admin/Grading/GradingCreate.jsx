import DashboardLayout from '../DashboardLayout.jsx'
import { useState, useEffect } from 'react' 
import { useForm } from '@inertiajs/react'
import axios from 'axios'

export default function GradeCreate({ student, subjects }) {
	const { errors, get, post, data, setData } = useForm({
	    student_id: student.id,
	    section_id: student.section.id,
	    subjects: subjects.map(subject => ({
	        subject_id: subject.id,
	        average: 0,
	        term: "",
	        semester: ""
	    }))
	});

	const submitHandler = (e) => {
    e.preventDefault();
    post(route('grade.store'));
};

return (
    <>
        <div className="card p-4 shadow-sm">
            <div className="card-header my-4 flex flex-col gap-4">
                <h1>
                    <b>Grading Student:</b> {student.name}
                </h1>
            </div>

            <div className='card-body'>
                <form onSubmit={submitHandler}>
                    <table className='table table-bordered table-responsive'>
                        <thead>
                            <tr>
                                <th>Subject</th>
                                <th>Average</th>
                                <th>Term</th>
                                <th>Semester</th>
                            </tr>
                        </thead>

                        <tbody>
                            {data.subjects.map((subject, index) => (
                                <tr key={index}>
                                    <td>{subjects[index].name}</td>
                                    <td>
                                        <input
                                            value={subject.average}
                                            onChange={e => {
                                                const newSubjects = data.subjects.map((subj, i) =>
                                                    i === index
                                                        ? { ...subj, average: e.target.value } 
                                                        : subj
                                                );
                                                setData('subjects', newSubjects);
                                            }}
                                            type='number'
                                            className='form-control'
                                        />
                                    </td>
                                    <td>
                                        <select
                                            value={subject.term}
                                            onChange={e => {
                                                const newSubjects = data.subjects.map((subj, i) =>
                                                    i === index
                                                        ? { ...subj, term: e.target.value } 
                                                        : subj
                                                );
                                                setData('subjects', newSubjects);
                                            }}
                                            className='form-control'
                                        >
                                            <option disabled></option>
                                            <option value='Prelim'>Prelim</option>
                                            <option value='Midterm'>Midterm</option>
                                            <option value='Finals'>Finals</option>
                                        </select>
                                    </td>
                                    <td>
                                        <select
                                            value={subject.semester}
                                            onChange={e => {
                                                const newSubjects = data.subjects.map((subj, i) =>
                                                    i === index
                                                        ? { ...subj, semester: e.target.value }
                                                        : subj
                                                );
                                                setData('subjects', newSubjects);
                                            }}
                                            className='form-control'
                                        >
                                            <option disabled></option>
                                            <option value='First Semester'>First Semester</option>
                                            <option value='Second Semester'>Second Semester</option>
                                        </select>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <button type='submit' className='btn btn-success my-2'>Save Grades</button>
                </form>
            </div>
        </div>
    </>
);
}
GradeCreate.layout = page => <DashboardLayout children={page} title="Add Grading"/>;