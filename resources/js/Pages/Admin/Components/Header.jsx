import { Link } from '@inertiajs/react'
import { useState } from 'react'

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

    return (
    <header className="bg-white md:py-3">
        <div className="mx-auto flex h-20 max-w-screen-xl items-center justify-between px-4 sm:px-6 lg:px-8">
            <div className="w-1/2 ">
                <Link className=" flex flex-row items-center gap-4" href={route('home')}>
                    <h2 className="text-xl hidden md:block text-gray-900 font-semibold" style={{ fontFamily: "Libre Baskerville" }}>
                        Administrator
                    </h2>
                </Link>
                <button className="md:hidden text-2xl" onClick={toggleMobileMenu}>
                    {isMobileMenuOpen ? "✖" : "☰"}
                </button>
            </div>
            <div className="flex flex-1 justify-center">
                <nav aria-label="Global" className={`${isMobileMenuOpen ? 'active' : ''}`}>
                    <ul className="flex items-center text-center gap-4 font-semibold uppercase" style={{ fontFamily: "Libre Baskerville" }}>
                        <li>
                            <Link className="hover:text-pink-700 text-md text-gray-900 transition" href={route('home')}>
                                Dashboard
                            </Link>
                        </li>
                        <li>
                            <Link className="hover:text-pink-700 text-md text-gray-900 transition" href={route('student.index')}>
                                Students
                            </Link>
                        </li>
                        <li>
                            <Link className="hover:text-pink-700 text-md text-gray-900 transition" href={route('events')}>
                                Section & Subjects
                            </Link>
                        </li>

                        <li>
                            <Link className="hover:text-pink-700 text-md text-gray-900 transition" href={route('student.portal')}>
                                Announcements
                            </Link>
                        </li>

                       
                    </ul>
                </nav>
            </div>
        </div>
    </header>


    )
}
