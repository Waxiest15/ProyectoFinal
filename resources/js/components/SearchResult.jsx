import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image'
import CardGroup from 'react-bootstrap/CardGroup';
import { Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useState } from 'react';

import Data from './JSONs/products.json'
import { ProductionQuantityLimits } from '@mui/icons-material';

let filter = Data;

function ColorCards(props) {
    return (
      <>
        <Container className=''>
        <div class='w-100 d-flex gap-3 flex-wrap mx-auto'>
        {props.data.map((product) => (
            <Card className="p-3 m-1" style={{width: '30%'}}>
            <Card.Img src={product.img} style={{width: '200px'}} alt="Card image" />
                <Card.ImgOverlay className=''>
                    <Fab className='me-3' size="small" color="secondary" aria-label="like">
                        <FavoriteIcon />
                    </Fab>
                </Card.ImgOverlay>
                <Card.Body>
                    {product.name}
                </Card.Body>
                <Card.Footer>
                    precio: {product.price}
                </Card.Footer>
        </Card>  
        ))}
        </div>
        </Container>
      </>
    );
  }
  

function SearchResult () {
    const [query, setQuery] = useState("");

    
    return(
    <Container className='d-flex p-3'>
        <Container className='w-25 border ms-0'>
            <h4>Filtros</h4>
            <Form.Group  className='d-block gap-1'>
            <Form.Label>Precio</Form.Label>
            <Form.Range
            controlId='maxCost'
            min={40}
            max={1000}
            onChange={(e)=>setQuery(e.target.value)}
            />
            <p>Maximo: ${query}</p>
            </Form.Group>
            
            <Button>
            Filtrar</Button>
        </Container>
        <Container className='border d-flex flex-wrap'>
            {filter.filter((product)=>
            product.price.toString().includes(query) || product.price<query
            ).map((product)=>(
                <Card className="p-3 m-1" style={{width: '30%'}}>
            <Card.Img src={product.img} style={{width: '200px'}} alt="Card image" />
                <Card.ImgOverlay className=''>
                    <Fab className='me-3' size="small" color="secondary" aria-label="like">
                        <FavoriteIcon />
                    </Fab>
                </Card.ImgOverlay>
                <Card.Body>
                    {product.name}
                </Card.Body>
                <Card.Footer>
                    precio: ${product.price}
                </Card.Footer>
        </Card>  
            )
            )}
        </Container>
    </Container>
    );
}

export default SearchResult;