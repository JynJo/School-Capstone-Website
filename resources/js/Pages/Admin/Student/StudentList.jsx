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
                <table className="table table-bordered table-responsive table-hover">
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
                                Options
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                        {students?.data.length > 0 ? (
                            students.data.map((student, index) => (
                                <>
                                    <tr>
                                        <td>
                                            {student.id_number}
                                        </td>
                                        <td >
                                            {student.name}
                                        </td>
                                        <td >
                                            {student.email}
                                        </td>
                                        <td >
                                            {student.section.name}
                                        </td>
                                        <td class="flex flex-row gap-2">
                                        <Link
                                                href={`/admin/grade/show/${student.id}`}
                                                className="btn btn-sm btn-success"
                                            >
                                                View Grades
                                            </Link>
                                        <Link
                                                href={`/admin/grade/create/${student.id}`}
                                                className="btn btn-sm btn-success"
                                            >
                                                Grade Student
                                            </Link>
                                            <button
                                                onClick={(e) =>
                                                    deleteHandler(student.id)
                                                }
                                                className="btn btn-sm btn-danger"
                                            >
                                                Delete
                                            </button>
                                            <Link
                                                href={route("student.edit", {
                                                    id: student.id,
                                                })}
                                                className="btn btn-sm btn-primary"
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
