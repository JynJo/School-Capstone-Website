import React from "react";
import { Link, usePage, useForm } from "@inertiajs/react";
import { Button } from "react-bootstrap";

function StudentLayout({ children }) {
    const { url } = usePage();
    const { student } = usePage().props;
    const secondSegment =
        url.split("/")[2] !== undefined ? url.split("/")[2] : "index";
    const { post } = useForm();

    const logoutHandler = () => {
        axios
            .post(route("student.logout"))
            .then(() => window.location.reload())
            .catch((error) => console.error(error));
    };
    console.log("layout", student);
    return (
        <>
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
                                {student?.name}
                            </h3>
                            <p className="text-sm text-gray-600">
                                {" "}
                                {student?.email}
                            </p>
                        </div>
                        <div className="flex gap-2">
                            <Link href={route("student.profile")}>
                                <button
                                    type="button"
                                    className={`${
                                        secondSegment === "index"
                                            ? "bg-pink-700 hover:border-pink-300 hover:bg-pink-600 focus:ring-pink-300 text-white"
                                            : "focus:ring-gray-300 active:bg-white hover:bg-gray-100 focus:border-gray-300 hover:border-gray-300 bg-white"
                                    } inline-flex w-auto cursor-pointer select-none appearance-none items-center justify-center space-x-1 rounded border border-gray-200  px-3 py-2 text-sm font-medium text-gray-800 transition focus:outline-none focus:ring-2`}
                                >
                                    Assigned Task
                                </button>
                            </Link>
                            <Link href={route("student.grades")}>
                                <button
                                    type="button"
                                    className={`${
                                        secondSegment === "grades"
                                            ? "bg-pink-700 hover:border-pink-300 hover:bg-pink-600 focus:ring-pink-300 text-white"
                                            : "focus:ring-gray-300 active:bg-white hover:bg-gray-100 focus:border-gray-300 hover:border-gray-300 bg-white"
                                    } inline-flex w-auto cursor-pointer select-none appearance-none items-center justify-center space-x-1 rounded border border-gray-200  px-3 py-2 text-sm font-medium text-gray-800 transition focus:outline-none focus:ring-2`}
                                >
                                    View Report Card
                                </button>
                            </Link>
                            <button
                                type="button"
                                className="inline-flex w-auto cursor-pointer select-none appearance-none items-center justify-center space-x-1 rounded border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-white transition hover:border-gray-300 hover:bg-gray-100 focus:blue-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300"
                            >
                                <a
                                    href={route("student-schedule.show", {
                                        id: student.section.id,
                                    })}
                                >
                                    View Class Schedule
                                </a>
                            </button>
                            <button
                                onClick={logoutHandler}
                                type="button"
                                className="inline-flex w-auto cursor-pointer select-none appearance-none items-center justify-center space-x-1 rounded border border-gray-200 bg-slate-700 px-3 py-2 text-sm font-medium text-white transition hover:border-gray-300 active:bg-white hover:bg-gray-800 focus:border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300 cursor-pointer"
                            >
                                Logout
                            </button>
                        </div>
                        <div className="flex flex-col">
                            <h4 className="text-md font-medium leading-3 mb-2">
                                Student details
                            </h4>
                            <p className="text-sm text-stone-500">
                                Address: {student?.address}
                            </p>
                            <p className="text-sm text-stone-500">
                                Blood type: {student?.blood_type}
                            </p>
                            <p className="text-sm text-stone-500">
                                Gender: {student?.gender}
                            </p>
                            <p className="text-sm text-stone-500">
                                Birthday: {student?.birthday}
                            </p>
                            <p className="text-sm text-stone-500">
                                Contact in case of emergency:{" "}
                                {student?.parent_no}
                            </p>
                        </div>

                        {children}
                    </div>
                </div>
            </div>
        </>
    );
}

export default StudentLayout;
