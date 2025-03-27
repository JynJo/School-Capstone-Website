import React from "react";
import { Link, usePage, useForm } from "@inertiajs/react";
import { PhotoProvider, PhotoView } from 'react-photo-view';

function Index({ children }) {
    const { announcements, student, schedule, grades } = usePage().props;
    const { post } = useForm();

    const logoutHandler = () => {
        post(route("student.logout"));
    };

    return (
        <div className="container py-4">
            <div className="row">
                {/* Student Profile Card */}
                <div className="col-md-4 mb-4">
                    <div className="card shadow">
                        <div className="card-header bg-primary text-white">
                            <h4 className="mb-0">Student Profile</h4>
                        </div>
                        <div className="card-body">
                            <div className="text-center mb-3">
                                <div className="bg-light rounded-circle d-inline-flex align-items-center justify-content-center" style={{width: '100px', height: '100px'}}>
                                    <i className="fas fa-user fa-3x text-primary"></i>
                                </div>
                            </div>
                            
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                    <span>Name:</span>
                                    <span className="fw-bold">{student.name}</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                    <span>Email:</span>
                                    <span className="fw-bold">{student.email}</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                    <span>ID Number:</span>
                                    <span className="fw-bold">{student.id_number}</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                    <span>Section:</span>
                                    <span className="fw-bold">{student.section.name}</span>
                                </li>
                            </ul>
                            
                            <div className="d-grid gap-2 mt-3">
                                <PhotoProvider>
                                    <PhotoView src={`/storage/${schedule[0] && schedule[0].image}`}>
                                        <button className="btn btn-outline-primary">
                                            <i className="fas fa-calendar-alt me-2"></i> View Schedule
                                        </button>
                                    </PhotoView>
                                </PhotoProvider>
                                <button 
                                    className="btn btn-outline-danger" 
                                    onClick={logoutHandler}
                                >
                                    <i className="fas fa-sign-out-alt me-2"></i> Logout
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="col-md-8">
                    {/* Academic Performance */}
                    <div className="card shadow mb-4">
                        <div className="card-header bg-success text-white">
                            <h4 className="mb-0">Academic Performance</h4>
                        </div>
                        <div className="card-body">
                            <div className="table-responsive">
                                <table className="table table-hover">
                                    <thead className="table-light">
                                        <tr>
                                            <th>Subject</th>
                                            <th>Average</th>
                                            <th>Term</th>
                                            <th>Semester</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {grades && grades.map((grade, index) => (
                                            <tr key={index}>
                                                <td>{grade.subject.name}</td>
                                                <td>
                                                    <span className={`badge ${grade.average >= 75 ? 'bg-success' : 'bg-danger'}`}>
                                                        {grade.average}%
                                                    </span>
                                                </td>
                                                <td>{grade.term}</td>
                                                <td>{grade.semester}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    {/* Announcements */}
                    <div className="card shadow">
                        <div className="card-header bg-info text-white">
                            <h4 className="mb-0">Announcements</h4>
                        </div>
                        <div className="card-body">
                            {announcements && announcements.length > 0 ? (
                                announcements.map((announcement) => (
                                    <div className="card mb-3" key={announcement.id}>
                                        <div className="card-body">
                                            <h5 className="card-title text-primary">{announcement.title}</h5>
                                            <div className="mb-3">
                                                {announcement.image && (
                                                    <img 
                                                        src={`/storage/${announcement.image}`} 
                                                        className="img-fluid rounded"
                                                        alt={announcement.title}
                                                    />
                                                )}
                                            </div>
                                            <div className="card-text mb-3" dangerouslySetInnerHTML={{ __html: announcement.content }} />
                                            <div className="text-muted small">
                                                <i className="far fa-calendar-alt me-1"></i>
                                                {new Intl.DateTimeFormat("en-US", {
                                                    month: "long",
                                                    day: "numeric",
                                                    year: "numeric",
                                                }).format(new Date(announcement.created_at))}
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="alert alert-info mb-0">
                                    <i className="fas fa-info-circle me-2"></i>
                                    No announcements available
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Index;