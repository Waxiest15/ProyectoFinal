import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Row, Col, Image, Form } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import Data from './JSONs/comments.json'

import { Container } from 'react-bootstrap';

function Comments() {
  return (
    <>
      {Data.map((comment) => (
        <Card
          className="mx-auto w-75 mb-2"
        >
          
          <Card.Body>
            <Card.Text>
              <Row>
                <Col>
                <p class='mb-1'>
              <strong>{comment.user}</strong>
              </p>
                </Col>
                <Col className='d-block ms-auto text-end'>
                <p class='text-muted'>{comment.date}</p>
                </Col>
              </Row>
              <p>
                {comment.rate}/5
              </p>
              {comment.comment}
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
    </>
  );
}


function BasicExample() {
  return (
    <Container className='m-3'>
    <Card className='p-3 gap-3'>
    <Row>
        <Col xs={9}>
        <Image 
          className='d-block mx-auto'
          src='images/hulerojo.jpg'
        />
        </Col>
        <Col className='rounded border me-3 p-3'>
        <Card.Text>Nombre</Card.Text>
        <Card.Text>Rate: </Card.Text>
        <Card.Text>Precio: </Card.Text>
        <Card.Text>Tiempo de llegada</Card.Text>
        <Card.Text>Stock: </Card.Text>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col>
        <Card.Text>Caracterisitcas</Card.Text>
        <Container className='border w-50 d-block ms-0'>
        <ListGroup comment="flush">
        <ListGroup.Item>Marca:</ListGroup.Item>
        <ListGroup.Item>Modelo: </ListGroup.Item>
        <ListGroup.Item>Tamaño:</ListGroup.Item>
        <ListGroup.Item>Peso:</ListGroup.Item>
      </ListGroup>
        </Container>
      <Card.Text>Descripcion:</Card.Text>
      <Form.Control
      readOnly
      as='textarea'
      rows={7}
      />
        </Col>
      </Row>

      <Container>
      <h3>Comentarios</h3>
      <Comments></Comments>
    </Container>
    </Card>
    
    </Container>
  );
}

export default BasicExample;