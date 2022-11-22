import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { Image } from 'react-bootstrap';
import { useState } from 'react';

function Distribuidor() {
  return(
    <Card className='p-3 w-75 ms-auto me-auto'>
      <Card.Header className='text-center'><h1>Distribuidor</h1></Card.Header>
        <Form>
          <Form.Group>
            <Form.Label>
              Nombre de la empresa
            </Form.Label>
            <Form.Control
            placeholder='Escribe el correo de la empresa'
             type='email'
             maxLength={100}
             required
             pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'
             />

          </Form.Group>
          <Form.Group>
            <Form.Label>
              Nombre de la empresa
            </Form.Label>
            <Form.Control 
            placeholder='Escribe el nombre de la empresa'
            required
            maxLength={100}
            pattern="[A-Za-z]{1,100}"
            />

          </Form.Group>
          <Form.Group>
            <Form.Label>
              Telefono de contacto
            </Form.Label>
            <Form.Control
            placeholder='Telefono'
            required
            type='tel'
            />
          </Form.Group>

        <Form.Group>
          <Form.Label>
            Mensaje
          </Form.Label>
          <Form.Control
          type='text'
          required
          as="textarea"
          rows={7} 
          />
        </Form.Group>
        <Container className='text-center'>
        <Button 
        className='w-25'
        variant="primary" 
        type="submit">
          Submit
        </Button>
        </Container>
      </Form>
    </Card>
  );
}

function MyBussines() {

  const [file, setFile] = useState();
  function handleChange(e) {
      console.log(e.target.files);
      setFile(URL.createObjectURL(e.target.files[0]));
  }

  const [isValid, setIsValid] = useState(false);

  return(
    <Card className='w-75 ms-auto me-auto p-3'>
        <Card.Header className='text-center'><h1>Mi negocio</h1></Card.Header>
        <Form className='m-3'>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Nombre del negocio</Form.Label>
          <Form.Control 
          type="text" 
          placeholder="Nombre de tu negocio" 
          name="petName"
          maxLength={"100"}
          pattern="[A-Za-z]{1,100}" 
          required
          />
        </Form.Group>
        <Row>
          <Col>
            <Container>
            <Form.Group>
                <Form.Label>Selecciona una imagen para tu negocio</Form.Label>
                <Form.Control
                name='imageBussiness'
                type="file" 
                required
                inputProps={{ accept: 'image/*' }} 
                onChange={handleChange}>
        
                </Form.Control>
                <Container>
                <img src={file} class="w-100" style={{maxHeight: "300px"}}/>
                </Container>
            </Form.Group>
            </Container>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>Describe las actividades de tu negocio</Form.Label>
              <Form.Control 
              name="descripcionNegocio"
              as="textarea"
              rows={14} 
              type="text"
              required
              ></Form.Control>
            </Form.Group>
          </Col>
        </Row>
        <hr />
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Ubicacion</Form.Label>
          <Container className='border text-center'>
            <Image src='images/googleMaps.png'></Image>
          </Container>
        </Form.Group>
        <Container className='text-center'>
        <Button 
        className='w-25'
        variant="primary" 
        type="submit">
          Submit
        </Button>
        </Container>
        
        </Form>
      </Card>
  );
}


function BussinessForm() { 
  
  const [message, setMessage] = useState('');
  const whichMenu = event => {
    setMessage(event.target.value);
  console.log('value is:', event.target.value);
  }

  return (  
    <>
      <Container className='p-5'>
      <Form.Group className='w-75 ms-auto me-auto mb-5'>
      <Form.Label> <h3>Que tipo de negocio quieres?</h3> </Form.Label>
      <Form.Select 
      aria-label="Default select example"
      id='tipoNegocio'
      name='tipoNegocio'
      onChange={whichMenu}
      >
        <option value="1">Mi negocio</option>
        <option value="2">Como Distribuidor</option>
      </Form.Select>
      </Form.Group>

        
      <div>{message=='1' ? <MyBussines></MyBussines> : <Distribuidor />}

      </div>
      
    </Container>
    </>
  );
}

export default BussinessForm;