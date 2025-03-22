import React, { useEffect, useState } from "react";
import { Link, usePage, useForm } from "@inertiajs/react";
import { Button } from "react-bootstrap";
import { PhotoProvider, PhotoView } from 'react-photo-view';
import axios from 'axios'

function StudentLayout({ children }) {
    const { student, schedule, grades } = usePage().props;
    const { post } = useForm();


    const logoutHandler = () => {
        post(route("student.logout"))
    };

    console.log(grades)
    return (<div className='flex flex-row justify-center mt-4'>
        <div className="p-4 w-10/12 shadow-xl">

            <div>
                <h2>Name: <b>{student.name}</b></h2>
                <h2>Email: <b>{student.email}</b></h2>
                <h2>ID Number: <b>{student.id_number}</b></h2>
                <h2>Blood Type: <b>{student.blood_type}</b></h2>
                <h2>Address: <b>{student.address}</b></h2>
                <h2>Parent's Contact: <b>{student.parent_no}</b></h2>
                <h2>Birthday: <b>{student.birthday}</b></h2>
                <h2>Section: <b>{student.section.name}</b></h2>
            </div>
            <div className="my-4 flex flex-row  gap-4">
            <PhotoProvider>
                          <div>
                              <PhotoView src={`/storage/${schedule[0].image}`}>
                                <button className='btn btn-primary btn-sm'>View Class Schedule</button>
                              </PhotoView>
                          </div>
                        </PhotoProvider>
                <button className='btn btn-dark btn-sm' onClick={logoutHandler}>Logout</button>
            <div>
                </div>

                </div>

                <div className='my-4'>
                 <h1 class="font-semibold">
                    Academic Performance
                </h1>
                </div>
                <table className='table table-bordered table-responsive table-hover'>
                    <thead>
                        <th>Subject</th>
                        <th>Average</th>
                        <th>Term</th>
                        <th>Semester</th>
                    </thead>
                    <tbody>
                        { grades.map((grades, index) => <tr key={index}>
                            <td>{grades.subject.name}</td>
                            <td>{grades.average}%</td>
                            <td>{grades.term}</td>
                            <td>{grades.semester}</td>
                        </tr>)}
                    </tbody>
                </table>

                </div>
            </div>
    );
}

export default StudentLayout;
