import React from "react";
import Layout from "./Layouts/Layout.jsx";
import { Container, Row, Col, Card, Pagination } from "react-bootstrap";
import { Link } from "@inertiajs/react"; // Assuming Inertia.js is used

const Events = ({ events }) => {
    return (
        <div data-aos="fade-up">
            <div
                style={{
                    backgroundColor: "rgba(228, 27, 112, 0.9)",
                    backgroundSize: "cover",
                    padding: "50px",
                    backgroundPosition: "center",
                }}
            >
                <h1
                    style={{
                        textAlign: "start",
                        fontSize: "28px",
                        fontWeight: "bold",
                        marginBottom: "20px",
                        color: "white",
                        textTransform: "uppercase",
                    }}
                >
                    Keep up with the latest events!
                </h1>
            </div>

            <Container className="px-4 bg-light">
                <Row className="mb-4"></Row>

                <Row xs={1} md={2} lg={3} className="g-4 mb-4">
                    {events.data.map((event) => (
                        <Col key={event.id}>
                            <Card className="border-0">
                                <div className="position-relative">
                                    <div className="position-absolute top-0 start-0 bg-primary text-white p-2">
                                        <div className="fw-bold fs-5">
                                            {new Date(event.date).getDate()}
                                        </div>
                                        <div className="small">
                                            {new Date(
                                                event.date
                                            ).toLocaleString("en-US", {
                                                month: "long",
                                                year: "numeric",
                                            })}
                                        </div>
                                    </div>
                                    <Card.Img
                                        // variant="top"
                                        src={`/storage/${event.image}`}
                                        alt={event.title}
                                        className="object-fit-cover"
                                        style={{
                                            height: "300px",
                                            width: "100%",
                                        }}
                                    />
                                </div>
                                <Card.Body>
                                    <Card.Title className="fw-bold">
                                        {event.title}
                                    </Card.Title>
                                    <Card.Text className="text-muted">
                                        {event.description.length > 100
                                            ? `${event.description.substring(
                                                  0,
                                                  100
                                              )}...`
                                            : event.description}
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer className="bg-white ">
                                    <small className="text-muted">
                                        {new Date(
                                            event.date
                                        ).toLocaleDateString("en-US", {
                                            weekday: "long",
                                            year: "numeric",
                                            month: "long",
                                            day: "numeric",
                                        })}
                                    </small>
                                </Card.Footer>
                            </Card>
                        </Col>
                    ))}
                </Row>

                <Col>
                    <p className="text-muted">
                        Showing {events.from} to {events.to} of {events.total}{" "}
                        events
                    </p>
                </Col>

                {/* Pagination */}
                <div className="d-flex justify-content-center">
                    <Pagination >
                        {events.links.map((link, index) => (
                            <Pagination.Item
                                key={index}
                                active={link.active}
                                disabled={link.url === null}
                            >
                                <Link
                                    href={link.url || "#"}
                                    className="page-link"
                                    preserveScroll
                                >
                                    {link.label
                                        .replace("&laquo;", "«")
                                        .replace("&raquo;", "»")}
                                </Link>
                            </Pagination.Item>
                        ))}
                    </Pagination>
                </div>
            </Container>
        </div>
    );
};

Events.layout = (page) => <Layout>{page}</Layout>;
export default Events;
