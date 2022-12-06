import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import {useRef, useState, useEffect} from "react";
import axios from 'axios';
import Alert from 'react-bootstrap/Alert';
import { useNavigate } from "react-router-dom";

function AddAddress(){ 

  const [states, setStates] = useState([])//Put all the States in a State
  const [cities, setCities] = useState([])//Put all the Cities in a State
  const [neighborhoods, setNeighborhoods] = useState([])//Put all the Neighborhoods in a State
  const [streets, setStreets] = useState([])//Put all the Streets in a State


  useEffect(() => {//Get States from Laravel
    axios.get('http://localhost:80/ProyectoFinal/public/api/state_show')
    .then(res => {
      console.log(res)
      setStates(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  }, [])


  useEffect(() => {//Get Cities from Laravel
    axios.get('http://localhost:80/ProyectoFinal/public/api/city_show')
    .then(res => {
      console.log(res)
      setCities(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  }, [])

  useEffect(() => {//Get Neighborhoods from Laravel
    axios.get('http://localhost:80/ProyectoFinal/public/api/neib_show')
    .then(res => {
      console.log(res)
      setNeighborhoods(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  }, [])


  useEffect(() => {//Get Streets from Laravel
    axios.get('http://localhost:80/ProyectoFinal/public/api/street_show')
    .then(res => {
      console.log(res)
      setStreets(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  }, [])

 


  return (
    <>
    <div class="login-div">
        <Container className="w-50">
        <Card className="p-3">
          <Card.Header className="text-center">
            <h2>Add an Address</h2>
          </Card.Header>
        <Form>
          <Col>
            <Form.Group className="mb-3" controlId="state">
            <Form.Label>State</Form.Label>
              <Form.Select
                name="state"
                onChange={(e) => setGender(e.target.value)}
              >
                <option value="">Plese, select your State</option>
                {
                  states.map(state => <option value={state.id}>{state.name}</option>)
                }
              </Form.Select>
            </Form.Group>
            </Col>  

            
            <Col>
            <Form.Group className="mb-3" controlId="city">
            <Form.Label>City</Form.Label>
              <Form.Select
                name="city"
                onChange={(e) => setGender(e.target.value)}
              >
                <option value="">Plese, select your City</option>
                {
                  cities.map(city => <option value={city.id}>{city.name}</option>)
                }
              </Form.Select>
            </Form.Group>
            </Col>    

            <Col>
            <Form.Group className="mb-3" controlId="neighborhood">
            <Form.Label>Neighborhood</Form.Label>
              <Form.Select
                name="neighborhood"
                onChange={(e) => setGender(e.target.value)}
              >
                <option value="">Plese, select your Neighborhood</option>
                {
                  neighborhoods.map(neighborhood => <option value={neighborhood.id}>{neighborhood.name}</option>)
                }
              </Form.Select>
            </Form.Group>
            </Col>    

            <Col>
            <Form.Group className="mb-3" controlId="street">
            <Form.Label>Street</Form.Label>
              <Form.Select
                name="neighborhood"
                onChange={(e) => setGender(e.target.value)}
              >
                <option value="">Plese, select your Street</option>
                {
                  streets.map(street => <option value={street.id}>{street.name}</option>)
                }
              </Form.Select>
            </Form.Group>
            </Col>    

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
        </Card>
    </Container>
    </div>
    </>
  );
}

export default AddAddress;