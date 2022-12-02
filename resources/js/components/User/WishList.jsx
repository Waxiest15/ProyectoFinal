import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image'
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';
import Button  from 'react-bootstrap/Button';

function WhisList () {
    return(
    <Container className="m-5">
        <Card className="p-3 w-100">
            <Card.Title>
                Lista de deseados
            </Card.Title>
            <hr />
            <Row className="p-3"> 
                <Col className='p-1 text-center border' >
                    <Image src="images/hulerojo.jpg" style={{maxWidth: "250px", maxHeight: "250px"}}>

                    </Image>
                </Col>
                <Col xs={8}>
                    <Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>Nombre:</ListGroup.Item>
                        <ListGroup.Item>Descripcion:</ListGroup.Item>
                        <ListGroup.Item>Precio:</ListGroup.Item>
                        <ListGroup.Item>Rate:</ListGroup.Item>

                    </ListGroup>
                    </Card.Body>
                </Col>
            </Row>
        </Card>
    </Container>
    );
}

export default WhisList;