import StudentLayout from './Layout.jsx';
import { usePage, useForm } from '@inertiajs/react'
import { useEffect, useState } from 'react'
import axios from 'axios'

function GradeStudent({ section, students, subjects }) {
    const { teacher } = usePage().props;
    const { post, data, setData, errors } = useForm({
        term: null,
        studentId: null,
        subjectAverage: {},
        //letterGrade: null,
    });
    const { flash } = usePage().props;
    const submitHandler = (e) => {
        e.preventDefault();

        post( route('grades.store') );

    }

    const handleSubjectAverageChange = (key, value) => {
        setData('subjectAverage', {
            ...data.subjectAverage,
           [key]:value


        })
    }


    console.log(subjects)
  return (<>

  { Object.keys(errors).length > 0 && (
		      	<div role="alert" className="rounded border-s-4 border-red-400 bg-red-100 p-4 mb-4">
		            <strong className="block font-bold text-red-800"> Validation Error! </strong>
		            <p className="mt-2 text-sm text-red-700 font-medium">
		             { JSON.stringify(errors) }
		            </p>
		         </div>
	          )}


  { flash.success && (
            <div role="alert" className="rounded border-s-4 border-green-500 bg-green-200 p-4 mb-4">
            <strong className="block font-bold text-green-800"> Success! </strong>

            <p className="mt-2 text-sm text-green-700">
             { flash.success }
            </p>
          </div>

          )}

      <form onSubmit={submitHandler}>
     <div>
      <label htmlFor="HeadlineAct" className="block font-medium text-gray-900"> Choose Student </label>
      <select
        name="HeadlineAct"
        id="HeadlineAct"
        value={data.studentId}
        onChange={e => setData("studentId", e.target.value)}
        className="mt-1.5 w-full rounded-lg border-gray-300 text-gray-700 p-2"
      >
          <option value="">Please select a student</option>
        { students && students.map(student => <option value={student.id}>{ student.name }</option>) }
                </select>

     <select
        value={data.term}
        onChange={e => setData('term', e.target.value)}
        type="text"
        placeholder=""
        className="p-2 mt-2 w-full rounded border-gray-300 text-gray-700">
        <option value="">Please select a term</option>
        <option value="Prelims">Prelims</option>
        <option value="MidTerm">Mid Term</option>
        <option value="Finals">Finals</option>
    </select>


    </div>


        <table className="table table-bordered table-striped mt-4">
            <thead>
                <th>Subject</th>
                <th>Average</th>
            </thead>
            <tbody>
                { subjects && subjects.map(subject => (
                        <tr>
                            <td> { subject.name } </td>
                            <td>
                                <input
                                    value={data.subjectAverage[subject.id]}
                                    onChange={e => handleSubjectAverageChange(subject.id, e.target.value)}
                                    type="text"
                                    placeholder="00.00"
                                    className="p-2 w-full"/>
                            </td>
                        </tr>

                ))}


            </tbody>

        </table>

        <button type="submit" className="p-2 bg-slate-800 text-white rounded">Submit Grades</button>

      </form>


  </>);
}
GradeStudent.layout = (page) => <StudentLayout children={page} />;

export default GradeStudent;
