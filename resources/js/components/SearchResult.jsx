import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import CardGroup from "react-bootstrap/CardGroup";
import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { Link } from "react-router-dom";

import Data from "./JSONs/products.json";
import { ProductionQuantityLimits } from "@mui/icons-material";

function SearchResult() {
    const Duplicates = Data.map((tags) => tags.category);
    const noDuplicates = [...new Set(Duplicates)];
    const [selectedTag, setSelectedTag] = useState("");

    const [index, setIndex] = useState("");
    const [productos, setProductos] = useState(Data);
    const [query, setQuery] = useState("");
    const [disable, setDisable] = useState(true);
    const [quitados, setQuitados] = useState([]);

    const removeItem = (index) => {
        setQuitados([...quitados, index]);
        console.log("seleccionado: ", selectedTag);
        setProductos(productos.filter((o, i) => index !== i));
    };

    return (
        <Container className="d-flex p-3">
            <Container className="w-25 border ms-0">
                <h4>Filtros</h4>
                <Form.Group>
                    <Form.Label>Categorias</Form.Label>
                    <Form.Select
                        type="select"
                        onChange={(e) => setSelectedTag(e.target.value)}
                    >
                        <option value="">Seleccione una</option>
                        {noDuplicates.map((tags) => (
                            <option value={tags}>{tags}</option>
                        ))}
                    </Form.Select>
                </Form.Group>
                <Form.Group className="d-block gap-1">
                    <Form.Label>Precio</Form.Label>
                    <Form.Range
                        controlId="maxCost"
                        min={40}
                        max={1000}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                    <p>Maximo: ${query}</p>
                </Form.Group>
            </Container>

            <Container>
                <Button
                    className="d-block m-2 ms-auto "
                    as={Link}
                    to="newproduct"
                >
                    Add product
                </Button>
                <Form.Group className="d-flex gap-2">
                    <Form.Label>categoria: </Form.Label>
                    <Form.Control type="text" />
                    <Button
                        className="d-block m-2 ms-auto "
                        onClick={() => [...noDuplicates, "queso"]}
                    >
                        Add
                    </Button>
                    {/*SAbe */}
                </Form.Group>
                <Container className="border d-flex flex-wrap">
                    {productos
                        .filter(
                            (product) =>
                                product.category
                                    .toString()
                                    .includes(selectedTag) &&
                                (product.price.toString().includes(query) ||
                                    product.price < query)
                        )
                        .map((product, index) => (
                            <>
                                <Container
                                    style={{ width: "31%" }}
                                    className="p-0"
                                >
                                    <Button onClick={() => removeItem(index)}>
                                        Adios
                                    </Button>
                                    <Card
                                        className="p-3 m-1 w-100"
                                        style={{
                                            width: "30%",
                                            height: "92%",
                                            textDecoration: "none",
                                            color: "black",
                                        }}
                                        as={Link}
                                        to={product.ruta}
                                    >
                                        <Card.Img
                                            src={product.img}
                                            style={{ width: "200px" }}
                                            alt="Card image"
                                        />
                                        <Card.ImgOverlay className="">
                                            <Fab
                                                className="me-3"
                                                size="small"
                                                color="secondary"
                                                aria-label="like"
                                            >
                                                <FavoriteIcon />
                                            </Fab>
                                        </Card.ImgOverlay>
                                        <Card.Body>
                                            <p>{product.name}</p>
                                            <p>tag: {product.category}</p>
                                        </Card.Body>
                                        <Card.Footer>
                                            precio: ${product.price}
                                        </Card.Footer>
                                    </Card>
                                </Container>
                            </>
                        ))}
                </Container>
            </Container>
        </Container>
    );
}

export default SearchResult;
