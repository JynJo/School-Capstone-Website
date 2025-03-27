import DashboardLayout from "../DashboardLayout.jsx";
import { useForm } from "@inertiajs/react";

export default function StudentCreate({ sections }) {
    const { data, setData, post, errors, processing } = useForm({
        email: "",
        name: "",
        password: "",
        id_number: "",
        section_id: "",
        blood_type: "",
        address: "",
        gender: "",
        parent_no: "",
        birthday: "",
        password_confirmation: "",
    });

    const submitHandler = (e) => {
        e.preventDefault();
        post(route("student.store"));
    };

    return (
        <div className="container-fluid py-4">
            <div className="card">
                <div className="card-header">
                    <h4 className="card-title">Create New Student</h4>
                </div>
                <div className="card-body">
                    {sections.length > 0 ? (
                        <form onSubmit={submitHandler} className="row g-3">
                            <div className="col-md-6">
                                <label className="form-label">Full Name</label>
                                <input
                                    type="text"
                                    value={data.name}
                                    onChange={(e) => setData("name", e.target.value)}
                                    className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                                    placeholder="Full name"
                                />
                                {errors.name && (
                                    <div className="invalid-feedback">{errors.name}</div>
                                )}
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">ID Number</label>
                                <input
                                    type="text"
                                    value={data.id_number}
                                    onChange={(e) => setData("id_number", e.target.value)}
                                    className={`form-control ${errors.id_number ? 'is-invalid' : ''}`}
                                    placeholder="ID number"
                                />
                                {errors.id_number && (
                                    <div className="invalid-feedback">{errors.id_number}</div>
                                )}
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">Email Address</label>
                                <input
                                    type="email"
                                    value={data.email}
                                    onChange={(e) => setData("email", e.target.value)}
                                    className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                    placeholder="Email address"
                                />
                                {errors.email && (
                                    <div className="invalid-feedback">{errors.email}</div>
                                )}
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">Section</label>
                                <select
                                    value={data.section_id}
                                    onChange={(e) => setData("section_id", e.target.value)}
                                    className={`form-control ${errors.section_id ? 'is-invalid' : ''}`}
                                >
                                    <option value="" hidden>Please select</option>
                                    {sections.map((section) => (
                                        <option key={section.id} value={section.id}>
                                            {section.name}
                                        </option>
                                    ))}
                                </select>
                                {errors.section_id && (
                                    <div className="invalid-feedback">{errors.section_id}</div>
                                )}
                            </div>

                            <div className="col-12">
                                <label className="form-label">Address</label>
                                <input
                                    type="text"
                                    value={data.address}
                                    onChange={(e) => setData("address", e.target.value)}
                                    className={`form-control ${errors.address ? 'is-invalid' : ''}`}
                                    placeholder="Address"
                                />
                                {errors.address && (
                                    <div className="invalid-feedback">{errors.address}</div>
                                )}
                            </div>

                            <div className="col-md-4">
                                <label className="form-label">Blood Type</label>
                                <select
                                    value={data.blood_type}
                                    onChange={(e) => setData("blood_type", e.target.value)}
                                    className={`form-control ${errors.blood_type ? 'is-invalid' : ''}`}
                                >
                                    <option value="" hidden>Please select</option>
                                    <option value="A+">A+</option>
                                    <option value="A-">A-</option>
                                    <option value="B+">B+</option>
                                    <option value="B-">B-</option>
                                    <option value="AB+">AB+</option>
                                    <option value="AB-">AB-</option>
                                    <option value="O+">O+</option>
                                    <option value="O-">O-</option>
                                </select>
                                {errors.blood_type && (
                                    <div className="invalid-feedback">{errors.blood_type}</div>
                                )}
                            </div>

                            <div className="col-md-4">
                                <label className="form-label">Gender</label>
                                <select
                                    value={data.gender}
                                    onChange={(e) => setData("gender", e.target.value)}
                                    className={`form-control ${errors.gender ? 'is-invalid' : ''}`}
                                >
                                    <option value="" hidden>Please select</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>
                                {errors.gender && (
                                    <div className="invalid-feedback">{errors.gender}</div>
                                )}
                            </div>

                            <div className="col-md-4">
                                <label className="form-label">Birthday</label>
                                <input
                                    type="date"
                                    value={data.birthday}
                                    onChange={(e) => setData("birthday", e.target.value)}
                                    className={`form-control ${errors.birthday ? 'is-invalid' : ''}`}
                                />
                                {errors.birthday && (
                                    <div className="invalid-feedback">{errors.birthday}</div>
                                )}
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">Parent's Contact</label>
                                <input
                                    type="tel"
                                    value={data.parent_no}
                                    onChange={(e) => setData("parent_no", e.target.value)}
                                    className={`form-control ${errors.parent_no ? 'is-invalid' : ''}`}
                                    placeholder="Parent's phone number"
                                />
                                {errors.parent_no && (
                                    <div className="invalid-feedback">{errors.parent_no}</div>
                                )}
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">Password</label>
                                <input
                                    type="password"
                                    value={data.password}
                                    onChange={(e) => setData("password", e.target.value)}
                                    className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                                    placeholder="Password"
                                />
                                {errors.password && (
                                    <div className="invalid-feedback">{errors.password}</div>
                                )}
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">Confirm Password</label>
                                <input
                                    type="password"
                                    value={data.password_confirmation}
                                    onChange={(e) => setData("password_confirmation", e.target.value)}
                                    className={`form-control ${errors.password_confirmation ? 'is-invalid' : ''}`}
                                    placeholder="Confirm password"
                                />
                            </div>

                            <div className="col-12 mt-4">
                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                    disabled={processing}
                                >
                                    {processing ? (
                                        <>
                                            <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                            Saving...
                                        </>
                                    ) : (
                                        "Create Student"
                                    )}
                                </button>
                            </div>
                        </form>
                    ) : (
                        <div className="alert alert-danger">
                            <i className="fas fa-exclamation-circle me-2"></i>
                            Please create a section first to continue adding a student.
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

StudentCreate.layout = (page) => <DashboardLayout children={page} />;