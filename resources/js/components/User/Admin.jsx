import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Container, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function Admin() {
    return (
        <Container className='m-3 mb-5 mt-5'>
            <Card className="p-3 w-50 mx-auto gap-3">
                <Card.Header className="text-center"><h1>Admin</h1></Card.Header>
                <Form>
                    <Form.Group className="mb-3" controlId="adminUser">
                        <Form.Label>Admin</Form.Label>
                        <Form.Control 
                        type="email" 
                        placeholder="Usuario" 
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="adminPassword">
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control type="password" placeholder="Contraseña" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="Checkbox">
                        <Form.Check type="checkbox" label="Recuerdame" />
                    </Form.Group>
                    <Button variant="primary" as={Link} to='/ProyectoFinal/public/'>
                        Acceder
                    </Button>
                </Form>
            </Card>
        </Container>
    );
}

export default Admin;
