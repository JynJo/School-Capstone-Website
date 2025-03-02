import StudentLayout from "./Layout.jsx";
import axios from "axios";
import { Link } from "@inertiajs/react";

const Index = ({ teacher }) => {
    const section = teacher.section;
    return (
        <>
            {/*{ JSON.stringify(subjects[0].teachers[0].subjects)}*/}
            <table className="w-full table-auto min-w-max border table-bordered table-striped">
                <thead>
                    <tr>
                        <th className="p-4">
                            <p className=" font-normal">Advisory Class</p>
                        </th>
                        <th className="p-4">
                            <p className="font-normal">Strand</p>
                        </th>
                        <th className="p-4">
                            <p className="font-normal">School Year</p>
                        </th>
                        <th className="p-4">
                            <p className="font-normal">Grade Level</p>
                        </th>
                        <th className="p-4">
                            <p className="font-normal">Semester</p>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="p-4">
                            <p className="font-light">
                                {section && section.name}
                            </p>
                        </td>
                        <td className="p-4">
                            <p className="font-light">TVL</p>
                        </td>
                        <td className="p-4">
                            <p className="font-light">2024-2025</p>
                        </td>
                        <td className="p-4">
                            <p className="font-light">12</p>
                        </td>
                        <td className="p-4">
                            <p className="font-light">First Semester</p>
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    );
};

Index.layout = (page) => <StudentLayout children={page} />;

export default Index;
