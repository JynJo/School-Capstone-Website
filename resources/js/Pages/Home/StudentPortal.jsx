import { useForm } from "@inertiajs/react";
import { Form, Button, Container } from "react-bootstrap";
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
            <div
                style={{
                    backgroundImage: "linear-gradient(rgba(228, 27, 112, 0.7), rgba(228, 27, 112, 0.7)), url('/images/lc-bg.png')", // Pink overlay with background image
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    minHeight: "100vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Container
                    className="bg-white p-4 rounded shadow"
                    style={{
                        maxWidth: "400px",
                    }}
                >
                    <div className="text-center mb-4">
                        <img
                            src="/images/lc-seal.png"
                            alt="Logo"
                            style={{ width: "80px", marginBottom: "10px" }}
                        />
                        <h2
                            className="font-bold mb-2"
                            style={{
                                fontFamily: "Parisienne, cursive",
                                fontSize: "1.8rem",
                                fontWeight: "bold",
                                color: "#E41B70",
                            }}
                        >
                            Lourdes College
                        </h2>
                        <p className="text-muted" style={{fontFamily: 'Raleway'}}>Student Portal</p>
                    </div>

                    {/* Form */}
                    <Form onSubmit={submitHandler} className="w-100">
                        <Form.Group className="mb-3">
                            <Form.Label className="text-muted">
                                Student ID Number
                            </Form.Label>
                            <Form.Control
                                id="id_number"
                                type="text"
                                placeholder="Ex. S23-****"
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
                        <Form.Group className="mb-3">
                            <Form.Label className="text-muted">
                                Password
                            </Form.Label>
                            <Form.Control
                                id="password"
                                type="password"
                                placeholder="Enter password"
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
                            className="w-100"
                            disabled={processing}
                            style={{ fontFamily: "Raleway, sans-serif" }}
                        >
                            {processing ? "Logging in..." : "Log In"}
                        </Button>
                    </Form>
                </Container>
            </div>
        </>
    );
}

export default Portal;
