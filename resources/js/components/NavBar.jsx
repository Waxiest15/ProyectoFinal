import Container from "react-bootstrap/Container";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import { Form, Button } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import {
    PersonCircle,
    Search,
    Bell,
    Cart,
    Shop,
    Facebook,
    Whatsapp,
    Twitter,
    Envelope,
    Star,
    Bag,
} from "react-bootstrap-icons";
import { Link, Outlet } from "react-router-dom";
import { useState } from "react";



const Footer = () => (

    <footer className="page-footer font-small blue pt-4" class="footer">
        <div className="container-fluid text-center text-md-left">
            <div className="row">
                <div className="col-md-6 mt-md-0 mt-3">
                    <h5 className="text-uppercase">PetWeb</h5>
                    <p>Petweb its a dedicated enterprise focus on provide everything a pet would need</p>
                </div>

                <hr className="clearfix w-100 d-md-none pb-0" />

                <div className="col-md-3 mb-md-0 mb-3">
                    <h5 className="text-uppercase">Info</h5>
                    <ul className="list-unstyled">
                        <li>
                            <a>PetWeb</a>
                        </li>
                        <li>
                            <Form.Label as={Link} to="about-us">
                                About us
                            </Form.Label>
                        </li>
                        <li>
                            <Form.Label as={Link} to="politicas">
                                Terms and conditions
                            </Form.Label>
                        </li>
                        <li>
                            <Form.Label as={Link}
                                to="bussiness">
                                Become a distribuitor
                            </Form.Label>
                        </li>
                    </ul>
                </div>

                <div className="col-md-3 mb-md-0 mb-3">
                    <h5 className="text-uppercase">Contact us</h5>
                    <ul className="list-unstyled">
                        <li class="d-flex align-items-center justify-content-center">
                            <a
                                class="me-2"
                                href="https://www.facebook.com/petwebmx"
                            >
                                Facebook
                            </a>
                            <Facebook />
                        </li>
                        <li class="d-flex align-items-center justify-content-center">
                            <a class="me-2" href="https://wa.me/4492860016">
                                Whatsapp
                            </a>
                            <Whatsapp />
                        </li>
                        <li class="d-flex align-items-center justify-content-center">
                            <a class="me-2" href="https://twitter.com/petwebmx">
                                Twitter
                            </a>
                            <Twitter />
                        </li>
                        <li class="d-flex align-items-center justify-content-center">
                            <a
                                class="me-2"
                                href="mailto:petwebmx1@gmail.com?Subject=Correo%20desde%20la%20pagina"
                            >
                                Email
                            </a>
                            <Envelope />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
);

function NavBar() {
    const [search, setSearch] = useState("");
    const user_id = sessionStorage.getItem('user');
    const token = sessionStorage.getItem('token');
    const logOut = () => {
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('user');
        window.location.reload(true);
    }
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container className="p-2">
                    <Navbar.Brand as={Link} to="/ProyectoFinal/public/">
                        PetWeb
                    </Navbar.Brand>
                    <Nav.Link> <Button
                    className="bg-black border-light"
                    as={Link}
                    to='result'
                    >Catalog</Button>
                    </Nav.Link>
                    <Nav className="me-auto w-50" >
                        <Nav.Link className="d-flex w-100">
                            <Form className="d-flex ms-3 w-75">
                                <Form.Control
                                    onChange={(e) =>
                                        setSearch(e.target.value.toString())
                                    }
                                    type="search"
                                    placeholder="Search"
                                    className="me-2 w-100"
                                    aria-label="Search"
                                />
                                <Button
                                    variant="outline-success"
                                    className=""
                                    as={Link}
                                    to={search == "" ? "result" : search}
                                >
                                    <Search className="mt-1" />
                                </Button>
                            </Form>
                        </Nav.Link>
                    </Nav>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-3 gap-3 ms-auto">
                            <Nav.Link className="d-flex gap-1">
                                <NavDropdown

                                    className="justify-content-center"
                                    title="User"
                                    id="basic-nav-dropdown"
                                >
                                    {(token) ? <NavDropdown.Item as={Link} to="profile">
                                        Profile
                                    </NavDropdown.Item> : <></>}
                                    
                                    {token != null ? <> </> : <NavDropdown.Item as={Link} to="login">
                                        Login
                                    </NavDropdown.Item>}
                                    {(token) ? <> </> : <NavDropdown.Item as={Link} to="signin">
                                        Create an account
                                    </NavDropdown.Item>}
                                    {(token) ? 
                                    <NavDropdown.Item as={Link} to="wishList">
                                        Wish list
                                    </NavDropdown.Item>
                                    : <></>}
                                    
                                    {(token) ?<NavDropdown.Item as={Link} to="boughts">
                                        Orders
                                    </NavDropdown.Item> 
                                    : <></>}
                                    
                                    {(token) ?<><NavDropdown.Divider />
                                    <NavDropdown.Item onClick={logOut}>Logout</NavDropdown.Item></> : <></>}
                                    
                                </NavDropdown>
                            </Nav.Link>
                            {(token) ?
                                <Nav.Link>
                                    <Button
                                        className="me-2"
                                        as={Link}
                                        to="shoppingcart"
                                    >
                                        <Cart />
                                    </Button>
                                    <Button
                                        className="me-2"
                                        as={Link}
                                        to="wishlist"
                                    >
                                        <Star />
                                    </Button>
                                    <Button
                                        className="me-2"
                                        as={Link}
                                        to="boughts"

                                    >
                                        <Bag />

                                    </Button>
                                </Nav.Link> : <> </>}

                        </Nav>
                        <Nav xs sm lg className="d-flex flex-wrap">
                            <Nav.Link></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <section class="section-main">
                <Outlet></Outlet>
            </section>
            <br />
            <Footer />
        </>
    );
}

export default NavBar;
