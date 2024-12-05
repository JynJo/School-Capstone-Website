import { Link } from '@inertiajs/react'


export default function Nav() {
    return (
    <header className="bg-white py-3">
  <div className="mx-auto flex h-20 max-w-screen-xl items-center justify-between px-4 sm:px-6 lg:px-8">

    <div className="flex flex-1 items-center gap-8">
      <Link className="block text-gray-800 flex flex-row items-center gap-2" href={route('home')}>
        <img src="images/lc-seal.png" alt="" width="70" />
        <p className="text-xl font-light text-pink-800" style={{ fontFamily: "Faculty Glyphic" }}>Lourdes College</p>
      </Link>
    </div>
    <div className="flex flex-1 justify-center">
      <nav aria-label="Global" className="hidden md:block">
        <ul className="flex items-center text-center">
            <li>
            <Link className="px-3 border-pink-800 border-r header-nav-link text-md text-uppercase font-medium text-pink-800 transition" href={route('home')}>
              Home
            </Link>
          </li>

          <li>
            <Link className="px-3 border-pink-800 header-nav-link text-md text-uppercase font-medium text-pink-800 transition" href={route('admission.index')}>
              Academics & Admissions
            </Link>
          </li>
        {/*<li>
            <Link className="px-3 border-pink-800 border-l header-nav-link text-md text-uppercase font-medium text-pink-800 transition" href={route('home')}>
              Forum
            </Link>
          </li> */}

          <li>
             <Link className="px-3 border-l border-pink-800 header-nav-link text-md text-uppercase font-medium text-pink-800 transition" href={route('events')}>
              Events
            </Link>
          </li>
       <li>
        <div className="dropdown inline-block relative group">
          <p className="cursor-pointer inline-flex px-3 border-l border-pink-800 header-nav-link text-md text-uppercase font-medium text-pink-800 transition">
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
        </div>
      </li>

        </ul>
      </nav>
    </div>
  </div>
</header>


    )
}
