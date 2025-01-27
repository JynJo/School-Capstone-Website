import { Link } from '@inertiajs/react'

export default function Footer() {
	return (<>

	<footer className="bg-gray-200 w-full my-5">
    <div className="p-5">
      <div className="flex flex-row justify-around">
        <div>
          <div className="text-pink-600 flex flex-row items-center gap-4">
              <img src="/images/lc-seal.png" width="80"/>
              <p className="text-2xl">Lourdes College</p>
          </div>
          </div>

        <div className="flex flex-row justify-around flex-grow text-gray-800">
          <div>
            <p className="text-md">Quick Links</p>

            <ul className="mt-6 text-md space-y-2 " >
              <li>
                <a href="#" className="text-gray-500 transition hover:opacity-75"> Home </a>
              </li>

              <li>
                <a href="#" className="text-gray-500 transition hover:opacity-75"> Academics </a>
              </li>

              <li>
                <a href="#" className="text-gray-500 transition hover:opacity-75"> Events </a>
              </li>

              <li>
                <a href="#" className="text-gray-500 transition hover:opacity-75"> About LC</a>
              </li>

              <li>
                <a href="#" className="text-gray-500 transition hover:opacity-75"> News </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-md text-gray-800">Reach Out</p>

            <ul className="mt-6 space-y-4 text-md ">
              <li>
                <a href="#" className="text-gray-500 transition hover:opacity-75">
                  Higher Education/SHS Campus:<br/>
                  Capistrano Street
                  Cagayan de Oro City 9000 Philippines
                  </a>
              </li>

              <li>
                <a href="#" className="text-gray-500 transition hover:opacity-75"> lc@lccdo.edu.ph </a>
              </li>
            </ul>
          </div>
          </div>
      </div>
      <p className="text-sm mt-5 text-center text-gray-500">&copy; {new Date().getFullYear() } . Lourdes College. All rights reserved.</p>
    </div>
  </footer>
	</>)
}
