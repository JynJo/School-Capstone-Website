import { Link } from "@inertiajs/react";
import { useState } from "react";
import AdminPortalModal from "../../Admin/Portal.jsx";
import { usePage } from '@inertiajs/react';

export default function Nav() {
    const { url } = usePage();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isPortalDropdownOpen, setIsPortalDropdownOpen] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const isActive = (routeName) => {
        return url.startsWith(routeName);
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const togglePortalDropdown = (e) => {
        e.preventDefault();
        setIsPortalDropdownOpen(!isPortalDropdownOpen);
    };

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm p-4">
                <div className="container">
                    <Link
                        className="navbar-brand fw-bold"
                        href="/"
                        style={{ fontFamily: "Faculty Glypic", fontSize: "2em" }}
                    >
                        Lourdes College
                    </Link>

                    <button
                        className="navbar-toggler"
                        type="button"
                        onClick={toggleMobileMenu}
                        aria-expanded={isMobileMenuOpen}
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className={`collapse navbar-collapse ${isMobileMenuOpen ? "show" : ""}`}>
                        <div className="d-flex justify-content-between w-100">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link
                                        className={`nav-link ${isActive('/home') ? 'active' : ''}`}
                                        href="/"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        Home
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        className={`nav-link ${isActive('/about') ? 'active' : ''}`}
                                        href="/about"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        About
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        className={`nav-link ${isActive('/events') ? 'active' : ''}`}
                                        href="/events"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        Events
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        className={`nav-link ${isActive('/admission') ? 'active' : ''}`}
                                        href="/admission"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        Admissions
                                    </Link>
                                </li>
                                <li className={`nav-item dropdown ${isActive('/grade-portal') ? 'active' : ''}`}>
                                    <Link
                                        className={`nav-link dropdown-toggle ${isPortalDropdownOpen ? 'active' : ''}`}
                                        href="#"
                                        id="navbarDropdown"
                                        role="button"
                                        onClick={togglePortalDropdown}
                                        aria-expanded={isPortalDropdownOpen}
                                    >
                                        Portal
                                    </Link>
                                    <ul
                                        className={`dropdown-menu ${isPortalDropdownOpen ? "show" : ""}`}
                                        aria-labelledby="navbarDropdown"
                                    >
                                        <li>
                                            <span
                                                className="dropdown-item"
                                                style={{ cursor: "pointer" }}
                                                onClick={() => {
                                                    setShowModal(true);
                                                    setIsPortalDropdownOpen(false);
                                                    setIsMobileMenuOpen(false);
                                                }}
                                            >
                                                Admin
                                            </span>
                                        </li>
                                        <li>
                                            <Link
                                                className={`dropdown-item ${isActive('/grade-portal') ? 'active' : ''}`}
                                                href="/grade-portal"
                                                onClick={() => {
                                                    setIsPortalDropdownOpen(false);
                                                    setIsMobileMenuOpen(false);
                                                }}
                                            >
                                                Student
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>

            <AdminPortalModal
                show={showModal}
                onHide={() => setShowModal(false)}
            />
        </>
    );
}