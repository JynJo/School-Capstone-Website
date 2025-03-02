import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { Link, useForm, Head } from "@inertiajs/react";

function Portal({ error }) {
    const { post, data, setData, errors } = useForm({
        email: "",
        password: "",
    });

    const submitHandler = (e) => {
        e.preventDefault();
        post("/login");
    };

    return (
        <>
            <Head title="Student Portal" />
            <div className="flex justify-center items-center bg-white flex-col  bg-light gap-6 mt-4">
                <div className="flex flex-col items-center">
                    <div className="flex flex-row items-center gap-5">
                        <img
                            src="/images/lc-seal.png"
                            alt="LC SEAL"
                            width="100"
                        />
                        <p
                            className="text-xl font-bold text-pink text-uppercase tracking-wide"
                            style={{ fontFamily: "Faculty Glyphic" }}
                        >
                            Lourdes College
                        </p>
                    </div>
                    <div className="w-full py-0.5 my-2 bg-pink rounded-xl"></div>
                    <p
                        className="text-pink text-lg font-light text-uppercase  tracking-wider"
                        style={{ fontFamily: "Poppins" }}
                    >
                        student portal
                    </p>
                </div>
                <form onSubmit={submitHandler} className="bg-white mt-4 w-1/4">
                    <div className="flex flex-col gap-4">
                        <label
                            htmlFor="email"
                            className="rounded relative block border border-gray-200 focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                        >
                            <input
                                type="text"
                                id="email"
                                value={data.email}
                                onChange={(e) =>
                                    setData("email", e.target.value)
                                }
                                className=" font-light peer p-2 border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                                placeholder="Email"
                            />
                            <span className="font-light pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-md text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
                                Email
                            </span>
                        </label>

                        {/* Password */}

                        <label
                            htmlFor="Username"
                            className="rounded relative block border border-gray-200 focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                        >
                            <input
                                type="text"
                                id="Username"
                                value={data.password}
                                onChange={(e) =>
                                    setData("password", e.target.value)
                                }
                                className="font-light peer p-2 border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                                placeholder="Username"
                            />
                            <span className="font-light pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-md text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
                                Password
                            </span>
                        </label>

                        <button className="cursor-pointer rounded hover:opacity-75 bg-pink p-2 w-full block font-medium text-uppercase">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Portal;
