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

function ChangePet() {
  return (
    <div class="div_card-profile">
        <Container style={{width:'60%'}}>
            <Card>
            <Form>
            <h1 class="text-center">Editar mascota</h1>
                <Container>
                <Form.Group className="mb-0">
                    <Form.Label className="w-100">Nombre: 
                    <Form.Control 
                    type="text" 
                    name="petName"
                    maxLength={"100"}
                    pattern="[A-Za-z]{1,100}" 
                    placeholder="Escribe su nombre"
                    required
                    ></Form.Control></Form.Label>
                </Form.Group>
            <Row ClassName="d-grip gap-3">
                <Col className='col-6'>
                    <Form.Group>
                        <Form.Control type="image">

                        </Form.Control>
                    </Form.Group>
                </Col>
                <Col>
                <Row>
                    <Col>
                    <Form.Group className="mb-0">
                    <Form.Label>Especie: <DropdownButton id="dropdown-basic-button" title="Selecciona una">
                        <Dropdown.Item>Action</Dropdown.Item>
                        <Dropdown.Item>Another action</Dropdown.Item>
                        <Dropdown.Item>Something else</Dropdown.Item>
                    </DropdownButton></Form.Label> 
                    </Form.Group>
                    </Col>
                    <Col>
                    <Form.Group className="mb-3">
                    
                    <Form.Label>Raza: <DropdownButton id="dropdown-basic-button" title="Selecciona una">
                        <Dropdown.Item>Action</Dropdown.Item>
                        <Dropdown.Item>Another action</Dropdown.Item>
                        <Dropdown.Item>Something else</Dropdown.Item>
                    </DropdownButton></Form.Label> 
                </Form.Group>
                    </Col>
                </Row>
                <Row className="w-100">
                    <Col>
                    <Form.Group className="mb-0">
                    <Form.Label>Pelaje: 
                        <Form.Control 
                        className="w-100" 
                        type="text" 
                        placeholder="Describe su pelaje"
                        required
                        ></Form.Control></Form.Label>
                </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <Form.Group className="mb-0">
                        <Form.Label>Edad: <Form.Control type="number" placeholder="Año(s)"></Form.Control></Form.Label>
                    </Form.Group>
                    </Col>
                    <Col>
                    <Form.Group className="mb-0">
                        <Form.Label>Altura: <Form.Control type="number" placeholder="metros"></Form.Control></Form.Label><Form.Label></Form.Label>
                    </Form.Group>
                    </Col>
                </Row>
                </Col>
            </Row>
            <Row>
                <Col>
                <Form.Group className="mb-0">
                    <Form.Label className='w-100'>Descripcion Fisica: <Form.Control type="text" placeholder="Escribe algunas caracteristicas"></Form.Control></Form.Label>
                </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col>
                <Form.Group className="mb-0">
                    <Form.Label className="w-100">Notas: <Form.Control type="text" placeholder="Describe algunas actitudes de tu mascota o comportamientos"></Form.Control></Form.Label>
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

export default ChangePet;