import Container from 'react-bootstrap/Container';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import {Form, Button} from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {PersonCircle, Search, Bell, Cart, Shop, Facebook, Whatsapp, Twitter, Envelope} from 'react-bootstrap-icons';
import { Link, Outlet } from 'react-router-dom';


const Footer = () => 
<footer className="page-footer font-small blue pt-4" class="footer">
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
                    <li><Form.Label as={Link} to='/ProyectoFinal/public/politicas'>Terminos y condiciones</Form.Label></li>
                    <li><a></a></li>
                </ul>
            </div>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Informacion de contacto</h5>
                <ul className="list-unstyled">
                    <li class='d-flex align-items-center justify-content-center'>
                      <a class="me-2" href='https://www.facebook.com/petwebmx'>Facebook</a><Facebook/></li>
                    <li class='d-flex align-items-center justify-content-center'>
                      <a class="me-2" href='https://wa.me/4492860016'>Whatsapp</a><Whatsapp/></li>
                    <li class='d-flex align-items-center justify-content-center'>
                      <a class="me-2" href='https://twitter.com/petwebmx'>Twitter</a><Twitter/></li>
                    <li class='d-flex align-items-center justify-content-center'>
                      <a class="me-2">Correo</a><Envelope/></li>
                </ul>
            </div>
        </div>
    </div>

    <div className="footer-copyright text-center py-3">© 2020 Copyright:
        <a href="https://mdbootstrap.com/"> MDBootstrap.com</a>
    </div>

</footer>

function NavBar() {
  return (
    <>
    
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container className="p-2">
        <Navbar.Brand as={Link} to="/ProyectoFinal/public/">PetWeb</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" fill>
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
            </NavDropdown>
            <Form className="d-flex ms-3" >
                  <Form.Control
                    type="search"
                    placeholder="Buscar"
                    className="me-2 w-100"
                    aria-label="Search"
                  />
                  <Button variant="outline-success" as={Link} to="/ProyectoFinal/public/result"><Search/></Button>
                </Form>
          </Nav>
          <Nav className="me-3 gap-3">
            <div >
            <Button variant="Link" 
            className='text-light d-flex align-items-center gap-3'
            as={Link} to='/ProyectoFinal/public/bussiness'
            >Quiero Vender <Shop color='white'/></Button>
            </div>
          <Dropdown as={ButtonGroup}>
            <Button variant="success"><PersonCircle/></Button>
            <Dropdown.Toggle split variant="success" id="dropdown-spli  t-basic">Usuario {' '}</Dropdown.Toggle>
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
          </Nav>
          <Nav>
          <Button className="me-2" as={Link} to="/ProyectoFinal/public/shoppingcart">
            <Cart/>
          </Button>
          <Button>
          <Bell/>
          </Button>
        </Nav> 
        </Navbar.Collapse>
        
      </Container>
    </Navbar>
    <section class="section-main">
        <Outlet>

        </Outlet>
    </section>
    <br />
    <Footer />
    </>
  );
}

export default NavBar;