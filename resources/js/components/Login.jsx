import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
function Login() {
    const navigate = useNavigate();
    return (
        <>
            <div class="login-div">
                <Container className="w-50">
                    <Card className="p-3">
                        <Card.Header className="text-center">
                            <h2>Login</h2>
                        </Card.Header>
                        <Form>
                            <Form.Group
                                className="mb-3"
                                controlId="formBasicEmail"
                            >
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    title="email input its not valid, should include @ and .domain "
                                    autoFocus
                                    required
                                    placeholder="example@email.com.us"
                                    maxLength={"100"}
                                />
                                <Form.Text className="text-muted"></Form.Text>
                            </Form.Group>

                            <Form.Group
                                className="mb-3"
                                controlId="formBasicPassword"
                            >
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    title="Wrong password, try again"
                                    type="password"
                                    placeholder="Password"
                                    maxLength={"20"}
                                    required
                                />
                            </Form.Group>
                            <Button
                            className="d-block my-2 mx-auto"
                                variant="primary"
                                as={Link}
                                to="/ProyectoFinal/public/"
                            >
                                Login
                            </Button>
                        </Form>
                    </Card>
                </Container>
            </div>
        </>
    );
}

export default Login;
