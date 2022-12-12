import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';

function AboutUs() {
  return (
    <Container className='p-5'>
        <Card className='mx-auto w-100'>
      <Card.Body>
        <Card.Title>PetWeb</Card.Title>
        <Card.Subtitle className="mb-2">Mission</Card.Subtitle>
        <Card.Text style={{textAlign: 'justify'}}>
        Offer a pet care service, and who wish to pamper and care for their companions in a safe and reliable way,
         providing specialized attention to tasks, such as grooming, or walks when the owners are busy.
        </Card.Text>

        <Card.Subtitle className="mb-2">Vision</Card.Subtitle>
        <Card.Text style={{textAlign: 'justify'}}>
        Make the company grow, increase the services and their variety, as well as improve their power and quality, cover our service of
         attention to new groups of animals, such as birds, exotic and aquatic, territorially take the PetWeb idea beyond the city
         of Aguascalientes.
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