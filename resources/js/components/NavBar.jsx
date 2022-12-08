import Container from 'react-bootstrap/Container';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import { Form, Button } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { PersonCircle, Search, Bell, Cart, Shop, Facebook, Whatsapp, Twitter, Envelope } from 'react-bootstrap-icons';
import { Link, Outlet } from 'react-router-dom';


const Footer = () =>

  <footer className="page-footer font-small blue pt-4" class="footer">
    <div className="container-fluid text-center text-md-left" >
      <div className="row">
        <div className="col-md-6 mt-md-0 mt-3">
          <h5 className="text-uppercase">PetWeb</h5>
          <p>Empresa dedicada a ayudarte a encontrar lo mejor de lo mejor para tu mascota. <br />
          ¡Tenemos todos los productos que buscas: alimentos, ropa, accesorios y más! <br/>
          Además contamos con variedad de servicios.
          <hr /></p>
        </div>

        <hr className="clearfix w-100 d-md-none pb-0" />

        <div className="col-md-3 mb-md-0 mb-3">
          <h5 className="text-uppercase">Acerca de</h5>
          <ul className="list-unstyled">
            <li><a>PetWeb</a></li>
            <li><Form.Label as={Link} to='about-us'>Nosotros</Form.Label></li>
            <li><Form.Label as={Link} to='politicas'>Terminos y condiciones</Form.Label></li>
          </ul>
        </div>

        <div className="col-md-3 mb-md-0 mb-3">
          <h5 className="text-uppercase">Informacion de contacto</h5>
          <ul className="list-unstyled">
            <li class='d-flex align-items-center justify-content-center'>
              <a class="me-2" href='https://www.facebook.com/petwebmx'>Facebook</a><Facebook /></li>
            <li class='d-flex align-items-center justify-content-center'>
              <a class="me-2" href='https://wa.me/4492860016'>Whatsapp</a><Whatsapp /></li>
            <li class='d-flex align-items-center justify-content-center'>
              <a class="me-2" href='https://twitter.com/petwebmx'>Twitter</a><Twitter /></li>
            <li class='d-flex align-items-center justify-content-center'>
              <a class='me-2' href="mailto:petwebmx1@gmail.com?Subject=Correo%20desde%20la%20pagina">Correo</a><Envelope /></li>
          </ul>
        </div>
      </div>
    </div>

    <div className="footer-copyright text-center py-3">© 2020 Copyright:
      <a href="https://mdbootstrap.com/"> MDBootstrap.com</a>
    </div>

  </footer>

function NavBar() {
  const logOut = () => {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('user');
  }
  return (
    <>

      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container className="p-2">
          <Navbar.Brand as={Link} to="/ProyectoFinal/public/">
            PetWeb
          </Navbar.Brand>
          <Nav className="me-auto">

            <Nav.Link className="d-flex">
              <NavDropdown
                title="Servicios"
                id="collasible-nav-dropdown"
              >
                <NavDropdown.Item as={Link} to="paseo">
                  Paseo
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="aseo">
                  Aseo
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="estetica">
                  Estetica
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>Nutricion</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="lostPet">
                  Mascotas Perdidas
                </NavDropdown.Item>
                <NavDropdown.Item>
                  Servicios Funerarios
                </NavDropdown.Item>
                <NavDropdown.Item>Veterinaria</NavDropdown.Item>
                <NavDropdown.Item>Estadia</NavDropdown.Item>
              </NavDropdown>
              <Form className="d-flex ms-3">
                <Form.Control
                  type="search"
                  placeholder="Buscar"
                  className="me-2 w-100"
                  aria-label="Search"
                />
                <Button
                  variant="outline-success"
                  className=""
                  as={Link}
                  to="result"
                >
                  <Search className="mt-1" />
                </Button>
              </Form>
            </Nav.Link>

          </Nav>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-3 gap-3 ms-auto">
              <Nav.Link>
                <Button
                  variant="Link"
                  className="text-light d-flex align-items-center gap-2"
                  as={Link}
                  to="bussiness"
                >
                  Quiero Vender <Shop color="white" />
                </Button>
              </Nav.Link>
              <Nav.Link className="d-flex gap-1">
                <NavDropdown
                className='xw-75'
                  title="Usuario"
                  id="basic-nav-dropdown"
                >
                  <NavDropdown.Item className='text-center' as={Link} to='profile'>
                    Mi perfil
                  </NavDropdown.Item>
                  <NavDropdown.Item className='text-center' as={Link} to='pets'>
                    Mis mascotas
                  </NavDropdown.Item>
                  <NavDropdown.Item className='text-center' as={Link} to='signin'>
                    Crear cuenta
                  </NavDropdown.Item>
                  <NavDropdown.Item className='text-center' as={Link} to='login'>
                    Acceder
                  </NavDropdown.Item>
                  <NavDropdown.Item className='text-center' as={Link} to='wishList'>
                    Lista de deseos
                  </NavDropdown.Item>
                  <NavDropdown.Item className='text-center' as={Link} to='boughts'>
                    Compras
                  </NavDropdown.Item>
                  <NavDropdown.Item className='text-center' as={Link} to='admin'>
                    Admin
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <Dropdown.Item
                    as={Link} to="/ProyectoFinal/public/"
                    onClick={logOut}>
                    Salir
                  </Dropdown.Item>
                </NavDropdown>
              </Nav.Link>
              <Nav.Link>
                <Button
                  className="me-2"
                  as={Link}
                  to="shoppingcart"
                >
                  <Cart />
                </Button>
                <Button>
                  <Bell />
                </Button>
              </Nav.Link>
            </Nav>
            <Nav xs sm lg className="d-flex flex-wrap">
              <Nav.Link></Nav.Link>
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