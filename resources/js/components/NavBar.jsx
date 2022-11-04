import Container from 'react-bootstrap/Container';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import {Form, Button} from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {PersonCircle, Search} from 'react-bootstrap-icons';
import { Link, Outlet } from 'react-router-dom';

function CollapsibleExample() {
  return (
    <>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">PetWeb</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Servicios" id="collasible-nav-dropdown">
              <NavDropdown.Item>Paseo</NavDropdown.Item>
              <NavDropdown.Item>Aseo</NavDropdown.Item>
              <NavDropdown.Item>Estetica</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>Nutricion</NavDropdown.Item>
              <NavDropdown.Item>Mascotas Perdidas</NavDropdown.Item>
              <NavDropdown.Item>Servicios Funerarios</NavDropdown.Item>
              <NavDropdown.Item>Veterinaria</NavDropdown.Item>
              <NavDropdown.Item>Estadia</NavDropdown.Item>

              <NavDropdown.Item>
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success"><Search/></Button>
                </Form>
          </Nav>
          <Nav>
          
          </Nav>
            <Dropdown as={ButtonGroup}>
            <Button variant="success"><PersonCircle/></Button>
            <Dropdown.Toggle split variant="success" id="dropdown-spli  t-basic">Usuario</Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item>Mi perfil</Dropdown.Item>
                <Dropdown.Item>Mis mascotas</Dropdown.Item>
                <Dropdown.Item>Ajustes</Dropdown.Item>
                <Dropdown.Divider/>
                <Dropdown.Item>Salir</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <section>
        <Outlet>

        </Outlet>
    </section>
    </>
  );
}

export default CollapsibleExample;