import { useForm } from "@inertiajs/react";
import { Form, Button, Container, Alert } from "react-bootstrap";
import { Head } from "@inertiajs/react";

function Portal({ error }) {
    const { post, data, setData, errors, processing } = useForm({
        id_number: "",
        password: ""
    });

    const submitHandler = (e) => {
        e.preventDefault();
        post(route('login'));
    };

    return (
        <>
            <Head title="Student Portal" />
            <Container className="d-flex flex-column justify-content-center align-items-center py-5">
                <div className="text-center mb-4">
                    <img
                        src="/images/lc-seal.png"
                        alt="Lourdes College Seal"
                        className="mx-auto mb-3"
                        style={{ height: '80px' }}
                    />
                    <h2 
                        className="font-bold mb-4" 
                        style={{ fontFamily: 'Faculty Glyphic', fontSize: '1.8rem' }}
                    >
                        LC: Student Grade Portal
                    </h2>
                </div>

                <div className="    " >
                    {/*{errors && <Alert variant="danger">{JSON.stringify(errors)}</Alert>}*/}
                    
                    <Form onSubmit={submitHandler}>
                        <Form.Group className="mb-2">
                            <Form.Control
                                id="id_number"
                                type="text"
                                placeholder="Student ID Number"
                                value={data.id_number}
                                onChange={(e) => setData('id_number', e.target.value)}
                                isInvalid={!!errors.id_number}
                                className="py-3"
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.id_number}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-4">
                            <Form.Control
                                id="password"
                                type="password"
                                placeholder="Password"
                                value={data.password}
                                onChange={(e) => setData('password', e.target.value)}
                                isInvalid={!!errors.password}
                                className="py-3"
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.password}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Button 
                            type="submit" 
                            variant="dark" 
                            className="w-100 py-2"
                            disabled={processing}
                        >
                            {processing ? 'Logging in...' : 'Login'}
                        </Button>
                    </Form>
                </div>
            </Container>
        </>
    );
}

export default Portal;