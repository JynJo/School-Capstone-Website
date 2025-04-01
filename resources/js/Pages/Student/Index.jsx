import React from "react";
import { Container, Row, Col, Card, ListGroup, Button, Table, Alert } from "react-bootstrap";
import { Link, usePage, useForm } from "@inertiajs/react";
import { PhotoProvider, PhotoView } from "react-photo-view";

function Index() {
    const { announcements, student, schedule, grades } = usePage().props;
    const { post } = useForm();

    const logoutHandler = () => {
        post(route("student.logout"));
    };

    return (
        <Container className="py-4">
            <Row>
                {/* Student Profile Card */}
                <Col md={4} className="mb-4">
                    <Card className="shadow">
                        <Card.Header className="bg-primary text-white">
                            <h4 className="mb-0">Student Profile</h4>
                        </Card.Header>
                        <Card.Body>
                            <div className="text-center mb-3">
                                <div
                                    className="bg-light rounded-circle d-inline-flex align-items-center justify-content-center"
                                    style={{ width: "100px", height: "100px" }}
                                >
                                    <i className="fas fa-user fa-3x text-primary"></i>
                                </div>
                            </div>
                            <ListGroup variant="flush">
                                <ListGroup.Item className="d-flex justify-content-between align-items-center">
                                    <span>Name:</span>
                                    <span className="fw-bold">{student.name}</span>
                                </ListGroup.Item>
                                <ListGroup.Item className="d-flex justify-content-between align-items-center">
                                    <span>Email:</span>
                                    <span className="fw-bold">{student.email}</span>
                                </ListGroup.Item>
                                <ListGroup.Item className="d-flex justify-content-between align-items-center">
                                    <span>ID Number:</span>
                                    <span className="fw-bold">{student.id_number}</span>
                                </ListGroup.Item>
                                <ListGroup.Item className="d-flex justify-content-between align-items-center">
                                    <span>Section:</span>
                                    <span className="fw-bold">{student.section.name}</span>
                                </ListGroup.Item>
                            </ListGroup>
                            <div className="d-grid gap-2 mt-3">
                                <PhotoProvider>
                                    <PhotoView src={`/storage/${schedule[0] && schedule[0].image}`}>
                                        <Button variant="outline-primary">
                                            <i className="fas fa-calendar-alt me-2"></i> View Schedule
                                        </Button>
                                    </PhotoView>
                                </PhotoProvider>
                                <Button variant="outline-danger" onClick={logoutHandler}>
                                    <i className="fas fa-sign-out-alt me-2"></i> Logout
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>

                {/* Main Content */}
                <Col md={8}>
                    {/* Academic Performance */}
                    <Card className="shadow mb-4">
                        <Card.Header className="bg-success text-white">
                            <h4 className="mb-0">Academic Performance</h4>
                        </Card.Header>
                        <Card.Body>
                            <Table hover responsive>
                                <thead className="table-light">
                                    <tr>
                                        <th>Subject</th>
                                        <th>Average</th>
                                        <th>Term</th>
                                        <th>Semester</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {grades &&
                                        grades.map((grade, index) => (
                                            <tr key={index}>
                                                <td>{grade.subject.name}</td>
                                                <td>
                                                    <span
                                                        className={`badge ${
                                                            grade.average >= 75
                                                                ? "bg-success"
                                                                : "bg-danger"
                                                        }`}
                                                    >
                                                        {grade.average}%
                                                    </span>
                                                </td>
                                                <td>{grade.term}</td>
                                                <td>{grade.semester}</td>
                                            </tr>
                                        ))}
                                </tbody>
                            </Table>
                        </Card.Body>
                    </Card>

                    {/* Announcements */}
                    <Card className="shadow">
                        <Card.Header className="bg-info text-white">
                            <h4 className="mb-0">Announcements</h4>
                        </Card.Header>
                        <Card.Body>
                            {announcements && announcements.length > 0 ? (
                                announcements.map((announcement) => (
                                    <Card className="mb-3" key={announcement.id}>
                                        <Card.Body>
                                            <Card.Title className="text-primary">
                                                {announcement.title}
                                            </Card.Title>
                                            {announcement.image && (
                                                <div className="mb-3">
                                                    <Card.Img
                                                        src={`/storage/${announcement.image}`}
                                                        className="img-fluid rounded"
                                                        alt={announcement.title}
                                                    />
                                                </div>
                                            )}
                                            <Card.Text
                                                dangerouslySetInnerHTML={{
                                                    __html: announcement.content,
                                                }}
                                            />
                                            <div className="text-muted small">
                                                <i className="far fa-calendar-alt me-1"></i>
                                                {new Intl.DateTimeFormat("en-US", {
                                                    month: "long",
                                                    day: "numeric",
                                                    year: "numeric",
                                                }).format(new Date(announcement.created_at))}
                                            </div>
                                        </Card.Body>
                                    </Card>
                                ))
                            ) : (
                                <Alert variant="info" className="mb-0">
                                    <i className="fas fa-info-circle me-2"></i>
                                    No announcements available
                                </Alert>
                            )}
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Index;