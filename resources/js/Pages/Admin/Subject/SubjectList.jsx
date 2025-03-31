import DashboardLayout from '../DashboardLayout.jsx'
import { Link, useForm, router } from '@inertiajs/react'

export default function SubjectList({ subjects }) {

    const deleteHandler = (id) => {
        if (confirm('Are you sure you want to delete this subject?')) {
            router.delete(route('subject.destroy', { id: id }));
        }
    }

    return (
            <div className=" bg-white rounded ">
                <div className="table-responsive">
                    <table className="table table-bordered table-hover">
                        <thead className="thead-light">
                            <tr>
                                <th>Subject Name</th>
                                <th >Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {subjects?.data.length > 0 ? (
                                subjects.data.map((subject) => (
                                    <tr key={subject.id}>
                                        <td>{subject.name}</td>
                                        <td>
                                                <Link 
                                                    href={route('subject.edit', { id: subject.id })} 
                                                    className="btn btn-primary btn-sm"
                                                >
                                                    <i className="fas fa-edit"></i>
                                                </Link>
                                                <button 
                                                    onClick={() => deleteHandler(subject.id)} 
                                                    className="btn btn-danger btn-sm"
                                                >
                                                    <i className="fas fa-trash-alt"></i>
                                                </button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="2" className="text-center py-4">
                                        <div className="alert alert-info mb-0">
                                            No subjects available
                                        </div>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                {subjects?.data.length > 0 && (
                    <div className="d-flex justify-content-between align-items-center mt-3">
                        <div className="text-muted">
                            Showing <b>{subjects.from}</b> to <b>{subjects.to}</b> of <b>{subjects.total}</b> subjects
                        </div>
                        <nav>
                            <ul className="pagination pagination-sm mb-0">
                                {subjects.links.map((link, index) => (
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
    )
}

SubjectList.layout = page => <DashboardLayout children={page} />