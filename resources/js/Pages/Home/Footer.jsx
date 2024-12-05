import { Link } from '@inertiajs/react'

export default function Footer() {
	return (<>

	<footer className="bg-white w-full pt-5">
  <div className="mx-auto max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8">
    <div className="flex flex-row justify-around">
      <div>
        <div className="text-pink-600 flex flex-row items-center gap-4">
            <img src="/images/lc-seal.png" width="80"/>
            <p className="text-2xl font-bold">Lourdes College</p>
        </div>


        <p className="mt-4 max-w-xs text-gray-500 font-bold">Follow Us</p>
        <ul className="mt-8 flex gap-6">
          <li>
            <a
              href="#"
              rel="noreferrer"
              target="_blank"
              className="text-gray-500 transition hover:opacity-75"
            >
              <span className="sr-only">Facebook</span>

              <svg className="size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </li>

        <li>
            <a
              href="#"
              rel="noreferrer"
              target="_blank"
              className="text-gray-500 transition hover:opacity-75"
            >
              <span className="sr-only">Twitter</span>

              <svg className="size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
                />
              </svg>
            </a>
          </li>
<li>
  <a
    href="https://www.youtube.com"
    target="_blank"
    rel="noreferrer"
    className="text-gray-500 transition hover:opacity-75"
  >
<svg className="size-6" xmlns="http://www.w3.org/2000/svg" width={256} height={180} viewBox="0 0 256 180"><path fill="#312e2e" d="M250.346 28.075A32.18 32.18 0 0 0 227.69 5.418C207.824 0 127.87 0 127.87 0S47.912.164 28.046 5.582A32.18 32.18 0 0 0 5.39 28.24c-6.009 35.298-8.34 89.084.165 122.97a32.18 32.18 0 0 0 22.656 22.657c19.866 5.418 99.822 5.418 99.822 5.418s79.955 0 99.82-5.418a32.18 32.18 0 0 0 22.657-22.657c6.338-35.348 8.291-89.1-.164-123.134"></path><path fill="#fff" d="m102.421 128.06l66.328-38.418l-66.328-38.418z"></path></svg>
</a>
</li>
        </ul>
        </div>

      <div className="flex flex-row justify-around flex-grow text-gray-800">
        <div>
          <p className="font-bold text-2xl">Quick Links</p>

          <ul className="mt-6 space-y-4 text-md" style={{ fontFamily: 'Poppins'}}>
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
          <p className="font-bold text-2xl text-gray-800">Reach Out</p>

          <ul className="mt-6 space-y-4 " style={{ fontFamily: 'Poppins'}}>
            <li>
              <a href="#" className="text-gray-500 transition hover:opacity-75">
                Higher Education/SHS Campus:<br/>
                Capistrano Street<br/>
                Cagayan de Oro City 9000 Philippines
                </a>
            </li>

            <li>
              <a href="#" className="text-gray-500 transition hover:opacity-75">42122342352323</a>
            </li>

            <li>
              <a href="#" className="text-gray-500 transition hover:opacity-75"> lc@lccdo.edu.ph </a>
            </li>
          </ul>
        </div>
        </div>
    </div>
    <p className="text-xs text-gray-500">&copy; 2024. Lourdes College. All rights reserved.</p>
  </div>
</footer>
	</>)
}
