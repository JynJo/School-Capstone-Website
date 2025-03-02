import DashboardLayout from "../DashboardLayout.jsx";
import { useForm, Link } from "@inertiajs/react";

export default function StudentEdit({ student, sections }) {
    const { data, setData, put, errors, processing } = useForm({
        email: student.email,
        name: student.name,
        password: "",
        password_confirmation: "",
        id_number: student.id_number,
        section_id: student.section_id,
        blood_type: student.blood_type,
        address: student.address,
        gender: student.gender,
        parent_no: student.parent_no,
        birthday: student.birthday,
    });

    const submitHandler = (e) => {
        e.preventDefault();

        put(route("student.update", { id: student.id }));
    };

    return (
        <>
            {console.log(student)}
            <div className="">
                <div className="mx-auto">
                    <div className="bg-white p-6">
                        <h1 className="text-lg font-semibold text-gray-900">
                            Update Information
                        </h1>
                        <p className="text-gray-500  mb-6 text-sm">
                            Please use student's lccdo account for email
                            address.
                        </p>
                        <form onSubmit={submitHandler}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                <div>
                                    <input
                                        type="text"
                                        value={data.name}
                                        onChange={(e) =>
                                            setData("name", e.target.value)
                                        }
                                        placeholder="Full name"
                                        className="border p-2 rounded w-full"
                                    />
                                    {errors.name && (
                                        <p className="text-danger text-sm ">
                                            {errors.name}
                                        </p>
                                    )}
                                </div>
                                <div>
                                    <input
                                        type="text"
                                        value={data.id_number}
                                        onChange={(e) =>
                                            setData("id_number", e.target.value)
                                        }
                                        placeholder="ID number"
                                        className="border p-2 rounded w-full"
                                    />
                                    {errors.id_number && (
                                        <p className="text-danger text-sm ">
                                            {errors.id_number}
                                        </p>
                                    )}
                                </div>
                            </div>
                            <div className="mb-4">
                                <input
                                    type="email"
                                    value={data.email}
                                    onChange={(e) =>
                                        setData("email", e.target.value)
                                    }
                                    placeholder="Email address"
                                    className="border p-2 rounded w-full"
                                />
                                {errors.email && (
                                    <p className="text-danger text-sm ">
                                        {errors.email}
                                    </p>
                                )}
                            </div>

                            <div className="mb-4">
                                <select
                                    value={data.section_id}
                                    onChange={(e) =>
                                        setData("section_id", e.target.value)
                                    }
                                    className="border p-2 rounded w-full"
                                >
                                    <option hidden>Select Section</option>
                                    {sections.length > 0 ? (
                                        sections.map((section) => (
                                            <option value={section.id}>
                                                {section.name}
                                            </option>
                                        ))
                                    ) : (
                                        <option disabled>
                                            ---No section available---
                                        </option>
                                    )}
                                </select>
                                {errors.section_id && (
                                    <p className="text-danger text-sm ">
                                        {errors.section_id}
                                    </p>
                                )}
                            </div>
                            <div className="mb-4">
                                <input
                                    type="text"
                                    value={data.address}
                                    onChange={(e) =>
                                        setData("address", e.target.value)
                                    }
                                    placeholder="Address"
                                    className="border p-2 rounded w-full"
                                />
                                {errors.address && (
                                    <p className="text-danger text-sm ">
                                        {errors.address}
                                    </p>
                                )}
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                                <div>
                                    <select
                                        value={data.blood_type}
                                        onChange={(e) =>
                                            setData(
                                                "blood_type",
                                                e.target.value
                                            )
                                        }
                                        className="border p-2 rounded w-full"
                                    >
                                        <option value="" hidden>
                                            Select Blood Type
                                        </option>
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
                                        <p className="text-danger text-sm ">
                                            {errors.blood_type}
                                        </p>
                                    )}
                                </div>
                                <div>
                                    <select
                                        value={data.gender}
                                        onChange={(e) =>
                                            setData("gender", e.target.value)
                                        }
                                        className="border p-2 rounded w-full"
                                    >
                                        <option value="" hidden>
                                            Gender
                                        </option>
                                        <option value="O+">Male</option>
                                        <option value="O-">Female</option>
                                    </select>
                                    {errors.gender && (
                                        <p className="text-danger text-sm ">
                                            {errors.gender}
                                        </p>
                                    )}
                                </div>

                                <div>
                                    <input
                                        type="number"
                                        value={data.parent_no}
                                        onChange={(e) =>
                                            setData("parent_no", e.target.value)
                                        }
                                        placeholder="Parent's phone number"
                                        className="border p-2 rounded w-full"
                                    />
                                    {errors.parent_no && (
                                        <p className="text-danger text-sm ">
                                            {errors.parent_no}
                                        </p>
                                    )}
                                </div>

                                <div>
                                    <label htmlFor="birthday">Birthday</label>
                                    <input
                                        type="date"
                                        value={data.birthday}
                                        onChange={(e) =>
                                            setData("birthday", e.target.value)
                                        }
                                        placeholder="Birthday"
                                        id="birthday"
                                        className="border p-2 rounded w-full"
                                    />
                                    {errors.birthday && (
                                        <p className="text-danger text-sm ">
                                            {errors.birthday}
                                        </p>
                                    )}
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                <input
                                    type="text"
                                    value={data.password}
                                    onChange={(e) =>
                                        setData("password", e.target.value)
                                    }
                                    placeholder="Password"
                                    className="border p-2 rounded w-full"
                                />
                                <input
                                    type="text"
                                    value={data.password_confirmation}
                                    onChange={(e) =>
                                        setData(
                                            "password_confirmation",
                                            e.target.value
                                        )
                                    }
                                    placeholder="Confirm password"
                                    className="border p-2 rounded w-full"
                                />
                                {errors.password && (
                                    <p className="text-danger text-sm ">
                                        {errors.password}
                                    </p>
                                )}
                            </div>

                            <button
                                type="submit"
                                id="theme-toggle"
                                disabled={processing}
                                className="py-2 px-4 text-md rounded bg-slate-800 text-white hover:bg-slate-900 focus:outline-none"
                            >
                                {processing ? "Updating..." : "Save Changes"}
                            </button>
                            <Link
                                href={route("student.index")}
                                className="py-2 mx-2 px-4 text-md rounded bg-red-600 text-white hover:bg-red-700 focus:outline-none"
                            >
                                Cancel
                            </Link>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
StudentEdit.layout = (page) => <DashboardLayout children={page} />;
