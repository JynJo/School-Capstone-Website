import React, { useEffect, useState } from 'react'
import { Link, usePage } from '@inertiajs/react'
import { Button } from 'react-bootstrap'
import axios from 'axios'
//import Announcement from './Announcement.jsx'
function TeacherLayout({ children  }) {
    const { url } = usePage();
    const { teacher } = usePage().props;
    const secondSegment = url.split('/')[2] !== undefined ? url.split('/')[2] : "index" ;

    const logoutHandler = () => {
        axios.post( route('teacher.logout'))
            .then(() => window.location.reload())
            .catch((error) => console.error(error))
    }
  return (<>
    <div className="p-5">
<div className="bg-white md:mx-auto rounded shadow-xl w-full overflow-hidden">
  <div className="h-[140px] bg-gradient-to-r from-pink-500 to-pink-500" />
  <div className="px-5 py-2 flex flex-col gap-3 pb-6">
    <div className="h-[90px] shadow-md w-[90px] rounded-full border-4 overflow-hidden -mt-14 border-white">
      <img
        src="images/lc-seal.png"
        className="w-full h-full rounded-full object-center object-cover"
      />
    </div>
    <div className="">
      <h3 className="text-xl text-slate-900 relative font-bold leading-6">
        { teacher?.name }
      </h3>
      <p className="text-sm text-gray-600"> { teacher?.email }</p>
    </div>
   {/* <div className="flex gap-3 flex-wrap">
      <span className="rounded-sm bg-yellow-100 px-3 py-1 text-xs font-medium text-yellow-800">
        Developer
      </span>
      <span className="rounded-sm bg-green-100 px-3 py-1 text-xs font-medium text-green-800">
        Design
      </span>
      <span className="rounded-sm bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800">
        Managements
      </span>
      <span className="rounded-sm bg-indigo-100 px-3 py-1 text-xs font-medium text-indigo-800">
        Projects
      </span>
    </div>*/}
    <div className="flex gap-2">
    <Link href={ route('teacher.profile') }>
      <button
        type="button"
        className={`${secondSegment === "index"
          ? 'bg-pink-700 hover:border-pink-300 hover:bg-pink-600 focus:ring-pink-300 text-white'
          : 'focus:ring-gray-300 active:bg-white hover:bg-gray-100 focus:border-gray-300 hover:border-gray-300 bg-white'
        } inline-flex w-auto cursor-pointer select-none appearance-none items-center justify-center space-x-1 rounded border border-gray-200  px-3 py-2 text-sm font-medium text-gray-800 transition focus:outline-none focus:ring-2`}
        >
        Advisory Class
      </button>
      </Link>
    <Link href={ route('teacher-grade.create') }>
      <button
        type="button"
       className={`${secondSegment === "grade-create"
          ? 'bg-pink-700 hover:border-pink-300 hover:bg-pink-600 focus:ring-pink-300 text-white'
          : 'focus:ring-gray-300 active:bg-white hover:bg-gray-100 focus:border-gray-300 hover:border-gray-300 bg-white'
        } inline-flex w-auto cursor-pointer select-none appearance-none items-center justify-center space-x-1 rounded border border-gray-200  px-3 py-2 text-sm font-medium text-gray-800 transition focus:outline-none focus:ring-2`}
        >
        Grade Advisees
      </button>
      </Link>
        <Link href={ route('teacher.announcement') }>
      <button
        type="button"
className={`${secondSegment === "announcement"
          ? 'bg-pink-700 hover:border-pink-300 hover:bg-pink-600 focus:ring-pink-300 text-white'
          : 'focus:ring-gray-300 active:bg-white hover:bg-gray-100 focus:border-gray-300 hover:border-gray-300 bg-white'
        } inline-flex w-auto cursor-pointer select-none appearance-none items-center justify-center space-x-1 rounded border border-gray-200  px-3 py-2 text-sm font-medium text-gray-800 transition focus:outline-none focus:ring-2`}
        >
        Announcements
      </button>
      </Link>
      <button
        onClick={logoutHandler}
        type="button"
        className="inline-flex w-auto cursor-pointer select-none appearance-none items-center justify-center space-x-1 rounded border border-gray-200 bg-slate-700 px-3 py-2 text-sm font-medium text-white transition hover:border-gray-300 active:bg-white hover:bg-gray-800 focus:border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300 cursor-pointer"
        >
        Logout
      </button>
    </div>
    <div className="flex flex-col">
        <h4 className="text-md font-medium leading-3 mb-2">Student details</h4>
        <p className="text-sm text-stone-500">Address: { teacher?.address }</p>
        {/*<p className="text-sm text-stone-500">Blood type: { student?.blood_type }</p>*/}
        <p className="text-sm text-stone-500">Gender: { teacher?.gender }</p>
        <p className="text-sm text-stone-500">Birthday: { teacher?.birthday }</p>
        <p className="text-sm text-stone-500">Contact in case of emergency: { teacher?.phone_number }</p>
    </div>
        { children }

    </div>
    </div>
    </div>
</>
  )
}

export default TeacherLayout
