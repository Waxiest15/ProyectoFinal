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

function LostPet() {

    const [file, setFile] = useState();
    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }

    const [isValid, setIsValid] = useState(false);


    

  return (
        <Container style={{width:'60%'}} className='mx-auto bg-danger p-3'>
            <Card className='pb-3 m-3'>
            <Form>
            <h1 className='text-center'>¡AVISO!</h1>
            <hr />
                <Container >
                <Form.Group className="mb-0">
                    <Form.Label className="w-100">Nombre: 
                    <Form.Control 
                    readOnly
                    ></Form.Control></Form.Label>
                </Form.Group>
                <Form.Group>
                    <Form.Control type="file" inputProps={{ accept: 'image/*' }} onChange={handleChange}>
                    </Form.Control>
                    <Container>
                    <img src={file} class="w-75 d-block mx-auto" style={{maxHeight: "300px"}}/>
                    </Container>
                </Form.Group>
            <Form.Group className="mb-0">
                    <Form.Label className="w-100">Notas: 
                    <Form.Control
                    value='Mascota perdida, raza {raza} reponde al nombre de {nombre} tiene la apariencia de {pelaje} y {descripcion fisica}, tiene {edad} años y ide {altura}, ultima vez visto en {tal lado}
                    '
                    name="notes"
                    as="textarea"
                    rows={5} 
                    type="text" 
                    placeholder="Describe algunas actitudes de tu mascota o comportamientos"></Form.Control></Form.Label>
                </Form.Group>

                <Container className='text-center'>
                <Button className="w-25" type='submit'>Generar Busqudda</Button>
                </Container>
            </Container>
            </Form>
            </Card>
            </Container>

  );
}

export default LostPet;