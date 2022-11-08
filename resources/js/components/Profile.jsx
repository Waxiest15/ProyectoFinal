import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';

import "/xampp/htdocs/ProyectoFinal/resources/css/app.css"

function ProfileCard() {
  return (
    <div class="div_card-profile">
        <Container>
        <Card style={{ width: '18rem' }}>
      <Card.Img  src="images/default-person.jpg" />
      <Card.Body>
        <Card.Title>Nombre Completo</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
    </Container>
    </div>
  );
}

export default ProfileCard;