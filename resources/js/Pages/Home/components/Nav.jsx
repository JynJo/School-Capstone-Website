import React, { useState } from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { Link } from "@inertiajs/react";
import AdminPortalModal from "../../Admin/Portal.jsx";
import { usePage } from "@inertiajs/react";
import "./style.css";

export default function NavigationBar() {
    const { url } = usePage();
    const [showModal, setShowModal] = useState(false);

    const isActive = (routeName) => {
        return url.startsWith(routeName);
    };

    return (
        <>
            <Navbar
                expand="lg"
                bg="white"
                variant="light"
                className="shadow-sm p-3"
            >
                <Container>
                    {/* Brand */}
                    <Navbar.Brand
                        as={Link}
                        href="/"
                        className="fw-bold"
                        style={{
                            fontFamily: "Parisienne",
                            fontSize: "2em",
                            color: "#E41B70",
                        }}
                    >
                        <img src="/images/lc-seal.png" width="80"/> {""}
                        Lourdes College, Inc
                    </Navbar.Brand>

                    {/* Toggle Button */}
                    <Navbar.Toggle aria-controls="navbar-nav" />

                    {/* Navbar Links */}
                    <Navbar.Collapse id="navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link
                                as={Link}
                                href="/"
                                className={isActive("/home") ? "active nav-item" : "nav-item"}
                                style={
                                    isActive("/home")
                                        ? { color: "#E41B70" }
                                        : {}
                                }
                            >
                                Home
                            </Nav.Link>
                            <Nav.Link
                                as={Link}
                                href="/about"
                                className={isActive("/about") ? "active nav-item" : "nav-item"}
                                style={
                                    isActive("/about")
                                        ? { color: "#E41B70" }
                                        : {}
                                }
                            >
                                NEWS
                            </Nav.Link>
                            <Nav.Link
                                as={Link}
                                href="/events"
                                className={isActive("/events") ? "active nav-item" : "nav-item"}
                                style={
                                    isActive("/events")
                                        ? { color: "#E41B70" }
                                        : {}
                                }
                            >
                                Events
                            </Nav.Link>
                            <Nav.Link
                                as={Link}
                                href="/admission"
                                className={
                                    isActive("/admission") ? "active nav-item" : "nav-item"
                                }
                                style={
                                    isActive("/admission")
                                        ? { color: "#E41B70" }
                                        : {}
                                }
                            >
                                Admissions
                            </Nav.Link>
                            <NavDropdown
                                title="Portal"
                                id="portal-dropdown"
                                className={
                                    isActive("/grade-portal") ? "active nav-item" : "nav-item"
                                }
                            >
                                <NavDropdown.Item
                                    onClick={() => setShowModal(true)}
                                >
                                    Admin
                                </NavDropdown.Item>
                                <NavDropdown.Item
                                    as={Link}
                                    href="/grade-portal"
                                    className={
                                        isActive("/grade-portal")
                                            ? "active"
                                            : ""
                                    }
                                >
                                    Student
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            {/* Admin Portal Modal */}
            <AdminPortalModal
                show={showModal}
                onHide={() => setShowModal(false)}
            />
        </>
    );
}