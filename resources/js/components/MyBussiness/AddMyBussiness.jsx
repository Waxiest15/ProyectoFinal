import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { Image } from 'react-bootstrap';
import { useState } from 'react';
import { send } from 'emailjs-com';

import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import { Textarea } from 'react-bootstrap-icons';

const getCoordinates = event => {
  setLat(event.latLng.lat());
  setLng(event.latLng.lng());
console.log('lat: ', event.latLng.lat());
console.log('lng: ', event.latLng.lng());
}

function Test() {

  const [toSend, setToSend] = useState({
      from_name: '',
      to_name: '',
      message: '',
      reply_to: '',
    });
  
    const onSubmit = (e) => {
      e.preventDefault();
      send(
        'service_1apb3ca',
        'template_bjb4bgr',
        toSend,
        '_22Q-TAjQCCZvZ5Gg'
      )
        .then((response) => {
          console.log('SUCCESS!', response.status, response.text);
        })
        .catch((err) => {
          console.log('FAILED...', err);
        });
    };
  
    const handleChange = (e) => {
      setToSend({ ...toSend, [e.target.name]: e.target.value });
    };
  
    return (
      <Container>
          <Card className='p-3 gap-3 w-75 mx-auto'>
            <Card.Header className='text-center'><h1>Distribuidor</h1></Card.Header>
          <Form onSubmit={onSubmit}>
            <Form.Group>
              <Form.Label>
                  Nombre
              </Form.Label>
              <Form.Control
              type='text'
              name='from_name'
              placeholder='Nombre de tu empresa'
              value={toSend.from_name}
              onChange={handleChange}
            />
            </Form.Group>

            <Form.Group>
              <Form.Label>
              Para
              </Form.Label>
              <Form.Control
              type='text'
              name='to_name'
              placeholder='Para quien'
              value={toSend.to_name}
              onChange={handleChange}
            />
            </Form.Group>

            <Form.Group>
              <Form.Label>Escribe tu mensaje:</Form.Label>
              <Form.Control
              as='textarea'
              rows={7}
              type='text'
              name='message'
              placeholder='Tu mensaje'
              value={toSend.message}
              onChange={handleChange}
            />
            </Form.Group>

            <Form.Group>
              <Form.Label>
                Tu correo:
              </Form.Label>
              <Form.Control
              type='email'
              name='reply_to'
              placeholder='A donde mandamos la respuesta'
              value={toSend.reply_to}
              onChange={handleChange}
            />

            </Form.Group>
            <Container >
            <Button type='submit' className='d-block mx-auto mt-3 w-25'>Submit</Button>
            </Container>
            </Form>
          </Card>
      </Container>
    ); 
}


function Map() {
  // Loads the map using API KEY
  const { isLoaded } = useLoadScript({
      googleMapsApiKey: "AIzaSyAsdXInYMGlY7iKwGOYoy2zuNnOUX9WeHQ"
  });
  const [lat, setLat] = useState();
  const [lng, setLng] = useState();

  
  if (!isLoaded) return <div>Loading...</div>
  
  return (
     <Container>
       <GoogleMap className='w-100'
          zoom={14}
          center={{ lat:21.87461477124801, lng: -102.26663330211015 }}
          mapContainerStyle={{ width: '100%', height: 600 }}
      >    
          <Marker draggable={true} id='mark' position={{ lat: 21.87444, lng: -102.26657 }}></Marker>

      </GoogleMap>
      <label id='LatTxt' >Lat: {lat}</label>
      <br />
      <label id='LngTxt'>Lng: {lng}</label>
     </Container>
      
  )
}

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
          <Form.Label>Selecciona la ubicacion de tu negocio (mueve el cursor rojo en pantalla)</Form.Label>
          <Container className='border text-center'>
            <Map/>
          </Container>
        </Form.Group>
        <Container className='text-center'>
        <Button 
        className='w-25'
        variant="primary" 
        
        onClick={getCoordinates}
        >
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
        <option value="0">Seleccione el modelo de su negocio</option>
        <option value="1">Mi negocio</option>
        <option value="2">Como Distribuidor</option>
      </Form.Select>
      </Form.Group>

        
      <div>{message=='1' ? <MyBussines></MyBussines> : <Test />}

      </div>
      
    </Container>
    </>
  );
}

export default BussinessForm;