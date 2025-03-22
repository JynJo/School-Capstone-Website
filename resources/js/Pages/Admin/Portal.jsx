import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { Link, useForm, Head } from "@inertiajs/react";

function Portal({ error }) {
    const { post, data, setData, errors } = useForm({
        pin: "",
    });

    const submitHandler = (e) => {
        e.preventDefault();
        post(route("admin.login"));
    };

    return (
        <>
            <Head title="Admin Portal" />
            <div className="flex flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img
                        alt="Your Company"
                        src="/images/lc-seal.png"
                        className="mx-auto h-20 w-auto"
                    />
                    <h2
                        className="text-center text-2xl/9 font-bold tracking-wider text-pink-900 mt-2"
                        style={{ fontFamily: ' "Faculty Glyphic"' }}
                    >
                        LC: Administrator Portal
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form onSubmit={submitHandler}>
                        <div className="my-2">
                            <input
                                id="id_number"
                                name="id_number"
                                type="password"
                                placeholder="Enter PIN"
                                value={data.pin}
                                onChange={(e) => 
                                    setData('pin', e.target.value)
                                }
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-pink-600 sm:text-sm/6"
                                />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-pink-600 p-1.5 text-white rounded-sm shadow"
                        >
                            Login
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Portal;
