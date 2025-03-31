import { useForm } from '@inertiajs/react'

export default function CreateSchedule({ sections }) {
    const { data, setData, post, errors, processing } = useForm({
        section_id: '',
        image: null
    });

    const uploadSchedule = (e) => {
        e.preventDefault();
        post(route('schedule.store'), {
            forceFormData: true
        });
    }

    return (
        <div className="bg-white mt-4">
            <h2 className="h4 font-weight-bold mb-4">
                <i className="fas fa-calendar-alt mr-2"></i> Upload Class Schedule
            </h2>

            {/* Error Messages */}
            {(errors.section_id || errors.image) && (
                <div className="alert alert-danger alert-dismissible fade show mb-4">
                    <strong><i className="fas fa-exclamation-circle mr-2"></i>Validation Error!</strong>
                    <ul className="mb-0 mt-2">
                        {errors.section_id && <li>{errors.section_id}</li>}
                        {errors.image && <li>{errors.image}</li>}
                    </ul>
                </div>
            )}

            <form onSubmit={uploadSchedule}>
                <div className="row">
                    <div className="col-md-6 mb-3">
                        <label className="form-label">Section</label>
                        <select
                            value={data.section_id}
                            onChange={e => setData('section_id', e.target.value)}
                            className={`form-control form-select ${errors.section_id ? 'is-invalid' : ''}`}
                            required
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
                        <label className="form-label">Schedule Image</label>
                        <div className="input-group">
                            <input 
                                type="file" 
                                onChange={e => setData('image', e.target.files[0])} 
                                className={`form-control ${errors.image ? 'is-invalid' : ''}`}
                                accept="image/*"
                                required
                            />
                        </div>
                        <small className="text-muted">Accepted formats: JPG, PNG</small>
                    </div>
                </div>

                <div className="text-end">
                    <button 
                        type="submit" 
                        className="btn btn-primary btn-sm"
                        disabled={processing}
                    >
                        {processing ? (
                            <>
                                <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                Uploading...
                            </>
                        ) : (
                            <>
                                <i className="fas fa-upload me-2"></i>{" "}Upload Schedule
                            </>
                        )}
                    </button>
                </div>
            </form>
        </div>
    )
}