import DashboardLayout from "../DashboardLayout.jsx";
import { Link, useForm } from "@inertiajs/react";

export default function SectionEdit({ section }) {
    const { data, setData, put, errors, processing } = useForm({
        name: section.name,
    });

    const submitHandler = (e) => {
        e.preventDefault();
        put(route("section.update", { id: section.id }));
    };

    return (
        <>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8 bg-white p-4 rounded shadow-sm mt-4">
                        {errors.name && (
                            <div className="alert alert-danger mb-4">
                                <strong className="font-weight-bold">
                                    Validation Error!
                                </strong>
                                <p className="mb-0 mt-1">{errors.name}</p>
                            </div>
                        )}
                        <h1 className="h5 font-weight-bold text-secondary mb-3">
                            Updating section: {data.name}
                        </h1>
                        <form onSubmit={submitHandler}>
                            <div className="form-group">
                                <input
                                    type="text"
                                    value={data.name}
                                    onChange={(e) =>
                                        setData("name", e.target.value)
                                    }
                                    placeholder="Name"
                                    className={`form-control ${
                                        errors.name ? "is-invalid" : ""
                                    }`}
                                />
                                {errors.name && (
                                    <div className="invalid-feedback">
                                        {errors.name}
                                    </div>
                                )}
                            </div>
                            <button
                                type="submit"
                                disabled={processing}
                                className="btn btn-dark mt-3"
                            >
                                {processing ? (
                                    <>
                                        <span
                                            className="spinner-border spinner-border-sm mr-2"
                                            role="status"
                                            aria-hidden="true"
                                        ></span>
                                        Updating...
                                    </>
                                ) : (
                                    "Save Changes"
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

SectionEdit.layout = (page) => (
    <DashboardLayout children={page} title="Edit student" />
);
