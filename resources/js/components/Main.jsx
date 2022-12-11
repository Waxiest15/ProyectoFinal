import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import CardGroup from "react-bootstrap/CardGroup";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import Data from "./JSONs/carrousel.json";

import AliceCarousel, { AnimationType } from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import "/xampp/htdocs/ProyectoFinal/resources/css/app.css";
import { Button } from "react-bootstrap";

const handleDragStart = (e) => e.preventDefault();

const items = Data.map((src) => (
    <img
        style={{ maxWidth: "250px", height: "100%" }}
        src={"images/Carrousel/" + src.img}
        onDragStart={handleDragStart}
        role="presentation"
    />
));

const Gallery = () => {
    return (
        <AliceCarousel
            animationDuration={1500}
            autoWidth={true}
            autoHeight={true}
            mouseTracking
            disableDotsControls={true}
            autoPlay={true}
            infinite={true}
            items={items}
        />
    );
};

function carousel() {
    let navigate = useNavigate();
    const navigateTo = (url) => {
        let path = url;
        navigate("/" + url);
    };

    return (
        <>
            <div class="main">
                <Carousel>
                    <Carousel.Item interval={1000}>
                        <img
                            className="d-block w-100"
                            src="images/comida.jfif"
                            alt="First slide"
                            class="img-carrousel"
                        />
                        <Carousel.Caption>
                            <p>
                                Nulla vitae elit libero, a pharetra augue mollis
                                interdum.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={1000}>
                        <img
                            className="d-block w-100"
                            src="images/perrosPanoramica.png"
                            alt="Second slide"
                            class="img-carrousel"
                        />
                        <Carousel.Caption>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="images/perrosPanoramica_1.png"
                            alt="Third slide"
                            class="img-carrousel"
                        />
                        <Carousel.Caption>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque
                                nisl consectetur.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                <br />
                <h4>Available brands</h4>
                <Container>
                    <Gallery />
                </Container>

                <CardGroup xs sm lg>
                    <Card>
                        <Card.Img
                            variant="top"
                            src="images/collar.jpg"
                            className="w-100 mx-auto"
                        />
                        <Card.Body>
                            <Card.Title>Collar rosa para perro</Card.Title>
                            <Card.Text>
                                Collar decorativo para mascota, color rosa y con
                                sincho para asegurar que no se suelte
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">
                                Last updated 3 mins ago
                            </small>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img
                            variant="top"
                            src="images/comerLento.jpg"
                            className="w-100 mx-auto"
                        />
                        <Card.Body>
                            <Card.Title>Tazon antiestres</Card.Title>
                            <Card.Text>
                                Tazon diseñado para hacer comer al animal mas
                                despacio, ayudando a su nutricion y absorver los
                                nutrimentos de forma adecuada{" "}
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">
                                Last updated 3 mins ago
                            </small>
                        </Card.Footer>
                    </Card>

                    <Card
                        as={Link}
                        to="producto"
                        style={{ textDecoration: "none", color: "black" }}
                    >
                        <Card.Img
                            variant="top"
                            src="images/hulerojo.jpg"
                            className="w-100 mx-auto "
                        />
                        <Card.Body>
                            <Card.Title>
                                Bola de juguete de goma extradura
                            </Card.Title>
                            <Card.Text>
                                Pelota de juguete de goma roja ultraresistente
                                para uso duradero sin desgaste, hecho de
                                material no toxico
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">
                                Last updated 3 mins ago
                            </small>
                        </Card.Footer>
                    </Card>
                </CardGroup>
            </div>
        </>
    );
}

export default carousel;
