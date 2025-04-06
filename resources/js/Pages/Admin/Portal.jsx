import { Modal, Button, Form } from "react-bootstrap";
import { useForm } from "@inertiajs/react";

export default function AdminPortalModal({ show, onHide }) {
    const { post, data, setData, errors, processing } = useForm({
        password: "",
        email: ""
    });

    const submitHandler = (e) => {
        e.preventDefault();
        post(route("admin.login"), {
            onSuccess: () => onHide(),
        });
    };

    return (
        <Modal show={show} onHide={onHide} centered>
            <Modal.Header closeButton className="border-0">
                <Modal.Title style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%" }}>
                    <img
                        src="/images/lc-seal.png"
                        alt="Lourdes College Seal"
                        style={{ height: "60px" }}
                    />
                    <h5 style={{marginLeft: '8px'}}>ADMINISTRATOR PORTAL</h5>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={submitHandler}>

                <Form.Group className="mb-3">
                        <Form.Control
                            type="email"
                            placeholder="Email address"
                            value={data.email}
                            onChange={(e) => setData("email", e.target.value)}
                            className="py-2"
                            isInvalid={!!errors.email}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.email}
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Control
                            type="password"
                            placeholder="Enter password"
                            value={data.password}
                            onChange={(e) => setData("password", e.target.value)}
                            className="py-2"
                            isInvalid={!!errors.password}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.password}
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Button
                        type="submit"
                        variant="primary"
                        className="w-100 py-2 btn-sm"
                        disabled={processing}
                    >
                        {processing ? "Logging in..." : "LOGIN"}
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
    );
}
