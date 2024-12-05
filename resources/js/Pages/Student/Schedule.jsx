import React, { useState } from "react";
import {
    Container,
    Row,
    Col,
    Card,
    Button,
    Form,
    Image,
} from "react-bootstrap";
import { useForm, Link } from "@inertiajs/react";
import StudentLayout from './StudentLayout.jsx'
const Index = ({ auth }) => {
    const [editable, setEditable] = useState(false);
    const { post } = useForm();

    const logoutHandler = () => {
        post(route("user.logout"));
    };

    const groupedSchedule = auth.schedule
        ? auth.schedule.reduce((acc, sched) => {
              if (!acc[sched.subjects.name]) {
                  acc[sched.subjects.name] = {
                      subject: sched.subjects.name,
                      days: {
                          Monday: null,
                          Tuesday: null,
                          Wednesday: null,
                          Thursday: null,
                          Friday: null,
                      },
                  };
              }
              // Assign the schedule to the correct day
              acc[sched.subjects.name].days[sched.days.name] = {
                  start_time: sched.start_time,
                  end_time: sched.end_time,
              };
              return acc;
          }, {})
        : {};

    const groupedScheduleArray = Object.values(groupedSchedule);

    return (<>
        <div className="mx-auto">
      <div className="bg-white p-6">
        <h1 className="text-lg font-semibold text-gray-900">
            Class schedules
        </h1>
        <p className="text-gray-500  mb-6 text-sm">
        If any of the information provided is incorrect, please contact the ITC office to update your details.
        </p>
            <Row className="p-2">
                <table className="table table-bordered">
                    <thead>
                        <th>Subject</th>
                        <th>Monday</th>
                        <th>Tuesday</th>
                        <th>Wednesday</th>
                        <th>Thursday</th>
                        <th>Friday</th>
                    </thead>
                    <tbody>
                        {groupedScheduleArray.length > 0 &&
                            groupedScheduleArray.map((subject, index) => (
                                <tr key={index}>
                                    <td className="p-4">
                                        <span>{subject.subject}</span>
                                    </td>

                                    <td>
                                        {subject.days.Monday
                                            ? `${subject.days.Monday.start_time} - ${subject.days.Monday.end_time}`
                                            : "No Class"}
                                    </td>
                                    <td>
                                        {subject.days.Tuesday
                                            ? `${subject.days.Tuesday.start_time} - ${subject.days.Tuesday.end_time}`
                                            : "No Class"}
                                    </td>
                                    <td>
                                        {subject.days.Wednesday
                                            ? `${subject.days.Wednesday.start_time} - ${subject.days.Wednesday.end_time}`
                                            : "No Class"}
                                    </td>
                                    <td>
                                        {subject.days.Thursday
                                            ? `${subject.days.Thursday.start_time} - ${subject.days.Thursday.end_time}`
                                            : "No Class"}
                                    </td>
                                    <td>
                                        {subject.days.Friday
                                            ? `${subject.days.Friday.start_time} - ${subject.days.Friday.end_time}`
                                            : "No Class"}
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </Row>
            </div>
            </div>
            </>
    );
};
Index.layout = page => <StudentLayout children={page}/>
export default Index;
