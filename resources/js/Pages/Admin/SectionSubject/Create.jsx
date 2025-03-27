import DashboardLayout from '../DashboardLayout.jsx'
import { useForm } from '@inertiajs/react'
import CreateSchedule from '../Schedule/CreateSchedule.jsx'

export default function AssignSubject({ sections, subjects }) {
    const { data, setData, post, errors, processing } = useForm({
        section_id: '',
        subject_id: '',
    });

    const submitHandler = (e) => {
        e.preventDefault();
        post(route('section-subject.store'));
    }

    return (
        <>
            <div className="bg-white mb-4">
                <h2 className="h4 font-weight-bold mb-4">
                    <i className="fas fa-link mr-2"></i> Assign Subject to Section
                </h2>

                {/* Combined error display */}
                {(errors.subject_id || errors.section_id) && (
                    <div className="alert alert-danger alert-dismissible fade show">
                        <strong><i className="fas fa-exclamation-circle mr-2"></i>Validation Error!</strong>
                        <ul className="mb-0 mt-2">
                            {errors.subject_id && <li>{errors.subject_id}</li>}
                            {errors.section_id && <li>{errors.section_id}</li>}
                        </ul>
                    </div>
                )}

                <form onSubmit={submitHandler}>
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <label className="form-label">Section</label>
                            <select
                                value={data.section_id}
                                onChange={e => setData('section_id', e.target.value)}
                                className={`form-control form-select ${errors.section_id ? 'is-invalid' : ''}`}
                            >
                                <option value="" hidden>Select Section</option>
                                {sections?.length > 0 ? (
                                    sections.map((section) => (
                                        <option key={section.id} value={section.id}>
                                            {section.name}
                                        </option>
                                    ))
                                ) : (
                                    <option disabled>No sections available</option>
                                )}
                            </select>
                        </div>

                        <div className="col-md-6 mb-3">
                            <label className="form-label">Subject</label>
                            <select
                                value={data.subject_id}
                                onChange={e => setData('subject_id', e.target.value)}
                                className={`form-control form-select ${errors.subject_id ? 'is-invalid' : ''}`}
                            >
                                <option value="" hidden>Select Subject</option>
                                {subjects?.length > 0 ? (
                                    subjects.map((subject) => (
                                        <option key={subject.id} value={subject.id}>
                                            {subject.name}
                                        </option>
                                    ))
                                ) : (
                                    <option disabled>No subjects available</option>
                                )}
                            </select>
                        </div>
                    </div>

                    <div className="text-end">
                        <button 
                            type="submit" 
                            className="btn btn-sm btn-primary"
                            disabled={processing}
                        >
                            {processing ? (
                                <>
                                    <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                    Assigning...
                                </>
                            ) : (
                                <>
                                    <i className="fas fa-link me-2"></i>
                                    Assign
                                </>
                            )}
                        </button>
                    </div>
                </form>
            </div>

            <CreateSchedule sections={sections}/>
            </>
    )
}