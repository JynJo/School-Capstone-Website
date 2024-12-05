import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Form, Image } from "react-bootstrap";
import { useForm, Link } from "@inertiajs/react";
import StudentLayout from './StudentLayout.jsx';

const Index = ({ student }) => {
    const [editable, setEditable] = useState(false);
    const { post } = useForm();

    const logoutHandler = () => {
        post(route("user.logout"));
    };

    return (
        <>

    <h4 className="text-md font-medium leading-3">Assigned Assignments</h4>
        </>
    );
};

Index.layout = page => <StudentLayout children={page} />;
export default Index;
