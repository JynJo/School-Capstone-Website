import DashboardLayout from "../DashboardLayout.jsx";
import { useForm } from "@inertiajs/react";

export default function TeacherCreate() {
    const { data, setData, post, errors, processing } = useForm({
        email: "",
        name: "",
        password: "",
        address: "",
        gender: "",
        phone_number: "",
        birthday: "",
        password_confirmation: "",
    });

    const submitHandler = (e) => {
        e.preventDefault();

        post(route("teacher.store"));
    };

    return (
        <>
            <div className="">
                <div className="mx-auto">
                    <div className="bg-white p-6">
                        <h1 className="text-lg font-semibold text-gray-900">
                            Teacher Personal Information
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
                            </div>

                            <div className="mb-4"></div>
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
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
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
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
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
                                        value={data.phone_number}
                                        onChange={(e) =>
                                            setData(
                                                "phone_number",
                                                e.target.value
                                            )
                                        }
                                        placeholder="Phone number"
                                        className="border p-2 rounded w-full"
                                    />
                                    {errors.phone_number && (
                                        <p className="text-danger text-sm ">
                                            {errors.phone_number}
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
                                {processing ? "Saving..." : "Save"}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
TeacherCreate.layout = (page) => <DashboardLayout children={page} />;
