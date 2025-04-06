import { useForm } from '@inertiajs/react'
import {
    Container,
    Form,
    Button,
    Alert,
    Card,
} from 'react-bootstrap'
import DashboardLayout from '../DashboardLayout.jsx'

const AccountIndex = () => {
    const {
        data,
        setData,
        put,
        reset,
        processing,
        errors,
        recentlySuccessful
    } = useForm({
        email: '',
        current_password: '',
        password: '',
        password_confirmation: ''
    })

    const updateEmail = (e) => {
        e.preventDefault()
        put(route('admin.email.update'), {
            preserveScroll: true,
            onSuccess: () => reset('email')
        })
    }

    const updatePassword = (e) => {
        e.preventDefault()
        // put(route('admin.password.update'), {
        //     preserveScroll: true,
        //     onSuccess: () => reset('current_password', 'password', 'password_confirmation')
        // })
    }

    return (
        <Container className="py-4">
            <h1 className="mb-4">Account Settings</h1>

            <Card className="mb-5">
                <Card.Header>Update Email</Card.Header>
                <Card.Body>
                    <Form onSubmit={updateEmail}>
                        <Form.Group controlId="email" className="mb-3">
                            <Form.Label>New Email</Form.Label>
                            <Form.Control
                                type="email"
                                value={data.email}
                                onChange={e => setData('email', e.target.value)}
                                isInvalid={!!errors.email}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.email}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Button type="submit" variant='success' disabled={processing}>Save Email</Button>

                        {recentlySuccessful && (
                            <Alert variant="success" className="mt-3">
                                Email updated. Please verify your new email.
                            </Alert>
                        )}
                    </Form>
                </Card.Body>
            </Card>

            <Card>
                <Card.Header>Change Password</Card.Header>
                <Card.Body>
                    <Form onSubmit={updatePassword}>
                        <Form.Group controlId="currentPassword" className="mb-3">
                            <Form.Label>Current Password</Form.Label>
                            <Form.Control
                                type="password"
                                value={data.current_password}
                                onChange={e => setData('current_password', e.target.value)}
                                isInvalid={!!errors.current_password}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.current_password}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="password" className="mb-3">
                            <Form.Label>New Password</Form.Label>
                            <Form.Control
                                type="password"
                                value={data.password}
                                onChange={e => setData('password', e.target.value)}
                                isInvalid={!!errors.password}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.password}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="passwordConfirmation" className="mb-3">
                            <Form.Label>Confirm New Password</Form.Label>
                            <Form.Control
                                type="password"
                                value={data.password_confirmation}
                                onChange={e => setData('password_confirmation', e.target.value)}
                            />
                        </Form.Group>

                        <Button type="submit" variant="success" disabled={processing}>
                            Change Password
                        </Button>

                        {recentlySuccessful && (
                            <Alert variant="success" className="mt-3">
                                Password changed successfully.
                            </Alert>
                        )}
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    )
}

AccountIndex.layout = page => <DashboardLayout children={page} />
export default AccountIndex
