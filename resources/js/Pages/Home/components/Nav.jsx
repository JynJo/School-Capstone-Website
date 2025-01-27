import { Link } from '@inertiajs/react'
import { useState } from 'react'

export default function Nav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

    return (
    <header className="bg-white md:py-3">
      <div className="mx-auto flex h-20 max-w-screen-xl items-center justify-between px-4 sm:px-6 lg:px-8">

        <div className="flex-grow">
          <Link className="flex flex-row items-center gap-4" href={route('home')}>
            <img src="images/lc-seal.png" alt="" width="60" />
            <p className="text-xl hidden md:block text-pink-800" style={{ fontFamily: "Faculty Glyphic" }}>Lourdes College</p>
          </Link>
            <button className="md:hidden text-2xl" onClick={toggleMobileMenu}>
              {isMobileMenuOpen ? "✖" : "☰"}
            </button>
        </div>
        <div className="flex flex-1 justify-center">
          <nav aria-label="Global" className={`${isMobileMenuOpen ? 'active': ''}`}>
            <ul className="flex items-center text-center">
                <li>
                <Link className="px-3  text-md text-uppercase font-medium text-pink-800 transition" href={route('home')}>
                  Home
                </Link>
              </li>

              <li>
                <Link className="px-3   text-md text-uppercase font-medium text-pink-800 transition" href={route('admission.index')}>
                  Academics & Admissions
                </Link>
              </li>

              <li>
                 <Link className="px-3 text-md text-uppercase font-medium text-pink-800 transition" href={route('events')}>
                  Events
                </Link>
              </li>
           <li>
           {/* <div className="dropdown inline-block relative group">
              <p className="cursor-pointer inline-flex px-3 text-md text-uppercase font-medium text-pink-800 transition">
                Portal
              </p>
              <ul className="dropdown-menu absolute hidden group-hover:block bg-white">
                <li className="hover:bg-gray-100 px-2 cursor-pointer">
                  <Link className="p-2 block text-md text-uppercase font-medium text-pink-800  transition" href="/login">
                    Student Portal
                  </Link>

                </li>
                <li className="hover:bg-gray-100 px-2 cursor-pointer">
                  <Link className="p-2 block text-md text-uppercase font-medium text-pink-800  transition" >
                    Parent Portal
                  </Link>
                </li>
                <li className="hover:bg-gray-100 px-2 cursor-pointer">
                  <Link className="p-2 block text-md text-uppercase font-medium text-pink-800  transition" href={route('teacher.login-page')}>
                    Teacher Portal
                  </Link>
                </li>
                <li className="hover:bg-gray-100 px-2 cursor-pointer">
                  <Link className="p-2 block text-md text-uppercase font-medium text-pink-800  transition" href={route('admin.login')}>
                    Admin Portal
                  </Link>
                </li>
              </ul>
            </div>*/}
          </li>

          {/* Dropdown*/}
          <div class="hs-dropdown relative inline-flex " style={{zIndex: '100'}}>
        <button id="hs-dropdown-default" type="button" className="hs-dropdown-toggle flex flex-row items-center cursor-pointer px-3 text-md text-uppercase font-medium text-pink-800 transition" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
          Portal
          <svg class="hs-dropdown-open:rotate-180 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
        </button>

          <div
            className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-60 bg-white shadow-md rounded-lg mt-2 after:h-4 after:absolute after:-bottom-4 after:start-0 after:w-full before:h-4 before:absolute before:-top-4 before:start-0 before:w-full"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="hs-dropdown-default"
          >
          <div className='p-2'>
            <Link 
              href='/login'
              className="p-2  text-md text-uppercase font-medium text-pink-800  transition">
              Student Portal
            </Link>
            <Link  
              href='/teacher/login'
              className="p-2  text-md text-uppercase font-medium text-pink-800  transition" >
              Teacher Portal
            </Link>
            <Link
              href='/admin/login' 
              className="p-2 text-md text-uppercase font-medium text-pink-800  transition">
              Admin Portal
            </Link>
          </div>
        </div>
      </div>
          {/* end dropdown*/}

            </ul>
          </nav>
        </div>
      </div>
    </header>


    )
}
