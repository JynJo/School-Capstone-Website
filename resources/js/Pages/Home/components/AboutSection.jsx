import React from "react";
import { Link } from "@inertiajs/react";
import { Container, Row, Col, Button } from "react-bootstrap";

export default function AboutSection() {
    return (
        <div data-aos="fade-up">
            <Container className="text-center my-4">
            
                <h2
                    className="h3 text-center mb-4 font-semibold"
                    style={{ 
                        // fontFamily: "Poppins", 
                        // fontSize: "2.5rem" 
                    }}
                >
                    About LC
                </h2>
            </Container>

            <div 
                data-aos="fade-down"
                className="d-flex align-items-center text-center py-5"
                style={{
                    background: "linear-gradient(to right bottom, rgba(25,25,25,0.6), rgba(25,25,25,0.6)), url('/images/about-img.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}
            >
                <Container>
                    <Row className="justify-content-center">
                        <Col md={8} lg={6}>
                            <div className="text-white" style={{ fontFamily: "Open Sans" }}>
                                <p className="lead">
                                    At Lourdes College, we believe in empowering students to 
                                    achieve their full potential. Our programs are designed 
                                    to provide a holistic education that combines academic 
                                    excellence with personal growth and community engagement.
                                </p>
                                <p className="lead mt-3">
                                    With a dedicated faculty, state-of-the-art facilities, 
                                    and a supportive environment, we strive to create 
                                    opportunities for every student to succeed.
                                </p>
                                <div className="mt-4">
                                    <Button 
                                        as={Link} 
                                        href="/about" 
                                        variant="danger"
                                        className="px-4 py-2 rounded-0 text-white text-decoration-none"
                                    >
                                        Learn more about Lourdes College
                                    </Button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}