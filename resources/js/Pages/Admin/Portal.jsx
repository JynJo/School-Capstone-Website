import { Modal, Button, Form } from "react-bootstrap";
import { useForm } from "@inertiajs/react";

export default function AdminPortalModal({ show, onHide }) {
    const { post, data, setData, errors, processing} = useForm({
        pin: "",
    });

    const submitHandler = (e) => {
        e.preventDefault();
        post(route("admin.login"), {
            onSuccess: () => onHide()
        });
    };

    return (
        <Modal show={show} onHide={onHide} centered>
            <Modal.Header closeButton className="border-0">
                <Modal.Title className="text-center w-100">
                    <img 
                        src="/images/lc-seal.png" 
                        alt="Lourdes College Seal" 
                        className="mx-auto d-block mb-2"
                        style={{ height: '60px' }}
                    />
                    <h5 style={{ fontFamily: 'Faculty Glyphic', fontWeight: 'bold' }}>
                        Administrator Portal
                    </h5>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={submitHandler}>
                    <Form.Group className="mb-3">
                        <Form.Control
                            type="password"
                            placeholder="Enter PIN"
                            value={data.pin}
                            onChange={(e) => setData('pin', e.target.value)}
                            className="py-2"
                            isInvalid={!!errors.pin}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.pin}
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Button 
                        type="submit" 
                        variant="danger"
                        className="w-100 py-2 btn-sm"
                        disabled={processing}
                    >
                        {processing ? 'Logging in...' : 'Login'}
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
    );
}