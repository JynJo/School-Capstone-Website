import DashboardLayout from "../DashboardLayout.jsx";
import { Link } from "@inertiajs/react";

const Show = ({ teacher }) => {
    return (
        <>
            <div className="overflow-x-auto overflow-y-auto p-4 shadow-sm mb-4">
                <div className="mb-4">
                    <h3 class="text-lg font-normal text-slate-600 mb-2 ">
                        Name: {teacher.name}
                    </h3>
                    <h3 class="text-lg font-normal text-slate-600 mb-2 ">
                        Email: {teacher.email}
                    </h3>
                    <h3 class="text-lg font-normal text-slate-600 mb-2 ">
                        Address: {teacher.address}
                    </h3>
                    <h3 class="text-lg font-normal text-slate-600 mb-2 ">
                        Phone Number: {teacher.phone_number}
                    </h3>
                    {/*<p class="text-slate-500 text-sm">There's a scroll bar in the bottom (in case of table overlapping).</p>*/}
                </div>
                <table className="w-full table-auto min-w-max border table-bordered shadow-sm">
                    <thead>
                        <tr>
                            <th className="p-4 border-b border-slate-200 bg-slate-50">
                                <p className="text-sm font-normal leading-none text-slate-500">
                                    #
                                </p>
                            </th>
                            <th className="p-4 border-b border-slate-200 bg-slate-50">
                                <p className="text-sm font-normal leading-none text-slate-500">
                                    Section
                                </p>
                            </th>
                            <th className="p-4 border-b border-slate-200 bg-slate-50">
                                <p className="text-sm font-normal leading-none text-slate-500">
                                    Options
                                </p>
                            </th>
                        </tr>
                    </thead>
                    <tbody className="max-h-12 overflow-y-auto">
                        {teacher.sections.map((section, index) => (
                            <tr>
                                <td className="p-2 py-4 text-slate-500">
                                    {index + 1}
                                </td>
                                <td className="px-3 text-md text-slate-500 text-uppercase">
                                    {section.name}
                                </td>
                                <td className="px-3 ">
                                    <Link
                                        href={route("teacher-subject.create", {
                                            id: teacher.id,
                                            section_id: section.id,
                                        })}
                                        className="cursor-pointer btn btn-sm  btn-dark"
                                    >
                                        Assign Subject
                                    </Link>
                                    <Link
                                        href={route("teacher.show", {
                                            id: teacher.id,
                                        })}
                                        className="cursor-pointer inline-block rounded bg-gray-600 px-3 py-2 text-xs font-medium text-white hover:bg-gray-700 mx-2"
                                    >
                                        Reassign
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};
Show.layout = (page) => <DashboardLayout children={page} />;
export default Show;
