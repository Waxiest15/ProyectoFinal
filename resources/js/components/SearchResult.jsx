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

import { useParams } from "react-router-dom";

import Data from "./JSONs/products.json";
import { ProductionQuantityLimits } from "@mui/icons-material";
import { isNull, isSet } from "lodash";

function SearchResult() {
    let { productoS } = useParams();
    let condicion;

    if(productoS!=null){
        console.log("si jala")
        condicion = productoS
    }else{
        console.log("no jala")
        condicion = ""
    }

    

    const Duplicates = Data.map((tags) => tags.category);
    const [pivote, setPivote] = useState([...new Set(Duplicates)]);
    const [noDuplicates, setNoDuplicates] = useState(pivote);
    const [helper, setHelper] = useState("");
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
            <Container className="w-25 border rounded ms-0">
                <h4 className="text-center mt-2">Filtros</h4>
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
                
                <Container className="d-flex flex-wrap">
                    {productos
                        .filter(
                            (product) =>
                                product.category
                                    .toString()
                                    .includes(selectedTag) &&
                                product.name.includes(condicion) &&
                                (product.price.toString().includes(query) ||
                                    product.price < query)
                        )
                        .map((product, index) => (
                            <>
                                <Container
                                    style={{ width: "31%" }}
                                    className="p-0"
                                >
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
                                            className='w-100'
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
