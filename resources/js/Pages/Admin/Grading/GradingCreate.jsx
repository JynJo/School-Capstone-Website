import DashboardLayout from "../DashboardLayout.jsx";
import { useForm } from "@inertiajs/react";

export default function GradeCreate({ student, subjects }) {
    const { errors, post, data, setData, processing } = useForm({
        student_id: student.id,
        section_id: student.section.id,
        subjects: subjects.map((subject) => ({
            subject_id: subject.id,
            average: "",
            term: "",
            semester: "",
        })),
    });

    const submitHandler = (e) => {
        e.preventDefault();
        post(route("grade.store"));
    };

    return (
        <div className="container-fluid py-4">
            <div className="row justify-content-center">
                <div className="col-lg-10">
                    <div className="card shadow-lg border-0 rounded-lg">
                        <div className="card-header bg-primary text-white py-3">
                            <div className="d-flex justify-content-between align-items-center">
                                <h2 className="h4 mb-0 font-weight-bold">
                                    <i className="fas fa-user-graduate mr-2"></i>
                                    Grading Student: {student.name}
                                </h2>
                                <span className="badge badge-light">
                                    <i className="fas fa-chalkboard-teacher mr-1"></i>
                                    Section: {student.section.name}
                                </span>
                            </div>
                        </div>

                        <div className="card-body p-0">
                            <form onSubmit={submitHandler}>
                                <div className="table-responsive">
                                    <table className="table table-hover align-middle mb-0">
                                        <thead className="thead-light">
                                            <tr>
                                                <th className="w-25">
                                                    Subject
                                                </th>
                                                <th className="w-20">
                                                    Average
                                                </th>
                                                <th className="w-25">Term</th>
                                                <th className="w-25">
                                                    Semester
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {data.subjects.map(
                                                (subject, index) => (
                                                    <tr
                                                        key={index}
                                                        className={
                                                            index % 2 === 0
                                                                ? "bg-light"
                                                                : ""
                                                        }
                                                    >
                                                        <td className="font-weight-bold">
                                                            <i className="fas fa-book mr-2 text-primary"></i>
                                                            {
                                                                subjects[index]
                                                                    .name
                                                            }
                                                        </td>
                                                        <td>
                                                            <div className="input-group">
                                                                <input
                                                                    value={
                                                                        subject.average
                                                                    }
                                                                    onChange={(
                                                                        e
                                                                    ) => {
                                                                        const newSubjects =
                                                                            [
                                                                                ...data.subjects,
                                                                            ];
                                                                        newSubjects[
                                                                            index
                                                                        ].average =
                                                                            e.target.value;
                                                                        setData(
                                                                            "subjects",
                                                                            newSubjects
                                                                        );
                                                                    }}
                                                                    type="number"
                                                                    min="0"
                                                                    max="100"
                                                                    className={`form-control ${
                                                                        errors[
                                                                            `subjects.${index}.average`
                                                                        ]
                                                                            ? "is-invalid"
                                                                            : ""
                                                                    }`}
                                                                    placeholder="0-100"
                                                                />
                                                                <div className="input-group-append">
                                                                    <span className="input-group-text">
                                                                        %
                                                                    </span>
                                                                </div>
                                                                {errors[
                                                                    `subjects.${index}.average`
                                                                ] && (
                                                                    <div className="invalid-feedback">
                                                                        {
                                                                            errors[
                                                                                `subjects.${index}.average`
                                                                            ]
                                                                        }
                                                                    </div>
                                                                )}
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <select
                                                                value={
                                                                    subject.term
                                                                }
                                                                onChange={(
                                                                    e
                                                                ) => {
                                                                    const newSubjects =
                                                                        [
                                                                            ...data.subjects,
                                                                        ];
                                                                    newSubjects[
                                                                        index
                                                                    ].term =
                                                                        e.target.value;
                                                                    setData(
                                                                        "subjects",
                                                                        newSubjects
                                                                    );
                                                                }}
                                                                className={`form-control ${
                                                                    errors[
                                                                        `subjects.${index}.term`
                                                                    ]
                                                                        ? "is-invalid"
                                                                        : ""
                                                                }`}
                                                            >
                                                                <option
                                                                    value=""
                                                                    disabled
                                                                >
                                                                    Select Term
                                                                </option>
                                                                <option value="Prelim">
                                                                    Prelim
                                                                </option>
                                                                <option value="Midterm">
                                                                    Midterm
                                                                </option>
                                                                <option value="Finals">
                                                                    Finals
                                                                </option>
                                                            </select>
                                                            {errors[
                                                                `subjects.${index}.term`
                                                            ] && (
                                                                <div className="invalid-feedback">
                                                                    {
                                                                        errors[
                                                                            `subjects.${index}.term`
                                                                        ]
                                                                    }
                                                                </div>
                                                            )}
                                                        </td>
                                                        <td>
                                                            <select
                                                                value={
                                                                    subject.semester
                                                                }
                                                                onChange={(
                                                                    e
                                                                ) => {
                                                                    const newSubjects =
                                                                        [
                                                                            ...data.subjects,
                                                                        ];
                                                                    newSubjects[
                                                                        index
                                                                    ].semester =
                                                                        e.target.value;
                                                                    setData(
                                                                        "subjects",
                                                                        newSubjects
                                                                    );
                                                                }}
                                                                className={`form-control ${
                                                                    errors[
                                                                        `subjects.${index}.semester`
                                                                    ]
                                                                        ? "is-invalid"
                                                                        : ""
                                                                }`}
                                                            >
                                                                <option
                                                                    value=""
                                                                    disabled
                                                                >
                                                                    Select
                                                                    Semester
                                                                </option>
                                                                <option value="First Semester">
                                                                    First
                                                                    Semester
                                                                </option>
                                                                <option value="Second Semester">
                                                                    Second
                                                                    Semester
                                                                </option>
                                                            </select>
                                                            {errors[
                                                                `subjects.${index}.semester`
                                                            ] && (
                                                                <div className="invalid-feedback">
                                                                    {
                                                                        errors[
                                                                            `subjects.${index}.semester`
                                                                        ]
                                                                    }
                                                                </div>
                                                            )}
                                                        </td>
                                                    </tr>
                                                )
                                            )}
                                        </tbody>
                                    </table>
                                </div>

                                <div className="card-footer bg-white border-0 d-flex justify-content-between align-items-center py-3">
                                    <div className="text-muted small">
                                        <i className="fas fa-info-circle mr-1"></i>
                                        Please fill all required fields
                                    </div>
                                    <button
                                        type="submit"
                                        className="btn btn-success px-4 py-2"
                                        disabled={processing}
                                    >
                                        {processing ? (
                                            <>
                                                <span
                                                    className="spinner-border spinner-border-sm mr-2"
                                                    role="status"
                                                    aria-hidden="true"
                                                ></span>
                                                Saving...
                                            </>
                                        ) : (
                                            <>
                                                <i className="fas fa-save mr-2"></i>
                                                Save Grades
                                            </>
                                        )}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

GradeCreate.layout = (page) => (
    <DashboardLayout children={page} title="Add Grading" />
);
