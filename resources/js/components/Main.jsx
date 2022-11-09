import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';

import "/xampp/htdocs/ProyectoFinal/resources/css/app.css"

function carousel() {
  return (
    <>
    
    <div class="main">
        <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="images/Carrusel_1.jfif"
          alt="First slide"
          class="img-carrousel"
        />
        <Carousel.Caption>
          <h3>primera</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="images/Carrusel_2.jfif"
          alt="Second slide"
          class="img-carrousel"
        />
        <Carousel.Caption>
          <h3>Segunda pantalla</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/Carrusel_3.jpg"
          alt="Third slide"
          class="img-carrousel"
        />
        <Carousel.Caption>
          <h3>Tercera pantalla</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <br />
    <CardGroup>
      <Card>
        <Card.Img variant="top" src="images/collar.jpg" class="img-main-products" />
        <Card.Body>
          <Card.Title>Collar rosa para perro</Card.Title>
          <Card.Text>
            Collar decorativo para mascota, color rosa y con sincho para asegurar que no se suelte
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="images/comerLento.jpg" class="img-main-products"/>
        <Card.Body>
          <Card.Title>Tazon antiestres</Card.Title>
          <Card.Text>
            Tazon diseñado para hacer comer al animal mas despacio, ayudando a su nutricion y absorver los nutrimentos de forma adecuada{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img  variant="top" src="images/hulerojo.jpg" class="img-main-products"/>
        <Card.Body>
          <Card.Title>Bola de juguete de goma extradura</Card.Title>
          <Card.Text>
            Pelota de juguete de goma roja ultraresistente para uso duradero sin desgaste, hecho de material no toxico
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
    </div>
    </>
  );
}

export default carousel;