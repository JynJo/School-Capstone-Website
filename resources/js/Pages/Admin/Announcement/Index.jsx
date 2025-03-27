import DashboardLayout from '../DashboardLayout.jsx'
import { Link, useForm } from '@inertiajs/react'
import EventsList from '../Events/Index.jsx'

const Index = ({ announcements, events }) => {
    const { post } = useForm();

    const deleteHandler = (id) => {
        if (confirm('Are you sure you want to delete this announcement?')) {
            post(route('announcement.delete', { id: id }));
        }
    }

    return (
        <DashboardLayout>
            <div className="container-fluid p-4 bg-white rounded shadow-sm">
                {/* Header Section */}
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h2 className="h4 font-weight-bold mb-0">
                        <i className="fas fa-bullhorn mr-2"></i> Announcement Management
                    </h2>
                    <Link
                        href={route('announcement.create')}
                        className="btn btn-primary btn-sm"
                    >
                        <i className="fas fa-plus mr-2"></i> Create New
                    </Link>
                </div>

                {/* Announcements Table */}
                <div className="table-responsive">
                    <table className="table table-bordered table-hover">
                        <thead className="thead-light">
                            <tr>
                                <th width="120">Image</th>
                                <th>Title</th>
                                <th width="150">Notice For</th>
                                <th width="220" className="text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {announcements.data.length > 0 ? (
                                announcements.data.map((announcement) => (
                                    <tr key={announcement.id}>
                                        <td>
                                            <img 
                                                src={`/storage/${announcement.image}`} 
                                                alt={announcement.title}
                                                className="img-thumbnail"
                                                style={{ width: '80px', height: '60px', objectFit: 'cover' }}
                                            />
                                        </td>
                                        <td>
                                            {announcement.title.length > 30 
                                                ? `${announcement.title.substring(0, 30)}...` 
                                                : announcement.title}
                                        </td>
                                        <td className="text-uppercase">
                                            {announcement.notice_for}
                                        </td>
                                        <td>
                                            <div className="d-flex justify-content-center gap-2">
                                                <Link 
                                                    href={route('announcement.show', { id: announcement.id })} 
                                                    className="btn btn-info btn-sm"
                                                >
                                                    <i className="fas fa-eye mr-1"></i> View
                                                </Link>
                                                <Link 
                                                    href={route('announcement.edit', { id: announcement.id })} 
                                                    className="btn btn-primary btn-sm"
                                                >
                                                    <i className="fas fa-edit mr-1"></i> Edit
                                                </Link>
                                                <button 
                                                    className="btn btn-danger btn-sm"
                                                    onClick={() => deleteHandler(announcement.id)}
                                                >
                                                    <i className="fas fa-trash-alt mr-1"></i> Delete
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="4" className="text-center py-4">
                                        <div className="alert alert-info mb-0">
                                            No announcements available
                                        </div>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                {announcements.data.length > 0 && (
                    <div className="d-flex justify-content-between align-items-center mt-3">
                        <div className="text-muted">
                            Showing <b>{announcements.from}</b> to <b>{announcements.to}</b> of <b>{announcements.total}</b> announcements
                        </div>
                        <nav>
                            <ul className="pagination pagination-sm mb-0">
                                {announcements.links.map((link, index) => (
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

                {/* Events Section */}
                <EventsList events={events} />
            </div>
        </DashboardLayout>
    )
}


export default Index;