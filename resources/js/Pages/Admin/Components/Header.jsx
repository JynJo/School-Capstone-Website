import { Link } from "@inertiajs/react";
import { useState } from "react";
import { useForm, usePage } from "@inertiajs/react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { url } = usePage();
    const { post } = useForm();
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const isActive = (routeName) => {
        return url.startsWith(routeName);
    };

    const logoutHandler = () => {
        post(route("admin.logout"));
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
                                href="/admin/student/list"
                                className={isActive("/admin/student/list") ? "active nav-item" : "nav-item"}
                                style={
                                    isActive("/home")
                                        ? { color: "#E41B70" }
                                        : {}
                                }
                            >
                                Students
                            </Nav.Link>
                            <Nav.Link
                                as={Link}
                                href={route("section.index")}
                                className={isActive("/admin/section/list") ? "active nav-item" : "nav-item"}
                                style={
                                    isActive("/about")
                                        ? { color: "#E41B70" }
                                        : {}
                                }
                            >
                              Academics
                            </Nav.Link>
                            <Nav.Link
                                as={Link}
                                href={route("announcement.index")}
                                className={isActive("/admin/announcement/index") ? "active nav-item" : "nav-item"}
                                style={
                                    isActive("/events")
                                        ? { color: "#E41B70" }
                                        : {}
                                }
                            >
                                Announcements
                            </Nav.Link>
                            <Nav.Link
                                as={Link}
                                href="/admission"
                                onClick={logoutHandler}
                            >
                                <i className="fas fa-sign-out-alt mr-2"></i>
                                LOGOUT
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}
