import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Card } from "react-bootstrap";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import { maxHeight } from "@mui/system";

function getToday() {
    var today = new Date();
    var diaHoy = today.getDate();
    if (diaHoy.toString().length <= 1) diaHoy = "0" + diaHoy;

    var date =
        today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + diaHoy; //'2022-12-03'
    var hoy = document.getElementById("fechaHoy");
    hoy.min = date;
}

function Paseo() {
    return (
        <Container className="m-5 p-3">
            <Card className="p-3 w-75 mx-auto">
                <Card.Header className="text-center">
                    <h2>Take a walk</h2>
                </Card.Header>
                <Form>
                    <Form.Group>
                        <Form.Label>Choose your pets</Form.Label>
                        <Form.Select aria-label="">
                            <option>My pets</option>
                            <option value="1">One</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="fechaHoy">
                        <Form.Label>Choose a date</Form.Label>

                        <Form.Control
                            type="date"
                            onSelect={getToday}
                            required
                        />
                        <Form.Text className="text-muted"></Form.Text>
                    </Form.Group>
                    <Container className="p-0">
                        <Button variant="primary" type="submit" className="">
                            Reserve
                        </Button>
                    </Container>
                </Form>
                <Form.Label className="mt-5 text-center">
                    <h5>Other options</h5>
                </Form.Label>

                <Carousel className="bg-light w-75 mx-auto">
                    <Carousel.Item
                        interval={1000}
                        style={{ cursor: "pointer" }}
                        onClick={(e) => {
                            window.location.href =
                                "https://www.rover.com/es/paseador-de-perros/";
                        }}
                    >
                        <img
                            style={{ height: "300px" }}
                            className="d-block mx-auto"
                            src="images/rover.png"
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item
                        interval={1000}
                        style={{ cursor: "pointer" }}
                        onClick={(e) => {
                            window.location.href = "https://www.paseaperros.mx";
                        }}
                    >
                        <img
                            style={{ height: "300px" }}
                            className="d-block mx-auto"
                            src="images/paseaperros-logo-texto.png"
                            alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item
                        style={{ cursor: "pointer" }}
                        onClick={(e) => {
                            window.location.href =
                                "https://www.cuidamimascota.com.mx";
                        }}
                    >
                        <img
                            style={{ height: "300px" }}
                            className="d-block mx-auto"
                            src="images/cuidamimascota.jpg"
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </Card>
        </Container>
    );
}

export default Paseo;
