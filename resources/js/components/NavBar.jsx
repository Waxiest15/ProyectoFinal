import Container from 'react-bootstrap/Container';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import {Form, Button} from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {PersonCircle, Search, Bell, Cart, Facebook} from 'react-bootstrap-icons';
import { Link, Outlet } from 'react-router-dom';


const Footer = () => <footer className="page-footer font-small blue pt-4" class="footer">
    <div className="container-fluid text-center text-md-left" >
        <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
                <h5 className="text-uppercase">PetWeb</h5>
                <p>Empresa dedicada a ayudarte a encontrar lo mejor de lo mejor para tu mascota</p>
            </div>

            <hr className="clearfix w-100 d-md-none pb-0"/>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Acerca de</h5>
                <ul className="list-unstyled">
                    <li><a>PetWeb</a></li>
                    <li><a>Ser vendedor</a></li>
                    <li><a>Politicas de privacidad</a></li>
                    <li><a></a></li>
                </ul>
            </div>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Informacion de contacto</h5>
                <ul className="list-unstyled">
                    <li><a>Facebook</a></li>
                    <li><a>Whatsapp</a></li>
                    <li><a>Twitter</a></li>
                    <li><a>Correo</a></li>
                </ul>
            </div>
        </div>
    </div>

    <div className="footer-copyright text-center py-3">© 2020 Copyright:
        <a href="https://mdbootstrap.com/"> MDBootstrap.com</a>
    </div>

</footer>

function CollapsibleExample() {
  return (
    <>
    
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/ProyectoFinal/public/">PetWeb</Navbar.Brand>
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
                <Dropdown.Item as={Link} to="/ProyectoFinal/public/profile">Mi perfil</Dropdown.Item>
                <Dropdown.Item as={Link} to="/ProyectoFinal/public/pets">Mis mascotas</Dropdown.Item>
                <Dropdown.Item>Ajustes</Dropdown.Item>
                <Dropdown.Item as={Link} to="/ProyectoFinal/public/signin">Crear cuenta</Dropdown.Item>
                <Dropdown.Item as={Link} to="/ProyectoFinal/public/login">Acceder</Dropdown.Item>
                <Dropdown.Divider/>
                <Dropdown.Item>Salir</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
        </Navbar.Collapse>
        <Nav>
          <Button>
            <Cart/>
          </Button>
          <Button>
            <Bell/>
          </Button>
        </Nav>
      </Container>
    </Navbar>
    <section>
        <Outlet>

        </Outlet>
    </section>
    <br />
    <Footer />
    </>
  );
}

export default CollapsibleExample;