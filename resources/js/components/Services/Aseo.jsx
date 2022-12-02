import Container from "react-bootstrap/Container";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Card } from "react-bootstrap";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import { maxHeight } from "@mui/system";

//Asignar valor max al compenente dateTime 


function Aseo() {
  return (
    <Container onLoad={getToday} className='m-5 p-3'>
        <Card className="p-3 w-75 mx-auto">
        <Card.Header className="text-center">
            <h2>Aseo</h2>
        </Card.Header>
        <Form>
        
        <Form.Group>
            <Form.Label>
                Selecciona la mascota para el servicio
            </Form.Label>
            <Form.Select aria-label="">
                <option>Sus mascotas</option>
                <option value="1">One</option>
            </Form.Select>
        </Form.Group>

      <Form.Group className="mb-3" controlId="fechaHoy">
        <Form.Label>Selecciona la fecha</Form.Label>

        <Form.Control type="date"
        />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>
      <Container className="">
      <Button variant="primary" type="submit" className="">
        Agendar
      </Button>
      </Container>
    </Form>
    <Form.Label className='mt-5 text-center'><h5>O pruebe opciones de terceros</h5></Form.Label>

    <Carousel className="bg-light w-100 mx-auto">
      <Carousel.Item interval={1000}
      style={{cursor: 'pointer'}}
      onClick={e=>{window.location.href = 'https://www.rover.com/es/paseador-de-perros/'}}
      >
        <img 
          style={{height: '300px'}}
          className="d-block mx-auto"
          src='images/pulgosos.png'
          alt="First slide"
          
        />
      </Carousel.Item>
      <Carousel.Item interval={1000}
      style={{cursor: 'pointer'}}
      onClick={e=>{window.location.href = 'https://www.paseaperros.mx'}}
      >
        <img
          style={{height: '300px'}}
          className="d-block mx-auto"
          src="images/su-Perro-limpio-logo.png"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item
      style={{cursor: 'pointer'}}
      onClick={e=>{window.location.href = 'https://www.google.com/search?client=opera-gx&sa=X&hl=es-419&sxsrf=ALiCzsZcv_57RHi-hSn452XKIyeVYJzbfA:1669057685349&q=servicio%20aseo%20de%20mascotas&ved=2ahUKEwjTjsez_L_7AhXFIEQIHZj0BTUQvS56BAhZEAE&biw=1239&bih=819&dpr=1&tbs=lf:1,lf_ui:14&tbm=lcl&rflfq=1&num=10&rldimm=1215259844000664420&lqi=ChlzZXJ2aWNpbyBhc2VvIGRlIG1hc2NvdGFzWhsiGXNlcnZpY2lvIGFzZW8gZGUgbWFzY290YXOSAQtwZXRfZ3Jvb21lcpoBI0NoWkRTVWhOTUc5blMwVkpRMEZuU1VSdGNUUlRTbE5uRUFFqgEhEAEqHSIZc2VydmljaW8gYXNlbyBkZSBtYXNjb3RhcygO&rlst=f#rlfi=hd:;si:1215259844000664420,l,ChlzZXJ2aWNpbyBhc2VvIGRlIG1hc2NvdGFzWhsiGXNlcnZpY2lvIGFzZW8gZGUgbWFzY290YXOSAQtwZXRfZ3Jvb21lcpoBI0NoWkRTVWhOTUc5blMwVkpRMEZuU1VSdGNUUlRTbE5uRUFFqgEhEAEqHSIZc2VydmljaW8gYXNlbyBkZSBtYXNjb3RhcygO;mv:[[21.9437501,-102.2446674],[21.8431753,-102.3249651]];tbs:lrf:!1m4!1u3!2m2!3m1!1e1!1m4!1u2!2m2!2m1!1e1!2m1!1e2!2m1!1e3!3sIAE,lf:1,lf_ui:14'}}
      >
        <img
          style={{height: '300px'}}
          className="d-block mx-auto"
          src="images/googleMap.png"
          alt="Second slide"
        />
        <Carousel.Caption className="text-dark bg-light w-25 h-25 mx-auto">Busque opciones cerca de usted</Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>
        </Card>
    </Container>
  );
}

export default Aseo;