import DashboardLayout from "../DashboardLayout.jsx";

export default function Show({ student }) {
    
    function getAverageBadgeClass(average) {
        if (average >= 90) return "badge-success";
        if (average >= 75) return "badge-primary";
        if (average <= 75) return "badge-warning";
        return "badge-danger";
    }

    return (
        <>
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className="card shadow border-0">
                            <div className="card-header bg-primary text-white">
                                <div className="d-flex justify-content-between align-items-center">
                                    <div>
                                        <h2 className="h4 mb-0 font-weight-bold">
                                            <i className="fas fa-user-graduate mr-2"></i>
                                            {student.name}
                                        </h2>
                                        <span className="text-white-50">
                                            Section:{" "}
                                            <b>{student.section.name}</b>
                                        </span>
                                    </div>
                                    <span className="badge badge-light">
                                        <i className="fas fa-id-card mr-1"></i>{" "}
                                        Student Record
                                    </span>
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="table-responsive">
                                    <table className="table table-striped table-hover">
                                        <thead className="thead-dark">
                                            <tr>
                                                <th>
                                                    <i className="fas fa-book mr-1"></i>{" "}
                                                    Subject
                                                </th>
                                                <th>
                                                    <i className="fas fa-percentage mr-1"></i>{" "}
                                                    Average
                                                </th>
                                                <th>
                                                    <i className="fas fa-calendar-alt mr-1"></i>{" "}
                                                    Term
                                                </th>
                                                <th>
                                                    <i className="fas fa-calendar-week mr-1"></i>{" "}
                                                    Semester
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {student.grades.map(
                                                (grades, index) => (
                                                    <tr key={index}>
                                                        <td className="font-weight-bold">
                                                            {
                                                                grades.subject
                                                                    .name
                                                            }
                                                        </td>
                                                        <td>
                                                            <span
                                                                className={`badge ${getAverageBadgeClass(
                                                                    grades.average
                                                                )}`}
                                                            >
                                                                {grades.average}
                                                                %
                                                            </span>
                                                        </td>
                                                        <td>{grades.term}</td>
                                                        <td>
                                                            {grades.semester}
                                                        </td>
                                                    </tr>
                                                )
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="card-footer bg-light">
                                <small className="text-muted">
                                    Last updated:{" "}
                                    {new Date().toLocaleDateString()}
                                </small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

Show.layout = (page) => (
    <DashboardLayout children={page} title="Student Grades" />
);
