import { Link } from '@inertiajs/react';
import { useState } from 'react';

export default function Nav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    // Close dropdown when mobile menu is toggled
    setIsDropdownOpen(false);
  };

  const toggleDropdown = (e) => {
    e.preventDefault();
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
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
                <Link className="nav-link active" href="/" onClick={() => setIsMobileMenuOpen(false)}>
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
                  onClick={toggleDropdown}
                  aria-expanded={isDropdownOpen}
                >
                  Academics
                </Link>
                <ul 
                  id="navbarDropdownMenu" 
                  className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`}
                  aria-labelledby="navbarDropdown"
                >
                  <li>
                    <Link 
                      className="dropdown-item" 
                      href="/programs"
                      onClick={() => {
                        setIsDropdownOpen(false);
                        setIsMobileMenuOpen(false);
                      }}
                    >
                      Programs
                    </Link>
                  </li>
                  <li>
                    <Link 
                      className="dropdown-item" 
                      href="/admissions"
                      onClick={() => {
                        setIsDropdownOpen(false);
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
                  onClick={toggleDropdown}
                  aria-expanded={isDropdownOpen}
                >
                  Academics
                </Link>
                <ul 
                  id="navbarDropdownMenu" 
                  className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`}
                  aria-labelledby="navbarDropdown"
                >
                  <li>
                    <Link 
                      className="dropdown-item" 
                      href="/programs"
                      onClick={() => {
                        setIsDropdownOpen(false);
                        setIsMobileMenuOpen(false);
                      }}
                    >
                      Programs
                    </Link>
                  </li>
                  <li>
                    <Link 
                      className="dropdown-item" 
                      href="/admissions"
                      onClick={() => {
                        setIsDropdownOpen(false);
                        setIsMobileMenuOpen(false);
                      }}
                    >
                      Admissions
                    </Link>
                  </li>
                </ul>

                
                    
              </li>


            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}