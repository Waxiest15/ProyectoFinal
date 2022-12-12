import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Image } from "react-bootstrap";
import { useState } from "react";
import { send } from "emailjs-com";

import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import { Textarea } from "react-bootstrap-icons";

const getCoordinates = (event) => {
    setLat(event.latLng.lat());
    setLng(event.latLng.lng());
    console.log("lat: ", event.latLng.lat());
    console.log("lng: ", event.latLng.lng());
};

function Test() {
    const [toSend, setToSend] = useState({
        from_name: "",
        to_name: "PetWeb",
        message: "",
        reply_to: "",
    });

    const onSubmit = (e) => {
        e.preventDefault();
        send("service_xdeuyhm", "template_bjb4bgr", toSend, "_22Q-TAjQCCZvZ5Gg")
            .then((response) => {
                console.log("SUCCESS!", response.status, response.text);
            })
            .catch((err) => {
                console.log("FAILED...", err);
            });
    };

    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
    };

    return (
        <Container className="p-0">
            <Card className="p-3 gap-3 w-75 mx-auto">
                <Card.Header className="text-center">
                    <h1>Distribuitor</h1>
                </Card.Header>
                <Form onSubmit={onSubmit}>
                    <Form.Group>
                        <Form.Label>Enterprise</Form.Label>
                        <Form.Control
                            type="text"
                            name="from_name"
                            placeholder="Who are we talkin with?"
                            value={toSend.from_name}
                            onChange={handleChange}
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Type your message:</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={7}
                            type="text"
                            name="message"
                            placeholder="Why are you contacting with us?"
                            value={toSend.message}
                            onChange={handleChange}
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Your email:</Form.Label>
                        <Form.Control
                            type="email"
                            name="reply_to"
                            placeholder="Where are we going to reply?"
                            value={toSend.reply_to}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Container>
                        <Button
                            type="submit"
                            className="d-block mx-auto mt-3 w-25"
                        >
                            Submit
                        </Button>
                    </Container>
                </Form>
            </Card>
        </Container>
    );
}

function Map() {
    const [lat, setLat] = useState(21.87461477124801);
    const [lng, setLng] = useState(-102.26663330211015);

    function onDrag(e) {
        let lat = e.latLng.lat();
        let lng = e.latLng.lng();

        setLat(lat);
        setLng(lng);

        console.log("position: ", lat + " ", lng);
    }

    // Loads the map using API KEY

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: "AIzaSyAsdXInYMGlY7iKwGOYoy2zuNnOUX9WeHQ",
    });

    if (!isLoaded) return <div>Loading...</div>;
    return (
        <>
            <Container className="border d-flex justify-content-center p-2 rounded">
                <GoogleMap
                    zoom={14}
                    center={{ lat: lat, lng: lng }}
                    mapContainerStyle={{ width: "100%", height: 450 }}
                >
                    <Marker
                        draggable={true}
                        onDragEnd={onDrag}
                        position={{ lat: lat, lng: lng }}
                    ></Marker>
                </GoogleMap>
            </Container>
        </>
    );
}


function MyBussines() {
    const [file, setFile] = useState();
    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }

    const [isValid, setIsValid] = useState(false);

    return (
        <Card className="w-75 ms-auto me-auto p-3">
            <Card.Header className="text-center">
                <h1>My bussiness</h1>
            </Card.Header>
            <Form className="m-3">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Bussiness name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Your bussiness name"
                        name="petName"
                        maxLength={"100"}
                        pattern="[A-Za-z]{1,100}"
                        required
                    />
                </Form.Group>
                <Row>
                    <Col>
                        <Container>
                            <Form.Group>
                                <Form.Label>
                                    Choose a picture from your business
                                </Form.Label>
                                <Form.Control
                                    name="imageBussiness"
                                    type="file"
                                    required
                                    inputProps={{ accept: "image/*" }}
                                    onChange={handleChange}
                                ></Form.Control>
                                <Container>
                                    <img
                                        src={file}
                                        class="w-100"
                                        style={{ maxHeight: "300px" }}
                                    />
                                </Container>
                            </Form.Group>
                        </Container>
                    </Col>
                    <Col>
                        <Form.Group>
                            <Form.Label>
                                Describe what your business provide
                            </Form.Label>
                            <Form.Control
                                name="descripcionNegocio"
                                as="textarea"
                                rows={14}
                                type="text"
                                placeholder="What do you do in your business? do you sell? do you offer any service?"
                                required
                            ></Form.Control>
                        </Form.Group>
                    </Col>
                </Row>
                <hr />
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>
                        Choose the location in your map
                    </Form.Label>
                    <Container className=" text-center">
                        <Map />
                    </Container>
                </Form.Group>
                <Container className="text-center">
                    <Button
                        className="w-25"
                        variant="primary"
                        onClick={getCoordinates}
                    >
                        Submit
                    </Button>
                </Container>
            </Form>
        </Card>
    );
}

function BussinessForm() {
    const [message, setMessage] = useState("");
    const whichMenu = (event) => {
        setMessage(event.target.value);
        console.log("value is:", event.target.value);
    };

    return (
        <>
            <Container className="p-5">
                

                <Test />
            </Container>
        </>
    );
}

export default BussinessForm;
