import { useForm } from "@inertiajs/react";
import { Form, Button, Container, Alert } from "react-bootstrap";
import { Head } from "@inertiajs/react";

function Portal({ error }) {
    const { post, data, setData, errors, processing } = useForm({
        id_number: "",
        password: "",
    });

    const submitHandler = (e) => {
        e.preventDefault();
        post(route("login"));
    };

    return (
        <>
            <Head title="Student Portal" />
            <Container
                className="d-flex flex-column justify-content-center align-items-center"
                style={{
                    minHeight: "100vh", // Full viewport height
                    maxWidth: "300px", // Keep your desired width
                }}
            >
                <div className="text-center mb-4">
                    <h2
                        className="font-bold mb-4"
                        style={{
                            fontFamily: "Parisienne, cursive",
                            fontSize: "1.8rem",
                            fontWeight: 'bold',
                            color: "#E41B70",
                        }}
                    >
                        LC: Student Portal
                    </h2>
                </div>

                {/* Form (now centered) */}
                <Form onSubmit={submitHandler} className="w-100">
                    {" "}
                    {/* Ensure form takes full width of Container */}
                    <Form.Group className="mb-2">
                        <Form.Control
                            id="id_number"
                            type="text"
                            placeholder="Student ID Number"
                            value={data.id_number}
                            onChange={(e) =>
                                setData("id_number", e.target.value)
                            }
                            isInvalid={!!errors.id_number}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.id_number}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-2">
                        <Form.Control
                            id="password"
                            type="password"
                            placeholder="Password"
                            value={data.password}
                            onChange={(e) =>
                                setData("password", e.target.value)
                            }
                            isInvalid={!!errors.password}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.password}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Button
                        type="submit"
                        variant="primary"
                        className="w-100 "
                        disabled={processing}
                    >
                        {processing ? "Logging in..." : "SIGN IN"}
                    </Button>
                </Form>
            </Container>
        </>
    );
}

export default Portal;
