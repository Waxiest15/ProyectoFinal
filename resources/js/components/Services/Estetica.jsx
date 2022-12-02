import Container from "react-bootstrap/Container";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Card } from "react-bootstrap";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import { maxHeight } from "@mui/system";


function getToday(){
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var dateTime = date;

    var hoy = document.getElementById('fechaHoy');
    hoy.min=date;
}


function Estetica() {
  return (
    <Container onLoad={getToday} className='m-5 p-3'>
        <Card className="p-3 w-75 mx-auto">
        <Card.Header className="text-center">
            <h2>Estetica</h2>
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

    <Carousel className=" w-75 mx-auto">
      <Carousel.Item interval={1000}
      style={{cursor: 'pointer'}}
      onClick={e=>{window.location.href = 'https://www.rover.com/es/paseador-de-perros/'}}
      >
        <img 
          style={{height: '300px'}}
          className="d-block mx-auto"
          src='images/temazcan.png'
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
          src="images/petco.png"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item
      style={{cursor: 'pointer'}}
      onClick={e=>{window.location.href = 'https://www.google.com/search?client=opera-gx&hs=Qgb&tbs=lf:1,lf_ui:14&tbm=lcl&sxsrf=ALiCzsbBnDPH-8-tKIf5Of8ETe0MSJRIfQ:1669060746333&q=estetica+canina+a+domicilio+aguascalientes&rflfq=1&num=10&ved=2ahUKEwiT6ZLnh8D7AhVRIUQIHQEXCDUQtgN6BAgXEAY#rlfi=hd:;si:;mv:[[21.9446767,-102.24511749999999],[21.8268058,-102.3165595]];tbs:lrf:!1m4!1u3!2m2!3m1!1e1!1m4!1u2!2m2!2m1!1e1!2m1!1e2!2m1!1e3!3sIAE,lf:1,lf_ui:14'}}
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

export default Estetica;