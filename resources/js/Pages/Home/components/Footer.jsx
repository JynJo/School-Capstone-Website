import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function Footer() {
    return (
        <footer
            className="text-white py-5"
            style={{
                backgroundColor: "#E41B70",
                fontSize: "0.9rem", // Adjusted font size for the entire footer
            }}
        >
            <Container>
                <Row>
                    {/* Browse Section */}
                    <Col lg={3} md={6} className="mb-4">
                        <h5 className="text-uppercase mb-3">Browse</h5>
                        <ul className="list-unstyled">
                            <li className="mb-2">
                                <a
                                    href="#"
                                    className="text-white text-decoration-none"
                                >
                                    Home
                                </a>
                            </li>
                            <li className="mb-2">
                                <a
                                    href="#"
                                    className="text-white text-decoration-none"
                                >
                                    News
                                </a>
                            </li>
                            <li className="mb-2">
                                <a
                                    href="#"
                                    className="text-white text-decoration-none"
                                >
                                    About The School
                                </a>
                            </li>
                            <li className="mb-2">
                                <a
                                    href="#"
                                    className="text-white text-decoration-none"
                                >
                                    Programs Offered
                                </a>
                            </li>
                            <li className="mb-2">
                                <a
                                    href="#"
                                    className="text-white text-decoration-none"
                                >
                                    Facilities
                                </a>
                            </li>
                        </ul>
                    </Col>

                    {/* News Section */}
                    <Col lg={3} md={6} className="mb-4">
                        <h5 className="text-uppercase mb-3">News</h5>
                        <ul className="list-unstyled">
                            <li className="mb-2">
                                <a
                                    href="#"
                                    className="text-white text-decoration-none"
                                >
                                    LC Learning Commons Coordinator Receives Accolade in PRC
                                </a>
                            </li>
                            <li className="mb-2">
                                <a
                                    href="#"
                                    className="text-white text-decoration-none"
                                >
                                    Lourdes College BSHM Students Excel in US Work and Travel Program
                                </a>
                            </li>
                            <li className="mb-2">
                                <a
                                    href="#"
                                    className="text-white text-decoration-none"
                                >
                                    Lourdes College Seals Partnership with Big Ben Music Indonesia
                                </a>
                            </li>
                            <li className="mb-2">
                                <a
                                    href="#"
                                    className="text-white text-decoration-none"
                                >
                                    Ignacian-Marian Oro Scholars Shine at Kinanao Awards 2024
                                </a>
                            </li>
                        </ul>
                    </Col>

                    {/* Contact Section */}
                    <Col lg={3} md={6} className="mb-4">
                        <h5 className="text-uppercase mb-3">Contact</h5>
                        <p className="mb-2">
                            <i className="fas fa-map-marker-alt me-2"></i>
                            Gen. Capistrano Sts., Cagayan de Oro, Philippines, 9000
                        </p>
                        <p className="mb-2">
                            <i className="fas fa-envelope me-2"></i>
                            <a
                                href="mailto:lc@lccdo.edu.ph"
                                className="text-white text-decoration-none"
                            >
                                lc@lccdo.edu.ph
                            </a>
                        </p>
                        <p className="mb-0">
                            <i className="fas fa-phone me-2"></i>
                            +63 (977) 108 7317
                        </p>
                    </Col>
                </Row>

                <hr className="my-4 border-white" />

                {/* Copyright */}
                <Row>
                    <Col className="text-center">
                        <p className="mb-0">
                            &copy; {new Date().getFullYear()} Lourdes College, Inc. – Cagayan De Oro
                        </p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}
