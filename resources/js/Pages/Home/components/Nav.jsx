import { Link } from '@inertiajs/react';
import { useState } from 'react';
import AdminPortalModal from '../../Admin/Portal.jsx'

export default function Nav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAcademicsDropdownOpen, setIsAcademicsDropdownOpen] = useState(false);
  const [isPortalDropdownOpen, setIsPortalDropdownOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    // Close dropdown when mobile menu is toggled
    isAcademicsDropdownOpen(false);
  };

  const toggleAcademicsDropdown = (e) => {
    e.preventDefault();
    setIsAcademicsDropdownOpen(!isAcademicsDropdownOpen);
  };

  const togglePortalDropdown = (e) => {
    e.preventDefault();
    setIsPortalDropdownOpen(!isPortalDropdownOpen);
  };


  return (<>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm p-4">
      <div className="container">
        <Link className="navbar-brand fw-bold" href="/" style={{ fontFamily: 'Faculty Glypic', fontSize: '2em'}}>
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

        <div className={`collapse navbar-collapse ${isMobileMenuOpen ? 'show' : ''}`}>
          <div className="d-flex justify-content-between w-100">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" href="/" onClick={() => setIsMobileMenuOpen(false)}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/about" onClick={() => setIsMobileMenuOpen(false)}>
                  About
                </Link>
              </li>
              
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  onClick={toggleAcademicsDropdown}
                  aria-expanded={isAcademicsDropdownOpen}
                >
                  Academics
                </Link>
                <ul 
                  id="navbarDropdownMenu" 
                  className={`dropdown-menu ${isAcademicsDropdownOpen ? 'show' : ''}`}
                  aria-labelledby="navbarDropdown"
                >
                  <li>
                    <a 
                      className="dropdown-item" 
                      href="#programs-offered"
                      onClick={() => {
                        setIsAcademicsDropdownOpen(false);
                        setIsMobileMenuOpen(false);
                      }}
                    >
                      Programs
                    </a>
                  </li>
                  <li>
                    <Link 
                      className="dropdown-item" 
                      href="/admission"
                      onClick={() => {
                        setIsAcademicsDropdownOpen(false);
                        setIsMobileMenuOpen(false);
                      }}
                    >
                      Admissions
                    </Link>
                  </li>
                </ul>



              </li>

              {/*Portal*/}
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  onClick={togglePortalDropdown}
                  aria-expanded={isPortalDropdownOpen}
                >
                  Portal
                </Link>
                <ul 
                  id="navbarDropdownMenu" 
                  className={`dropdown-menu ${isPortalDropdownOpen ? 'show' : ''}`}
                  aria-labelledby="navbarDropdown"
                >
                  <li>
                    <span 
                      className="dropdown-item"
                      style={{cursor:'pointer'}} 
                      onClick={() => {
                        setShowModal(true)
                        setIsPortalDropdownOpen(false);
                        setIsMobileMenuOpen(false);
                      }}
                    >
                      Admin
                    </span>
                  </li>
                  <li>
                    <Link 
                      className="dropdown-item" 
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