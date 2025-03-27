import { Link } from '@inertiajs/react'
import { useState } from 'react'
import { useForm } from "@inertiajs/react"

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { post } = useForm()
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const logoutHandler = () => {
    post(route('admin.logout'))
  }

    return (<>
   <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm p-4">
      <div className="container">
        <Link className="navbar-brand fw-bold" href="/" style={{ fontFamily: 'Faculty Glypic', fontSize: '2em'}}>
          Administrator
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
                <Link className="nav-link" href={route('admin.dashboard')} onClick={() => setIsMobileMenuOpen(false)}>
                  Dashboard
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href={route('student.index')} onClick={() => setIsMobileMenuOpen(false)}>
                  Students
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href={route('section.index')} onClick={() => setIsMobileMenuOpen(false)}>
                  Section & Subjects
                </Link>
              </li>
              
            </ul>
          </div>
        </div>
      </div>
    </nav>

    </>

    )
}
