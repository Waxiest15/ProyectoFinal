import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useRef, useState, useEffect, useContext } from "react";
import axios from 'axios';
import Alert from 'react-bootstrap/Alert';
import { useNavigate } from "react-router-dom";
import { redirect } from "react-router-dom";

// Context
import { AuthContext } from '../components/AuthContext';


function AddAddress() {
  //Navigate
  const navigate = useNavigate();

  // Auth Context USER
  const { user } = useContext(AuthContext);

  const [states, setStates] = useState([])//Put all the States in a State
  const [cities, setCities] = useState([])//Put all the Cities in a State
  const [neighborhoods, setNeighborhoods] = useState([])//Put all the Neighborhoods in a State
  const [streets, setStreets] = useState([])//Put all the Streets in a State

  const i = sessionStorage.getItem('user')//current user_id
  const token = sessionStorage.getItem('token')

  const [state_id, setState_id] = useState('')

  const [id, setID] = useState(sessionStorage.getItem('user'))

  const [city_id, setCity_id] = useState(0)

  const [neighborhood_id, setNeighborhood_id] = useState(0)

  const [street_id, setStreet_id] = useState(0)

  const [number, setNumber] = useState(0)


  //Store Address
  const postAddress = async (e) => {
    //if (e && e.preventDefault()) e.preventDefault(); e.preventDefault();
    const formData = new FormData();
    //console.log("entrandooo")
    console.log(state_id, city_id, neighborhood_id, street_id, number, id)
    formData.append("state_id", parseInt(state_id))
    formData.append("city_id", parseInt(city_id))
    formData.append("neighborhood_id", parseInt(neighborhood_id))
    formData.append("street_id", parseInt(street_id))
    formData.append("number", number)
    formData.append("user_id", id)
    // formData.append("_token", )
    //formData.append("image", formValue.image)
    await axios.post('http://localhost:80/ProyectoFinal/public/api/address_store',
      formData,
      { headers: { 'Content-Type': 'multipart/form-data' } }

    ).then(navigate('../'))
  }

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




  useEffect(() => {//Get States from Laravel
    showStates()
  }, [])
  const showStates = async () => {
    await axios.get('http://localhost:80/ProyectoFinal/public/api/state_show')
      .then(res => {
        //console.log(res)
        setStates(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }


  useEffect(() => {//Get Cities from Laravel
    showCities()
  }, [])
  const showCities = async () => {
    await axios.get('http://localhost:80/ProyectoFinal/public/api/city_show')
      .then(res => {
        //console.log(res)
        setCities(res.data)

      })
      .catch(err => {
        console.log(err)
      })

  }

  useEffect(() => {//Get Neighborhoods from Laravel
    showNeighborhoods()
  }, [])
  const showNeighborhoods = async () => {
    await axios.get('http://localhost:80/ProyectoFinal/public/api/neib_show')
      .then(res => {
        //console.log(res)
        setNeighborhoods(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }

  useEffect(() => {//Get Streets from Laravel
    showStreets()
  }, [])
  const showStreets = async () => {
    await axios.get('http://localhost:80/ProyectoFinal/public/api/street_show')
      .then(res => {
        console.log(res)
        setStreets(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }




  return (
    <>
      <div class="login-div">
        <Container className="w-50">
          <Card className="p-3">
            <Card.Header className="text-center">
              <h2>Add an Address</h2>
            </Card.Header>
            <Form onSubmit={postAddress}>
              <Form.Group className="mb-3" controlId="formBasicStates">
                <Form.Label>State</Form.Label>
                <Form.Select
                  name="state"
                  onChange={(e) => setState_id(e.target.value)}
                >
                  <option value="">Plese, select your State</option>
                  {
                    states.map(state => <option key={state.id} value={state.id}>{state.name}</option>)
                  }
                </Form.Select>
              </Form.Group>

              <Row>
                <Col>
                  <Form.Group className="mb-3" controlId="formBasicCities">
                    <Form.Label>City</Form.Label>
                    <Form.Select
                      name="city"
                      onChange={(e) => setCity_id(e.target.value)}
                    >
                      <option value="">Plese, select your City</option>
                      {
                        cities.map(city => <option key={city.id} value={city.id}>{city.name}</option>)
                      }
                    </Form.Select>
                  </Form.Group>

                </Col>
                <Col>
                  <Form.Group className="mb-3" controlId="formBasicNeighborhoods">
                    <Form.Label>Neighborhoods</Form.Label>
                    <Form.Select
                      name="neighborhood"
                      onChange={(e) => setNeighborhood_id(e.target.value)}
                    >
                      <option value="">Plese, select your Neighborhood</option>
                      {
                        neighborhoods.map(neighborhood => <option key={neighborhood.id} value={neighborhood.id}>{neighborhood.name}</option>)
                      }

                    </Form.Select>
                  </Form.Group>

                </Col>
              </Row>
              <Form.Group className="mb-3" controlId="formBasicStreets">
                <Form.Label>Street</Form.Label>
                <Form.Select
                  name="street"
                  onChange={(e) => setStreet_id(e.target.value)}
                >
                  <option value="">Plese, select your Street</option>
                  {
                    streets.map(street => <option key={street.id} value={street.id}>{street.name}</option>)
                  }

                </Form.Select>
              </Form.Group>

              <Col>
                <Form.Group className="mb-3" controlId="number">
                  <Form.Label>Number</Form.Label>
                  <Form.Control
                    name="number"
                    type="number"
                    placeholder="Set your number address"
                    required
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                  />
                </Form.Group>
              </Col>

              <Button variant="primary" type='submit' >
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