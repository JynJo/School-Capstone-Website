import DashboardLayout from '../DashboardLayout.jsx';
import { Link, useForm, router } from '@inertiajs/react';
import SubjectList from '../Subject/SubjectList.jsx';
import AssignSubject from '../SectionSubject/Create.jsx';
import { PhotoProvider, PhotoView } from 'react-photo-view';

export default function SectionList({ sections, subjects, allSections, allSubjects }) {
    const { data, setData, post, errors, processing } = useForm({
        subject_name: '',
        section_name: ''
    });

    const deleteHandler = (id) => {
        if (confirm('Are you sure you want to delete this section?')) {
            router.delete(route('section.destroy', { id: id }));
        }
    };

    const storeSubject = (e) => {    
        e.preventDefault();
        post(route('subject.store'));
    };

    const storeSection = (e) => {    
        e.preventDefault();
        post(route('section.store'));
    };

    return (
        <DashboardLayout>
            <div className="container-fluid p-4 bg-white rounded shadow-sm">
                {/* Section Management */}
                <div className="mb-5">
                    <div className="d-flex justify-content-between align-items-center mb-4">
                        <h2 className="h4 font-weight-bold mb-0">Section Management</h2>
                    </div>

                    <form onSubmit={storeSection} className="mb-4">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <input
                                        value={data.section_name}
                                        onChange={(e) => setData('section_name', e.target.value)}
                                        className="form-control form-control-sm"
                                        placeholder="Section name"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="col-md-2">
                                <button
                                    type='submit'
                                    className="btn btn-primary btn-sm"
                                    disabled={processing}
                                >
                        <i className="fas fa-plus mr-2"></i>                                    
                                    {processing ? 'Adding...' : 'Add New Section'}
                                </button>
                            </div>
                        </div>
                    </form>

                    <div className="table-responsive">
                        <table className="table table-bordered table-hover">
                            <thead className="thead-light">
                                <tr>
                                    <th>Section Name</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {sections?.data.length > 0 ? (
                                    sections.data.map((section) => (
                                        <tr key={section.id}>
                                            <td>{section.name}</td>
                                            <td>
                                                <div className="d-flex gap-2">
                                                    <PhotoProvider>
                                                        <PhotoView src={`/storage/${section.schedule?.image || ''}`}>
                                                            <button className="btn btn-sm btn-warning">
                                                    <i className="fas fa-clock mr-1"></i> 
                                                                 View Schedule
                                                            </button>
                                                        </PhotoView>
                                                    </PhotoProvider>

                                                    <Link 
                                                        href={`/admin/subject/show/${section.id}`} 
                                                        className="btn btn-sm btn-info"
                                                    >
                                                    <i className="fas fa-book mr-1"></i>
                                                        View Subjects
                                                    </Link>

                                                    <Link 
                                                        href={route('section.edit', { id: section.id })} 
                                                        className="btn btn-sm btn-primary"
                                                    >
                                                    <i className="fas fa-pen mr-1"></i>

                                                        Edit
                                                    </Link>

                                                    <button
                                                        onClick={() => deleteHandler(section.id)}
                                                        className="btn btn-sm btn-danger"
                                                    >
                                                    <i className="fas fa-trash mr-1"></i>

                                                        Delete
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="2" className="text-center py-4">
                                            <div className="alert alert-info mb-0">
                                                No sections available
                                            </div>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>

                    {/* Pagination */}
                    {sections?.data.length > 0 && (
                        <div className="d-flex justify-content-between align-items-center mt-3">
                            <div className="text-muted">
                                Showing <b>{sections.from}</b> to <b>{sections.to}</b> of <b>{sections.total}</b> entries
                            </div>
                            <nav>
                                <ul className="pagination pagination-sm mb-0">
                                    {sections.links.map((link, index) => (
                                        <li key={index} className={`page-item ${link.active ? 'active' : ''} ${!link.url ? 'disabled' : ''}`}>
                                            {link.url ? (
                                                <Link 
                                                    href={link.url} 
                                                    className="page-link"
                                                    preserveScroll
                                                >
                                                    {link.label.includes('Previous') ? '«' : 
                                                     link.label.includes('Next') ? '»' : link.label}
                                                </Link>
                                            ) : (
                                                <span className="page-link">
                                                    {link.label.includes('Previous') ? '«' : 
                                                     link.label.includes('Next') ? '»' : link.label}
                                                </span>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        </div>
                    )}
                </div>

                {/* Subject Management */}
                <div className="mb-5">
                    <div className="d-flex justify-content-between align-items-center mb-4">
                        <h2 className="h4 font-weight-bold mb-0">Subject Management</h2>
                    </div>

                    <form onSubmit={storeSubject} className="mb-4">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <input
                                        value={data.subject_name}
                                        onChange={(e) => setData('subject_name', e.target.value)}
                                        className="form-control form-control-sm"
                                        placeholder="Subject name"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="col-md-2">
                                <button
                                    type='submit'
                                    className="btn btn-primary btn-sm"
                                    disabled={processing}
                                >
                        <i className="fas fa-plus mr-2"></i>                                    

                                    {processing ? 'Adding...' : 'Add New Subject'}
                                </button>
                            </div>
                        </div>
                    </form>

                    <SubjectList subjects={subjects} />
                </div>

                {/* Assign Subject to Section */}
                <AssignSubject subjects={allSubjects} sections={allSections} />
            </div>
        </DashboardLayout>
    );
}

// SectionList.layout = page => <DashboardLayout children={page} />;