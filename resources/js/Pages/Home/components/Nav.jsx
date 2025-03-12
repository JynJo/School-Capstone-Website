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
            <div className="w-1/2 ">
                <Link className=" flex flex-row items-center gap-4" href={route('home')}>
                    <img src="images/lc-seal.png" alt="" width="60" />
                    <h2 className="text-xl hidden md:block text-gray-900 font-semibold" style={{ fontFamily: "Libre Baskerville" }}>
                        Lourdes College
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
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link className="hover:text-pink-700 text-md text-gray-900 transition" href={route('admission.index')}>
                                Admission
                            </Link>
                        </li>
                        <li>
                            <Link className="hover:text-pink-700 text-md text-gray-900 transition" href={route('events')}>
                                Events
                            </Link>
                        </li>

                        <li>
                            <Link className="hover:text-pink-700 text-md text-gray-900 transition" href={route('events')}>
                                Staff Portal
                            </Link>
                        </li>

                        <li>
                            <Link href="/grade-portal" className="hover:text-pink-700 text-md text-gray-900 transition" href={route('events')}>
                                Grades Portal
                            </Link>
                        </li>

                        {/*<li>
                            <div className="hs-dropdown relative inline-flex" style={{ zIndex: '100', margin: 0 }}>
                                <button
                                    id="hs-dropdown-default"
                                    type="button"
                                    className="hs-dropdown-toggle flex flex-row items-center cursor-pointer text-md font-light text-[#272828] transition"
                                    aria-haspopup="menu"
                                    aria-expanded="false"
                                    aria-label="Dropdown"
                                >
                                    Portal
                                    <svg
                                        className="hs-dropdown-open:rotate-180 size-4"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="m6 9 6 6 6-6" />
                                    </svg>
                                </button>
                                <div
                                    className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-60 bg-white shadow-md rounded-lg mt-2 after:h-4 after:absolute after:-bottom-4 after:start-0 after:w-full before:h-4 before:absolute before:-top-4 before:start-0 before:w-full"
                                    role="menu"
                                    aria-orientation="vertical"
                                    aria-labelledby="hs-dropdown-default"
                                >
                                    <div className="p-2">
                                        <Link
                                            href="/login"
                                            className="p-2 text-md text-uppercase font-medium text-[#272828] transition"
                                        >
                                            Student Portal
                                        </Link>
                                        <Link
                                            href="/teacher/login"
                                            className="p-2 text-md text-uppercase font-medium text-[#272828] transition"
                                        >
                                            Teacher Portal
                                        </Link>
                                        <Link
                                            href="/admin/login"
                                            className="p-2 text-md text-uppercase font-medium text-[#272828] transition"
                                        >
                                            Admin Portal
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </li>*/}
                    </ul>
                </nav>
            </div>
        </div>
    </header>


    )
}
