import React from 'react';
import { 
  Container,
  Card,
  Badge,
  Table
} from 'react-bootstrap';
import { 
  FaUserGraduate, 
  FaIdCard, 
  FaBook, 
  FaPercentage, 
  FaCalendarAlt, 
  FaCalendarWeek 
} from 'react-icons/fa';
import DashboardLayout from "../DashboardLayout.jsx";

export default function Show({ student }) {
    
    function getAverageBadgeClass(average) {
        if (average >= 90) return "success";
        if (average >= 75) return "primary";
        if (average <= 75) return "warning";
        return "danger";
    }

    return (
        <DashboardLayout title="Student Grades">
            <Container fluid>
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <Card className="shadow border-0">
                            <Card.Header className="bg-primary text-white">
                                <div className="d-flex justify-content-between align-items-center">
                                    <div>
                                        <h2 className="h4 mb-0 font-weight-bold">
                                            <FaUserGraduate className="mr-2" />
                                            {student.name}
                                        </h2>
                                        <span className="text-white-50">
                                            Section: <b>{student.section.name}</b>
                                        </span>
                                    </div>
                                    <Badge bg="light" text="dark">
                                        <FaIdCard className="mr-1" /> Student Record
                                    </Badge>
                                </div>
                            </Card.Header>
                            <Card.Body>
                                <div className="table-responsive">
                                    <Table striped hover>
                                        <thead className="thead-dark">
                                            <tr>
                                                <th>
                                                    <FaBook className="mr-1" /> Subject
                                                </th>
                                                <th>
                                                    <FaPercentage className="mr-1" /> Average
                                                </th>
                                                <th>
                                                    <FaCalendarAlt className="mr-1" /> Term
                                                </th>
                                                <th>
                                                    <FaCalendarWeek className="mr-1" /> Semester
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {student.grades.map((grades, index) => (
                                                <tr key={index}>
                                                    <td className="font-weight-bold">
                                                        {grades.subject.name}
                                                    </td>
                                                    <td>
                                                        <Badge bg={getAverageBadgeClass(grades.average)}>
                                                            {grades.average}%
                                                        </Badge>
                                                    </td>
                                                    <td>{grades.term}</td>
                                                    <td>{grades.semester}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </Table>
                                </div>
                            </Card.Body>
                            <Card.Footer className="bg-light">
                                <small className="text-muted">
                                    Last updated: {new Date().toLocaleDateString()}
                                </small>
                            </Card.Footer>
                        </Card>
                    </div>
                </div>
            </Container>
        </DashboardLayout>
    );
}