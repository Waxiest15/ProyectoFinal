import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import BasicExample from './SpecificProduct'


import "/xampp/htdocs/ProyectoFinal/resources/css/app.css"
import { Button } from 'react-bootstrap';
import { useRef, useState, useEffect, useContext } from "react";
import axios from 'axios';

function carousel() {

  //Data for SpecificProduct
  const [data, setData] = useState([]);
  const product = (e) => {
    setData(e)
  }

  let navigate = useNavigate();
  const navigateTo = (url) => {
    let path = url;
    navigate('/' + url);
  }

  const [cat1, setCat1] = useState([]);
  useEffect(() => {//Get Neighborhoods from Laravel
    axios.get('http://localhost:80/ProyectoFinal/public/api/product_show_cat_3/1')
      .then(res => {
        console.log(res)
        setCat1(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  const [cat2, setCat2] = useState([]);
  useEffect(() => {//Get Neighborhoods from Laravel
    axios.get('http://localhost:80/ProyectoFinal/public/api/product_show_cat_3/3')
      .then(res => {
        console.log(res)
        setCat2(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  return (
    <>

      <div class="main">
        <Carousel>
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100"
              src="images/comida.jfif"
              alt="First slide"
              class="img-carrousel"
            />
            <Carousel.Caption>

              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100"
              src="images/perrosPanoramica.png"
              alt="Second slide"
              class="img-carrousel"
            />
            <Carousel.Caption>

              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="images/perrosPanoramica_1.png"
              alt="Third slide"
              class="img-carrousel"
            />
            <Carousel.Caption>

              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <br />


        <h1>Comida</h1>
        <CardGroup xs sm lg>
          {
            cat1.map(cat =>
              <Card>
                <Card.Img variant="top" src={cat.image} className='w-100 mx-auto' id={cat.id} />
                <Card.Body>

                  <Card.Title>{cat.name} {cat.id}</Card.Title>
                  <Card.Text>
                    {cat.description}
                    <br/>
                  </Card.Text>
                  <Button variant="primary" as={Link} to={`result/${cat.id}`}>See product</Button>
                </Card.Body>
                <Card.Footer>
                </Card.Footer>
              </Card>
            )
          } 
        </CardGroup>
        <CardGroup xs sm lg>
          {
            cat2.map(cat =>
              <Card>
                <Card.Img variant="top" src={cat.image} className='w-100 mx-auto' />
                <Card.Body>

                  <Card.Title>{cat.name}</Card.Title>
                  <Card.Text>
                    {cat.description}
                    <br/>
                    {cat.image}
                  </Card.Text>
                  <Button variant="primary">See product</Button>
                </Card.Body>
                <Card.Footer>
                </Card.Footer>
              </Card>
            )
          }
        </CardGroup>
      </div>
    </>
  );
}

export default carousel;