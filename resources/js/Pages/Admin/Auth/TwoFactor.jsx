import React, { useState } from 'react';
import { Form, Button, Alert, Container, Row, Col } from 'react-bootstrap';
import { useForm } from '@inertiajs/react';

const TwoFactor = () => {
    const { data, setData, post, processing, errors } = useForm({
        two_factor_code: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        post(route('2fa.store'));
    };

    return (
        <Container className="d-flex justify-content-center align-items-center min-vh-100">
            <Row>
                <Col md={12}>
                    <div className="text-center mb-4">
                        <h1 className="text-primary">Two-Factor Authentication</h1>
                        <p>Please enter the 6-digit code sent to your email or authenticator app.</p>
                    </div>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="code" className="mb-3">
                            <Form.Label>Authentication Code</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter 6-digit code"
                                value={data.two_factor_code}
                                onChange={(e) => setData('two_factor_code', e.target.value)}
                                isInvalid={!!errors.two_factor_code}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.two_factor_code}
                            </Form.Control.Feedback>
                        </Form.Group>

                        {errors.two_factor_code && (
                            <Alert variant="danger">{errors.two_factor_code}</Alert>
                        )}

                        <Button variant="primary" type="submit" className="w-100" disabled={processing}>
                            Verify Code
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default TwoFactor;