import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

import "/xampp/htdocs/ProyectoFinal/resources/css/app.css"

function AddPet() {
  return (
    <div class="div_card-profile">
        <Container style={{width:'60%'}}>
            <Card>
            <Form>
            <h1>Nueva mascota</h1>
                <Container>
                <Form.Group className="mb-0">
                    <Form.Label className="w-100">Nombre: <Form.Control type="text" placeholder="Insert name"></Form.Control></Form.Label>
                </Form.Group>
            <Row ClassName="d-grip gap-3">
                <Col className='col-6'>
                    <Card.Img  src="images/Koda.jpg" style={{maxWidth: '300px', maxHeight: '300px', margin: "10px"}}/>
                </Col>
                <Col>
                <Row>
                    <Col>
                    <Form.Group className="mb-0">
                    <Form.Label>Especie: <DropdownButton id="dropdown-basic-button" title="Select one">
                        <Dropdown.Item>Action</Dropdown.Item>
                        <Dropdown.Item>Another action</Dropdown.Item>
                        <Dropdown.Item>Something else</Dropdown.Item>
                    </DropdownButton></Form.Label> 
                    </Form.Group>
                    </Col>
                    <Col>
                    <Form.Group className="mb-3">
                    
                    <Form.Label>Raza: <DropdownButton id="dropdown-basic-button" title="Select one">
                        <Dropdown.Item>Action</Dropdown.Item>
                        <Dropdown.Item>Another action</Dropdown.Item>
                        <Dropdown.Item>Something else</Dropdown.Item>
                    </DropdownButton></Form.Label> 
                </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <Form.Group className="mb-0">
                    <Form.Label>Pelaje: <Form.Control type="text" placeholder="Insert name"></Form.Control></Form.Label>
                </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <Form.Group className="mb-0">
                        <Form.Label>Edad: <Form.Control type="number" placeholder="Age"></Form.Control></Form.Label>
                    </Form.Group>
                    </Col>
                    <Col>
                    <Form.Group className="mb-0">
                        <Form.Label>Altura: <Form.Control type="number" placeholder="Age"></Form.Control></Form.Label>
                    </Form.Group>
                    </Col>
                </Row>
                </Col>
            </Row>
            <Row>
                <Col>
                <Form.Group className="mb-0">
                    <Form.Label className='w-100'>Descripcion Fisica: <Form.Control type="text" placeholder="Insert name"></Form.Control></Form.Label>
                </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col>
                <Form.Group className="mb-0">
                    <Form.Label className="w-100">Notas: <Form.Control type="text" placeholder="Insert name"></Form.Control></Form.Label>
                </Form.Group>
                </Col>
            </Row>
            </Container>
            </Form>
            </Card>
            </Container>
    </div>
  );
}

export default AddPet;