import { Link } from "@inertiajs/react";
import { Container, Row, Col } from "react-bootstrap";

export default function Footer() {
    return (
        <footer className="bg-dark text-white pt-5 pb-3">
            <Container>
                <Row className="g-4">
                    {/* Logo and College Name */}
                    <Col lg={4} className="text-center text-lg-start">
                        <div className="d-flex flex-column align-items-center align-items-lg-start gap-3">
                            <img 
                                src="/images/lc-seal.png" 
                                width="100" 
                                alt="Lourdes College Seal"
                                className="img-fluid"
                            /> <h3 className="mb-0 text-danger">Lourdes
                               College</h3> <p className="text-muted mt-2">
                               Empowering students through quality education
                               </p> </div> </Col>

                    {/* Contact Information */}
                    <Col lg={4} className="text-center text-lg-start">
                        <h5 className="mb-3 text-danger">Contact Us</h5>
                        <address className="text-light">
                            <p className="mb-2">
                                <i className="bi bi-geo-alt-fill me-2"></i>
                                Higher Education/SHS Campus
                            </p>
                            <p className="ms-4 mb-3">
                                Capistrano Street, Cagayan de Oro City<br />
                                9000 Philippines
                            </p>
                            <p className="mb-0">
                                <i className="bi bi-envelope-fill me-2"></i>
                                <Link 
                                    href="mailto:lc@lccdo.edu.ph" 
                                    className="text-light text-decoration-none"
                                >
                                    lc@lccdo.edu.ph
                                </Link>
                            </p>
                        </address>
                    </Col>

                    {/* Quick Links */}
                    <Col lg={4} className="text-center text-lg-start">
                        <h5 className="mb-3 text-danger">Quick Links</h5>
                        <ul className="list-unstyled">
                            <li className="mb-2">
                                <Link href="#" className="text-light text-decoration-none">
                                    <i className="bi bi-house-door me-2"></i>Home
                                </Link>
                            </li>
                            <li className="mb-2">
                                <Link href="#" className="text-light text-decoration-none">
                                    <i className="bi bi-book me-2"></i>Academics
                                </Link>
                            </li>
                            <li className="mb-2">
                                <Link href="#" className="text-light text-decoration-none">
                                    <i className="bi bi-calendar-event me-2"></i>Events
                                </Link>
                            </li>
                            <li className="mb-2">
                                <Link href="#" className="text-light text-decoration-none">
                                    <i className="bi bi-info-circle me-2"></i>About LC
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-light text-decoration-none">
                                    <i className="bi bi-newspaper me-2"></i>News
                                </Link>
                            </li>
                        </ul>
                    </Col>
                </Row>

                <hr className="my-4 border-secondary" />

                {/* Copyright */}
                <Row>
                    <Col className="text-center">
                        <p className="text-muted mb-0">
                            &copy; {new Date().getFullYear()} Lourdes College. All rights reserved.
                        </p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}