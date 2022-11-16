import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image'
import ListGroup from 'react-bootstrap/ListGroup';

function ShoppingCart () {
    const test = [
        {
            nombre: "Pelota",
            desc:"pelota roja",
            calf: 5
        }
    ]

    return(
    <Container className="m-5">
        <Card className="p-3">
            <Card.Title>
                Carrito
            </Card.Title>
            <hr />
            <Row className="p-3"> 
                <Col className='p-1 text-center border' >
                    <Image src="images/hulerojo.jpg" style={{maxWidth: "250px", maxHeight: "250px"}}>

                    </Image>
                </Col>
                <Col xs={8}>
                    <Card.Body>
                        <Card.Subtitle>Nombre: Pelota roja</Card.Subtitle>
                        <Card.Subtitle>Desc: pelota de goma roja ultrarsistente</Card.Subtitle>
                        <Card.Subtitle>Precio: $399.00</Card.Subtitle>
                        <Card.Subtitle>Cantidad: 2 </Card.Subtitle>
                        <Card.Subtitle>Estado: Disponible</Card.Subtitle>
                    </Card.Body>
                </Col>
            </Row>
        </Card>
    </Container>
    );
}

export default ShoppingCart;