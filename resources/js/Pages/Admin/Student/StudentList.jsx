import DashboardLayout from "../DashboardLayout.jsx";
import { Link, useForm, router } from "@inertiajs/react";

export default function StudentList({ auth, students }) {
    const deleteHandler = (id) => {
        if (confirm('Are you sure you want to delete this student?')) {
            router.delete(route("student.destroy", { id: id }));
        }
    };

    return (
        <DashboardLayout>
            <div className="container-fluid p-4 bg-white rounded shadow-sm">
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h2 className="h4 font-weight-bold mb-0">Student Management</h2>
                    <Link
                        href={route("student.create")}
                        className="btn btn-primary btn-sm"
                    >
                        <i className="fas fa-plus mr-2"></i> Add New Student
                    </Link>
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
                                        <td>{student.section?.name || 'N/A'}</td>
                                        <td>
                                            <div className="d-flex gap-2">
                                                <Link
                                                    href={`/admin/grade/show/${student.id}`}
                                                    className="btn btn-sm btn-info"
                                                >
                                                    <i className="fas fa-eye mr-1"></i> View Grades
                                                </Link>
                                                <Link
                                                    href={`/admin/grade/create/${student.id}`}
                                                    className="btn btn-sm btn-success"
                                                >
                                                    <i className="fas fa-edit mr-1"></i> Grade
                                                </Link>
                                                <Link
                                                    href={route("student.edit", { id: student.id })}
                                                    className="btn btn-sm btn-primary"
                                                >
                                                    <i className="fas fa-pencil-alt mr-1"></i> Edit
                                                </Link>
                                                <button
                                                    onClick={() => deleteHandler(student.id)}
                                                    className="btn btn-sm btn-danger"
                                                >
                                                    <i className="fas fa-trash-alt mr-1"></i> Delete
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="5" className="text-center py-4">
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
                            Showing <b>{students.from}</b> to <b>{students.to}</b> of <b>{students.total}</b> students
                        </div>
                        <nav>
                            <ul className="pagination pagination-sm mb-0">
                                {students.links.map((link, index) => (
                                    <li key={index} className={`page-item ${link.active ? 'active' : ''} ${!link.url ? 'disabled' : ''}`}>
                                        {link.url ? (
                                            <Link 
                                                href={link.url} 
                                                className="page-link"
                                                preserveScroll
                                            >
                                                {link.label.includes('Previous') ? '« Previous' : 
                                                 link.label.includes('Next') ? 'Next »' : link.label}
                                            </Link>
                                        ) : (
                                            <span className="page-link">
                                                {link.label.includes('Previous') ? '« Previous' : 
                                                 link.label.includes('Next') ? 'Next »' : link.label}
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

