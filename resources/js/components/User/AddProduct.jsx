import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Container, Card, Row, Col } from "react-bootstrap";
import { useState } from "react";

function NewProduct() {
    const [file, setFile] = useState();
    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }

    return (
        <Container>
            <Card className="p-3 my-3">
                <Form>
                    <Form.Group className="mb-3" controlId="productName">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Descripcion corta"
                            required
                        />
                    </Form.Group>

                    <Row>
                        <Col>
                            <Form.Group
                                className="mb-3"
                                controlId="productBrand"
                            >
                                <Form.Label>Imagen</Form.Label>
                                <Form.Control
                                    inputProps={{ accept: "image/*" }}
                                    onChange={handleChange}
                                    type="file"
                                />
                            </Form.Group>
                            <img src={file} class="w-100" style={{maxHeight: "300px"}}/>
                        </Col>
                        <Col>
                            <Form.Group
                                className="mb-3 d-flex gap-2"
                                controlId="productPrice"
                            >
                                <Form.Label>Precio</Form.Label>
                                <Form.Control
                                    type="number"
                                    min={0}
                                    max={999999}
                                    required
                                />
                            </Form.Group>

                            <Form.Group
                                className="d-flex gap-2"
                                controlId="productStock"
                            >
                                <Form.Label>Stock:</Form.Label>
                                <Form.Control
                                    type="number"
                                    min={0}
                                    max={999}
                                    required
                                />
                            </Form.Group>
                        </Col>
                    </Row>

                    <hr />

                    <h2>Detalles del producto</h2>
                    <Form.Group className="mb-3" controlId="productDesc">
                        <Form.Label>Descricpion</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Descripcion larga"
                            required
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="productBrand">
                        <Form.Label>Marca</Form.Label>
                        <Form.Control type="text" placeholder="Marca" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="productSize">
                        <Form.Label>Tamaño</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Unidades en centimetros"
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="productWeight">
                        <Form.Label>Peso:</Form.Label>
                        <Form.Control type="text" placeholder="Peso en KG" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                    <p>imagen</p>
                </Form>
            </Card>
        </Container>
    );
}

export default NewProduct;
