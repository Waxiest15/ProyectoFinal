import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { useState } from "react";

function getToday() {
    var today = new Date();
    var diaHoy = today.getDate();
    if (diaHoy.toString().length <= 1) diaHoy = "0" + diaHoy;
    var date =
        today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + diaHoy; //'2022-12-03'
    var dateTime = date;

    var hoy = document.getElementById("birthDate");

    hoy.max = date;
}

function confirmPassword() {
    let pssw;
    let psswC;

    pssw = document.getElementById("password").value;
    psswC = document.getElementById("confirmPassword").value;

    console.log("password: ", pssw);
    console.log("password Confirm: ", psswC);

    if (pssw != psswC) {
        document.getElementById("btn_submit").disabled = true;
        console.log("No son iguales");
    } else {
        document.getElementById("btn_submit").disabled = false;
    }
}

function Signin() {
    const [name, setName] = useState();

    return (
        <Container className="w-50">
            <Card className="m-3 p-3">
                <Card.Header className="text-center">
                    <h1>Sign in</h1>
                </Card.Header>
                <Form>
                    <Form.Group className="mb-3" controlId="name">
                        <Form.Label>Name(s)</Form.Label>
                        <Form.Control
                            title="Only [a-z] or [A-Z] characters are allowed"
                            name="name"
                            type="text"
                            maxLength={"100"}
                            pattern="[A-Za-z ]{1,100}"
                            placeholder="Type your name(s)"
                            required
                        />
                    </Form.Group>
                    <Row>
                        <Col>
                            <Form.Group className="mb-3" controlId="last_name">
                                <Form.Label>Last name</Form.Label>
                                <Form.Control
                                    title="Only [a-z] or [A-Z] characters are allowed"
                                    name="last_name"
                                    type="text"
                                    placeholder="Last name"
                                    maxLength={"100"}
                                    pattern="[A-Za-z ]{1,100}"
                                    required
                                />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId="last_name2">
                                <Form.Label>Middle name?</Form.Label>
                                <Form.Control
                                    title="Only [a-z] or [A-Z] characters are allowed"
                                    name="last_name2"
                                    type="text"
                                    placeholder="Last name 2?"
                                    maxLength={"100"}
                                    pattern="[A-Za-z ]{1,100}"
                                    required
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Form.Group className="mb-3" controlId="birthDate">
                        <Form.Label>Birth Date</Form.Label>
                        <Form.Control
                            onSelect={getToday}
                            name="birth"
                            type="date"
                            required
                        />
                    </Form.Group>

                    <Form.Group controlId="gender" required>
                        <Form.Label>Gender</Form.Label>
                        <Form.Check
                            name="genderCheck"
                            value="Male"
                            type="radio"
                            aria-label="radio 1"
                            label="Male"
                        />
                        <Form.Check
                            name="genderCheck"
                            value="Female"
                            type="radio"
                            aria-label="radio 2"
                            label="Female"
                        />
                        <Form.Check
                            name="genderCheck"
                            value="Other"
                            type="radio"
                            aria-label="radio 2"
                            label="Other"
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            title="wrong email address, make sure you are including @ and a domain"
                            name="email"
                            type="email"
                            placeholder="example@mail.com"
                            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                            maxLength={100}
                            required
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="password">
                        <Form.Label>Passoword</Form.Label>
                        <Form.Control
                        title="Invalid password,  must have at least 8 characters and include Capitals and lowercase ans especial characters (#?!@$%^&*-\]\[])"
                            onChange={confirmPassword}
                            type="password"
                            pattern="(?=.*?[#?!@$%^&*-\]\[]){8,20}"
                            name="password"
                            placeholder="Password"
                            required
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="confirmPassword">
                        <Form.Label>Confirm password</Form.Label>
                        <Form.Control
                        title="Password and Confirm password must match, try again"
                            onChange={confirmPassword}
                            name="Confirmpassword"
                            type="password"
                            pattern="(?=.*?[#?!@$%^&*-\]\[]){8,20}"
                            placeholder="Write it again"
                            required
                        />
                    </Form.Group>

                    <Button
                    className=""
                        id="btn_submit"
                        variant="primary"
                        as={Link}
                        to="/ProyectoFinal/public/"
                    >
                        Submit
                    </Button>
                </Form>
            </Card>
        </Container>
    );
}

export default Signin;
