import DashboardLayout from "../DashboardLayout.jsx";
import { Link, useForm, router } from "@inertiajs/react";
import { useState } from "react";

export default function StudentList({ students, sections }) {
    const [filter, setFilter] = useState();
    const { get, processing } = useForm();

    const filterHandler = (e) => {
        e.preventDefault()

        get(route('student.index', {section: filter }))

    }
    const deleteHandler = (id) => {
        if (confirm("Are you sure you want to delete this student?")) {
            router.delete(route("student.destroy", { id: id }));
        }
    };

    return (
        <DashboardLayout>
            <div className="container-fluid p-4 bg-white rounded shadow-sm">
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h2 className="h4 font-weight-bold mb-0">
                        Student Management
                    </h2>

                    <Link
                        href={route("student.create")}
                        className="btn btn-primary btn-sm"
                    >
                        <i className="fas fa-plus mr-2"></i> Add New Student
                    </Link>
                </div>

                <div className="mb-4 d-flex align-items-end gap-2">
                        <div className="flex-grow-1 mr-2">
                            <label
                                htmlFor="filter-section"
                                className="form-label mb-1"
                            >
                                Filter by section
                            </label>
                            <select
                                value={filter}
                                onChange={(e) => setFilter(e.target.value)}
                                id="filter-section"
                                className="form-control"
                            >
                                <option value="">All sections</option>
                                {sections &&
                                    sections.map((section, index) => (
                                        <option
                                            key={index}
                                            value={section.id}
                                        >
                                            {section.name}
                                        </option>
                                    ))}
                            </select>
                        </div>
                        <button onClick={filterHandler} className="btn btn-primary">Filter</button>
                </div>

                <div className="table-responsive">
                    <table className="table table-bordered table-hover">
                        <thead className="thead-light">
                            <tr>
                                <th>ID Number</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Section</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {students?.data.length > 0 ? (
                                students.data.map((student) => (
                                    <tr key={student.id}>
                                        <td>{student.id_number}</td>
                                        <td>{student.name}</td>
                                        <td>{student.email}</td>
                                        <td>
                                            { student.section.name }
                                        </td>
                                        <td>
                                            <div className="d-flex gap-2">
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
                                                    Grade
                                                </Link>
                                                <Link
                                                    href={route(
                                                        "student.edit",
                                                        { id: student.id }
                                                    )}
                                                    className="btn btn-sm btn-primary"
                                                >
                                                    <i className="fas fa-edit mr-1"></i>{" "}
                                                </Link>
                                                <button
                                                    onClick={() =>
                                                        deleteHandler(
                                                            student.id
                                                        )
                                                    }
                                                    className="btn btn-sm btn-danger"
                                                >
                                                    <i className="fas fa-trash-alt mr-1"></i>{" "}
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td
                                        colSpan="5"
                                        className="text-center py-4"
                                    >
                                        <div className="alert alert-info mb-0">
                                            No students found
                                        </div>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                {students?.data.length > 0 && (
                    <div className="d-flex justify-content-between align-items-center mt-3">
                        <div className="text-muted">
                            Showing <b>{students.from}</b> to{" "}
                            <b>{students.to}</b> of <b>{students.total}</b>{" "}
                            students
                        </div>
                        <nav>
                            <ul className="pagination pagination-sm mb-0">
                                {students.links.map((link, index) => (
                                    <li
                                        key={index}
                                        className={`page-item ${
                                            link.active ? "active" : ""
                                        } ${!link.url ? "disabled" : ""}`}
                                    >
                                        {link.url ? (
                                            <Link
                                                href={link.url}
                                                className="page-link"
                                                preserveScroll
                                            >
                                                {link.label.includes("Previous")
                                                    ? "« Previous"
                                                    : link.label.includes(
                                                          "Next"
                                                      )
                                                    ? "Next »"
                                                    : link.label}
                                            </Link>
                                        ) : (
                                            <span className="page-link">
                                                {link.label.includes("Previous")
                                                    ? "« Previous"
                                                    : link.label.includes(
                                                          "Next"
                                                      )
                                                    ? "Next »"
                                                    : link.label}
                                            </span>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                )}
            </div>
        </DashboardLayout>
    );
}
