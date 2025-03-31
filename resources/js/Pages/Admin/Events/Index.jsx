import DashboardLayout from '../DashboardLayout.jsx'
import { Link, useForm, router } from '@inertiajs/react'

export default function EventsIndex({ events }) {
    const deleteHandler = (id) => {
        router.delete(route('events.destroy', { id: id }));
    }

    const limitText = (text) => {
        const limit = 12;
        return text.length > limit ? text.slice(0, limit) + '...' : text;
    }

    return (
        <div className="mt-4">
            <div className="row mb-4">
                <div className="col-12">
                    <div className="d-flex justify-content-between align-items-center">
                        <h1 className="h4 font-weight-bold mb-0">
                            Event Management
                        </h1>
                        <Link
                            href={route('events.create')}
                            className="btn btn-primary btn-sm"
                        >
                        <i className="fas fa-plus mr-2"></i> Create New
                        </Link>
                    </div>
                </div>
            </div>

            <div className="">
                <div className="">
                    <div className="table-responsive">
                        <table className="table table-bordered table-hover mb-0">
                            <thead className="thead-light">
                                <tr>
                                    <th>Category</th>
                                    <th>Title</th>
                                    <th>Description</th>
                                    <th>Image</th>
                                    <th>Date</th>
                                    <th>Options</th>
                                </tr>
                            </thead>
                            <tbody>
                                {events && events?.data.length > 0 ? 
                                    events.data.map((event, index) => (
                                        <tr key={index}>
                                            <td>{event.category}</td>
                                            <td>{event.title}</td>
                                            <td>{limitText(event.description)}</td>
                                            <td>
                                                <img 
                                                    width="100" 
                                                    src={`/storage/${event.image}`} 
                                                    className="img-thumbnail"
                                                    alt={event.title}
                                                />
                                            </td>
                                            <td>{event.date}</td>
                                            <td>
                                                <button 
                                                    className="btn btn-sm btn-danger" 
                                                    onClick={() => deleteHandler(event.id)}
                                                >
                       								 <i className="fas fa-trash-alt mr-2"></i>
                                                </button>
                                            </td>
                                        </tr>
                                    )) : 
                                    <tr>
                                        <td colSpan="6" className="text-center">No records available.</td>
                                    </tr>
                                }
                            </tbody>
                        </table>
                    </div>

                    <div className="row mt-4">
                        <div className="col-md-6">
                            <p className="text-muted small">
                                Showing <b>{events && events.current_page}</b> of {events && events.total}
                            </p>
                        </div>
                        <div className="col-md-6">
                            <nav className="d-flex justify-content-end">
                                <ul className="pagination pagination-sm">
                                    {events && events.links.map((link, index) => (
                                        <li key={index} className={`page-item ${link.active ? 'active' : ''} ${!link.url ? 'disabled' : ''}`}>
                                            {link.url ? (
                                                <Link
                                                    href={link.url}
                                                    className="page-link"
                                                    dangerouslySetInnerHTML={{
                                                        __html: link.label == 'Next &raquo;' ? 'Next' : 
                                                                link.label == '&laquo; Previous' ? 'Prev' : 
                                                                link.label
                                                    }}
                                                />
                                            ) : (
                                                <span className="page-link">
                                                    {link.label == 'Next &raquo;' ? 'Next' : 'Prev'}
                                                </span>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

