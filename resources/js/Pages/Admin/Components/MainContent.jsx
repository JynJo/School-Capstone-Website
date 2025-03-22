import React from 'react'
import { usePage } from '@inertiajs/react'
function MainContent({ auth, children, title}) {
  const { flash } = usePage().props;
  return (
    <>
            <>
  {/* Content */}
  <div className="">
    <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
      {/* Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {/* Card */}
        <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-neutral-800 dark:border-neutral-700">
          <div className="p-4 md:p-5">
            <div className="flex items-center gap-x-2">
              <p className="text-xs uppercase tracking-wide text-gray-500 dark:text-neutral-500">
                Total Students
              </p>
            </div>
            <div className="mt-1 flex items-center gap-x-2">
              <h3 className="text-xl sm:text-2xl font-medium text-gray-800 dark:text-neutral-200">
                72,540
              </h3>
            </div>
          </div>
        </div>
        {/* End Card */}
        {/* Card */}
        <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-neutral-800 dark:border-neutral-700">
          <div className="p-4 md:p-5">
            <div className="flex items-center gap-x-2">
              <p className="text-xs uppercase tracking-wide text-gray-500 dark:text-neutral-500">
                Sessions
              </p>
            </div>
            <div className="mt-1 flex items-center gap-x-2">
              <h3 className="text-xl sm:text-2xl font-medium text-gray-800 dark:text-neutral-200">
                29.4%
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</>

</>

  )
}

export default MainContent
