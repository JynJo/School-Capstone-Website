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
        <>
                    <div className="bg-gray-50 p-6">
                        <form onSubmit={submitHandler}>
                            <label>
                                Full Name
                            </label>
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
                                    <label>
                                ID Number
                            </label>
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
                                    <label>
                                Contacts
                            </label>
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
                                <label>
                                Assign to a section
                            </label>
                                <select
                                    value={data.section_id}
                                    onChange={(e) =>
                                        setData("section_id", e.target.value)
                                    }
                                    className="border p-2 rounded w-full"
                                >
                                    <option hidden> Please select</option>
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
                                <label>
                                Address
                            </label>
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
                                <label>
                                Blood Type
                            </label>
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
                                           Please select
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
                                    <label>
                                Gender
                            </label>
                                    <select
                                        value={data.gender}
                                        onChange={(e) =>
                                            setData("gender", e.target.value)
                                        }
                                        className="border p-2 rounded w-full"
                                    >
                                        <option value="" hidden>
                                            Please select
                                        </option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                    </select>
                                    {errors.gender && (
                                        <p className="text-danger text-sm ">
                                            {errors.gender}
                                        </p>
                                    )}
                                    <label>
                                Parent's Contact
                            </label>
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
                                <label>
                                Account password
                            </label>
                                <input
                                    type="text"
                                    value={data.password}
                                    onChange={(e) =>
                                        setData("password", e.target.value)
                                    }
                                    placeholder="Password"
                                    className="border p-2 rounded w-full mb-2"
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

                            <button
                                type="submit"
                                id="theme-toggle"
                                disabled={processing}
                                className="btn btn-primary mt-4"
                            >
                                {processing ? "Saving..." : "Create"}
                            </button>
                        </form>
                    </div>
          </>
    );
}
StudentCreate.layout = (page) => <DashboardLayout children={page} />;
