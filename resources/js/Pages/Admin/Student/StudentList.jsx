import DashboardLayout from "../DashboardLayout.jsx";
import { Link, useForm, router } from "@inertiajs/react";

export default function StudentList({ auth, students }) {
    const deleteHandler = (id) => {
        router.delete(route("student.destroy", { id: id }));
    };

    return (
        <>
            <div className="overflow-x-auto overflow-y-auto p-4">
                <div className="mb-4 flex flex-row items-center gap-4">
                    <h1 class="font-semibold">
                        Student Management
                    </h1>
                    <Link
                        href={route("student.create")}
                        className="btn btn-primary btn-sm"
                    >
                        Add New
                    </Link>
                </div>
                <table className="table table-bordered table-responsive shadow-sm table-hover">
                    <thead class="">
                        <tr>
                            <th
                                class=""
                            >
                                ID Number
                            </th>
                            <th
                                scope=""
                                class=""
                            >
                                Name
                            </th>
                            <th
                                scope=""
                                class=""
                            >
                                Email
                            </th>
                            <th
                                scope=""
                                class=""
                            >
                                Section
                            </th>
                            <th
                                scope=""
                                class=""
                            >
                                Blood Type
                            </th>
                            <th
                                scope=""
                                class=""
                            >
                                Address
                            </th>
                            <th
                                scope=""
                                class=""
                            >
                                Parent Contact
                            </th>
                            <th
                                scope=""
                                class=""
                            >
                                Options
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                        {students?.data.length > 0 ? (
                            students.data.map((student, index) => (
                                <>
                                    <tr class="hover:bg-gray-100">
                                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                                            {student.id_number}
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                                            {student.name}
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                                            {student.email}
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                                            {student.section.name}
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                                            {student.blood_type}
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                                            {student.address}
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                                            {student.parent_no}
                                        </td>
                                        <td class=" ">
                                            <button
                                                onClick={(e) =>
                                                    deleteHandler(student.id)
                                                }
                                                className="inline-block rounded bg-red-600 px-3 py-2 text-xs font-medium text-white hover:bg-red-700 mx-2"
                                            >
                                                Delete
                                            </button>
                                            <Link
                                                href={route("student.edit", {
                                                    id: student.id,
                                                })}
                                                className="inline-block rounded bg-indigo-600 px-3 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                                            >
                                                Update
                                            </Link>
                                        </td>
                                    </tr>
                                </>
                            ))
                        ) : (
                            <p className="text-muted p-4 text-sm bg-slate-200">
                                No records available.
                            </p>
                        )}
                    </tbody>
                </table>
                <div className="flex gap-2 mt-4">
                    <div className="text-sm text-slate-500">
                        Showing <b>{students.current_page}</b> of{" "}
                        {students.total}
                    </div>
                    <div>
                        {students.links.map((link) =>
                            link.url ? (
                                <Link
                                    href={link.url}
                                    className={`${
                                        link.active
                                            ? "bg-slate-800"
                                            : "bg-white"
                                    } px-3 py-1 min-w-9 min-h-9 text-sm font-normal text-white border border-slate-800 rounded hover:bg-slate-600 hover:border-slate-600 transition duration-200 ease`}
                                    // className={`
                                    dangerouslySetInnerHTML={{
                                        __html:
                                            link.label == "Next &raquo;"
                                                ? "Next"
                                                : link.label ==
                                                  "&laquo; Previous"
                                                ? "Prev"
                                                : link.label,
                                    }}
                                />
                            ) : (
                                <span
                                    key={link.url}
                                    // dangerouslySetInnerHTML={{ __html: link.label }}
                                    className="px-3 py-1 min-w-9 min-h-9 text-sm font-normal text-slate-500 bg-white border border-slate-200 rounded hover:bg-slate-50 hover:border-slate-400 transition duration-200 ease"
                                >
                                    {link.label == "Next &raquo;"
                                        ? "Next"
                                        : "Prev"}
                                </span>
                            )
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

StudentList.layout = (page) => <DashboardLayout children={page} />;
