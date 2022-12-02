import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';

function AboutUs() {
  return (
    <Container className='p-5'>
        <Card className='mx-auto w-100'>
      <Card.Body>
        <Card.Title>PetWeb</Card.Title>
        <Card.Subtitle className="mb-2">Mision</Card.Subtitle>
        <Card.Text style={{textAlign: 'justify'}}>
        Ofrecer un servicio de atención de mascotas, y que deseen consentir y cuidarlos a los compañeros de una manera segura y confiable,
         brindando atención especializada en tareas, como el aseo, o caminatas cuando los propietarios estén ocupados.
        </Card.Text>

        <Card.Subtitle className="mb-2">Vision</Card.Subtitle>
        <Card.Text style={{textAlign: 'justify'}}>
        Hacer crecer a la compañía, aumentar los servicios y su variedad, además de mejorar su potencia y calidad, abarcar nuestro servicio de 
        atención a nuevos grupos de animales, como lo son aves, exótico y acuáticos, territorialmente llevar la idea PetWeb más allá de la ciudad 
        de Aguascalientes.
        </Card.Text>

        <Container >
        <Image src='images/PetWeb_Logo.png'
        className='d-block mx-auto'
        />
        </Container>


      </Card.Body>
    </Card>
    </Container>
  );
}

export default AboutUs;