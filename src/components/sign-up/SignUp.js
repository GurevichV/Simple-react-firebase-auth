import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert, Button } from "react-bootstrap";
import { useUserAuth } from "../../context/UserAuthContext";


const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const { signUp } = useUserAuth();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');
        signUp(email, password)
            .then(() => {
                navigate('/login')
            }).catch((err) => { setError(err.message); })

    };


    return (
        <>
            <div className="p-4 box">
                <h1 className="mb-3">Sign Up</h1>
                {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control
                            type="email"
                            name="email"
                            placeholder="Email"
                            onChange={(e) => setEmail(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control
                            type="password"
                            name="password"
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)} />
                    </Form.Group>
                    <div className="d-grid gap-2">
                        <Button variant="primary" type="Submit">
                            Sign up
                        </Button>
                    </div>
                </Form>
            </div>
            <div className="p-4 box mt-3 text-center">
                Already have an account? <Link to="/login">Log In</Link>
            </div>
        </>
    );
};

export default SignUp;