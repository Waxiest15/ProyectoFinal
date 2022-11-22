import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image'
import CardGroup from 'react-bootstrap/CardGroup';
import { Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import FavoriteIcon from '@mui/icons-material/Favorite';



function SearchResult () {
    const test = [
        {
            nombre: "Pelota",
            desc:"pelota roja",
            calf: 5
        }
    ]

    return(
    <Container>
        
        <p>Busqueda hecha: </p>
        <p>Resultado parecidos</p>
        <Container className="" style={{display: 'flex'}}>
        <Container className='w-25 border'>
            <h4>Opciones?</h4>
            
        </Container>
        <Container className='d-flex gap-3'>
        <Card className="p-3">
            <Card.Img src="images/hulerojo.jpg" style={{maxWidth: '200px'}} alt="Card image" />
                <Card.ImgOverlay className=''>
                <Fab className='me-3' size="small" color="secondary" aria-label="like">
                    <FavoriteIcon />
                </Fab>
                </Card.ImgOverlay>
                <Card.Body>
                    XD
                </Card.Body>
        </Card>

                <Card style={{ width: '18rem' }} className='pt-3'>
                <Container className='text-center'><Image style={{maxWidth:'200px'}} src='images/hulerojo.jpg'></Image></Container>
                <Card.Body>
                    <Card.Text>
                    Pelota de juguete color rojo de alta resistencia a mordeduras
                    </Card.Text>
                    <Card.Text>
                        <h5>Precio: $466</h5>
                    </Card.Text>
                </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }} className='pt-3'>
                <Container className='text-center'><Image style={{maxWidth:'200px'}} src='images/hulerojo.jpg'></Image></Container>
                <Card.Body>
                    <Card.Text>
                    Pelota de juguete color rojo de alta resistencia a mordeduras
                    </Card.Text>
                    <Card.Text>
                        <h5>Precio: $466</h5>
                    </Card.Text>
                </Card.Body>
                </Card>
            
        </Container>
    </Container>
    </Container>
    );
}

export default SearchResult;