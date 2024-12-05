import { useForm } from '@inertiajs/react'
import axios from 'axios'
const Header = () => {
    const { post } = useForm();

    const logoutHandler = () => {
        axios.post( route('admin.logout') )
            .then(() => window.location.reload())
        .catch((error) => console.error(error))
    }

    return (<>
        <header className="sticky top-0 inset-x-0 flex flex-wrap md:justify-start md:flex-nowrap z-[48] w-full bg-white border-b text-sm py-2.5 lg:ps-[260px] ">
  <nav className="px-4 sm:px-6 flex basis-full items-center w-full mx-auto">
       <div className="w-full flex items-center justify-end ms-auto md:justify-between gap-x-1 md:gap-x-3">
      <div className="hidden md:block">
            </div>
      <div className="flex flex-row items-center justify-end gap-1">
        <div className="hs-dropdown [--placement:bottom-right] relative inline-flex">
          <button
            id="hs-dropdown-account"
            type="button"
            className="size-[38px] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 focus:outline-none disabled:opacity-50 disabled:pointer-events-none"
            aria-haspopup="menu"
            aria-expanded="false"
            aria-label="Dropdown"
          >
            <img
                className="shrink-0 size-[40px] rounded-full object-cover"
                src="/images/lc-seal.png"
              //src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
              alt="Avatar"
            />
          </button>
          <div
            className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-60 bg-white shadow-md rounded-lg mt-2 after:h-4 after:absolute after:-bottom-4 after:start-0 after:w-full before:h-4 before:absolute before:-top-4 before:start-0 before:w-full"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="hs-dropdown-account"
          >
            <div className="py-3 px-5 bg-gray-100 rounded-t-lg">
              <p className="text-sm text-gray-500">
                Signed in as
              </p>
              <p className="text-sm font-medium text-gray-800">
              </p>
            </div>
            <div className="p-1.5 space-y-0.5">
              <button
                className="flex w-full items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 "
                onClick={logoutHandler}
              >
                <svg
                  className="shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx={9} cy={7} r={4} />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
                Logout
              </button>
            </div>
          </div>
        </div>
        {/* End Dropdown */}
      </div>
    </div>
  </nav>
</header>



    </>)

}

export default Header;
