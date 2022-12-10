import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap';
import Data from '../JSONs/compras.json'

function Bought() {
  return (
    <Container className='p-3 pt-5'>
     

      {Data.map((compras)=>
        <Card className='m-3'>
        <Card.Header>{compras.fechaPago}</Card.Header>
          {compras.compras.map((datos, indice)=>
            <>
              <Card.Body>
          <Card.Title></Card.Title>
          <Row>
            <Col className='' xs sm={3}>
              <Card.Img src={datos.imagen} className='border' style={{width:'200px'}}/>
            </Col>
            <Col xs sm>
              <Card.Text>
                <h4 class={datos.status=='Entregado' ? 'text-success' : datos.status=='Cancelado' ? "text-danger" : "text-warning"}>{datos.status}</h4>
                <p>Arriva date {datos.fechaLlgada}</p>
                <p>{datos.descripcion}</p>
                <p>Units: {datos.unidades}</p>
              </Card.Text>
            </Col>
            <Col>
            <p>Sold by: {datos.proveedor}</p>
            </Col>
          </Row>
          
        </Card.Body>
        {indice+1<Object.keys(compras.compras).length ? <hr />: false}
            </>
          )}
        </Card>
      )}

      
    </Container>
  );
}

export default Bought;