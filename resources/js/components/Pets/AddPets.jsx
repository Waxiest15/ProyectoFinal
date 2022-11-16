import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { useState, useEffect } from 'react';

import "/xampp/htdocs/ProyectoFinal/resources/css/app.css"

function AddPet() {

    const [file, setFile] = useState();
    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }

    const [isValid, setIsValid] = useState(false);


    

  return (
    <div class="div_card-profile">
        <Container style={{width:'60%'}}>
            <Card className='pb-3'>
            <Form>
            <h1 className='text-center'>Nueva mascota</h1>
            <hr />
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
                        <Form.Label>Selecciona una imagen</Form.Label>
                        <Form.Control type="file" inputProps={{ accept: 'image/*' }} onChange={handleChange}>
                
                        </Form.Control>
                        <Container>
                        <img src={file} class="w-100" style={{maxHeight: "300px"}}/>
                        </Container>
                    </Form.Group>
                </Col>
                <Col>
                <Row>
                    <Col>
                    <Form.Group className="mb-0">
                    <Form.Label>Especie: </Form.Label> 
                    <Form.Select aria-label="Default select example"
                    required
                    >
                        <option>Open this select menu</option>
                        <option value="1">One</option>
                    </Form.Select>
                    </Form.Group>
                    </Col>
                    <Col>
                    <Form.Group className="mb-3">
                    
                    <Form.Label>Raza: </Form.Label> 
                    <Form.Select aria-label="Default select example" required>
                        <option>Open this select menu</option>
                        <option value="1">One</option>
                    </Form.Select>
                </Form.Group>
                    </Col>
                </Row>
                <Row className="w-100">
                    <Col>
                    <Form.Group className="mb-0">
                    <Form.Label className="w-100">Pelaje: 
                    <Form.Control className="w-100" 
                    name="breed"
                    type="text" 
                    placeholder="Describe su pelaje"
                    maxLength={100}
                    required
                    ></Form.Control></Form.Label>
                </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <Form.Group className="mb-0">
                        <Form.Label>Edad: </Form.Label>
                        <Form.Control 
                            name="age"
                            type="number" 
                            placeholder="Año(s)"
                            min={0}
                            max={100}
                            required
                            />
                    </Form.Group>
                    </Col>
                    <Col>
                    <Form.Group className="mb-0">
                        <Form.Label>Altura: </Form.Label><Form.Label></Form.Label>
                        <Row>
                            <Col className="pe-0">
                            <Form.Control 
                            name="height"
                            type="number" 
                            placeholder="metros"
                            min={0}
                            max={3}
                            step="0.1"
                            required
                            ></Form.Control>
                            </Col>
                            <Col className='p-0 mt-1 w-auto'>
                            <Form.Label>m</Form.Label>
                            </Col>
                        </Row>
                    </Form.Group>
                    </Col>
                </Row>
                </Col>
            </Row>
            
            <Form.Group className="mb-0" >
                    <Form.Label className='w-100'>Descripcion Fisica: 
                    <Form.Control 
                    name="description"
                    as='textarea'
                    rows={3}
                    type="text" 
                    placeholder="Escribe algunas caracteristicas"
                    
                    ></Form.Control></Form.Label>
                </Form.Group>

            <Form.Group className="mb-0">
                    <Form.Label className="w-100">Notas: 
                    <Form.Control
                    name="notes"
                    as="textarea"
                    rows={7} 
                    type="text" 
                    placeholder="Describe algunas actitudes de tu mascota o comportamientos"></Form.Control></Form.Label>
                </Form.Group>

                <Container className='text-center'>
                <Button className="w-25" type='submit'>Agregar</Button>
                </Container>
            </Container>
            </Form>
            </Card>
            </Container>
    </div>
  );
}

export default AddPet;