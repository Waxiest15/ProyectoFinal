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

import Data from "../JSONs/products.json";
import { LP2 } from "./AdminCategorias";



function SearchResult() {
    function NewProduct() {
        const [file, setFile] = useState();
        const [id, setId] = useState(Data.at(Data.length));
        const [img, setImg] = useState("");
        const [name, setName] = useState("Ejemplo");
        const [rate, setRate] = useState(4.9);
        const [stock, setStock] = useState(13);
        const [marca, setMarca] = useState("Marca blanca");
        const [modelo, setModelo] = useState("Modelo");
        const [tamaño, setTamaño] = useState(2.5);
        const [peso, setPeso] = useState(500);
        const [desc, setDesc] = useState("mucho texto");
        const [price, setPrice] = useState(999);
        const [category, setCategory] = useState("juguete");
        const [ruta, setRuta] = useState("?");

        function handleChange(e) {
            console.log(e.target.files);
            setFile(URL.createObjectURL(e.target.files[0]));
        }

        return (
            <Container className="p-0 ">
                <Card className="p-3 my-3">
                    <Form>
                        <Form.Group className="mb-3" controlId="productName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Short description"
                                required
                                onChange={(e) => setName(e.target.value)}
                            />
                        </Form.Group>

                        <Row>
                            <Col>
                                <Form.Group
                                    className="mb-3"
                                    controlId="productBrand"
                                >
                                    <Form.Label>Image</Form.Label>
                                    <Form.Control
                                        inputProps={{ accept: "image/*" }}
                                        onChange={handleChange}
                                        type="file"
                                    />
                                </Form.Group>
                                <img
                                    src={file}
                                    class="w-100"
                                    style={{ maxHeight: "300px" }}
                                />
                            </Col>
                            <Col>
                                <Form.Group
                                    className="mb-3 d-flex gap-2"
                                    controlId="productPrice"
                                >
                                    <Form.Label>Price: </Form.Label>
                                    <Form.Control
                                        type="number"
                                        min={0}
                                        max={999999}
                                        required
                                        onChange={(e) =>
                                            setPrice(e.target.value)
                                        }
                                    />
                                </Form.Group>

                                <Form.Group
                                    className="d-flex gap-2"
                                    controlId="productStock"
                                >
                                    <Form.Label>Stock: </Form.Label>
                                    <Form.Control
                                        type="number"
                                        min={0}
                                        max={999}
                                        required
                                        onChange={(e) =>
                                            setStock(e.target.value)
                                        }
                                    />
                                </Form.Group>
                            </Col>
                        </Row>

                        <hr />

                        <h2>Product Details</h2>
                        <Form.Group className="mb-3" controlId="productDesc">
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Long description"
                                required
                                onChange={(e) => setDesc(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="productBrand">
                            <Form.Label>Brand</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Brand"
                                onChange={(e) => setMarca(e.target.value)}
                            />
                        </Form.Group>

                        <Container className="d-flex gap-3 p-0 justify-content-center">
                            <Form.Group
                                className="mb-3 me-auto w-100"
                                controlId="productSize"
                            >
                                <Form.Label>Size</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="cm"
                                    onChange={(e) => setTamaño(e.target.value)}
                                />
                            </Form.Group>

                            <Form.Group
                                className="mb-3 w-100"
                                controlId="productWeight"
                            >
                                <Form.Label>Weight:</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="kg"
                                    onChange={(e) => setPeso(e.target.value)}
                                />
                            </Form.Group>
                        </Container>

                        <Button
                            className="d-block mx-auto w-25"
                            onClick={() =>
                                setProductos([
                                    ...productos,
                                    {
                                        id: id,
                                        img: file,
                                        name: name,
                                        rate: rate,
                                        stock: stock,
                                        marca: marca,
                                        modelo: modelo,
                                        tamaño: tamaño,
                                        peso: peso,
                                        desc: desc,
                                        price: price,
                                        category: category,
                                        ruta: ruta,
                                    },
                                ])
                            }
                            variant="primary"
                        >
                            Add
                        </Button>
                    </Form>
                </Card>
            </Container>
        );
    }
    const [readOnly, setReadOnly] = useState(false);
    const [active, setActive] = useState(false);

    let { productoS } = useParams();
    let condicion;

    if (productoS != null) {
        condicion = productoS;
    } else {
        condicion = "";
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
        <Container className="d-flex p-3 w-100">
            <Container className="w-25 border rounded ms-0 brder">
                <h4 className="text-center mt-2">Filtros</h4>
                <Form.Group>
                    <Form.Label>Categories</Form.Label>
                    <Form.Select
                        type="select"
                        onChange={(e) => setSelectedTag(e.target.value)}
                    >
                        <option value="">Choose one</option>
                        {LP2.map((tags) => (
                            <option value={tags}>{tags}</option>
                        ))}
                    </Form.Select>
                    
                </Form.Group>
                <Form.Group className="d-block gap-1">
                    <Form.Label>Price: </Form.Label>
                    <Form.Range
                        controlId="maxCost"
                        min={40}
                        max={1000}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                    <p>Max cost: ${query}</p>
                </Form.Group>
            </Container>

            <Container>
                <Button
                    className="d-block m-2 ms-auto w-100"
                    onClick={() => setActive(!active)}
                >
                    Add product
                </Button>
                <Container className="p-0">
                    {active ? <NewProduct /> : <></>}
                </Container>
                <Container className="d-flex flex-wrap p-0">
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
                                <Button className="w-auto ms-auto mx-2">
                                    Edit
                                </Button>
                                <Button
                                    className="w-auto"
                                    onClick={() => removeItem(index)}
                                >
                                    Remove
                                </Button>
                                <Container className="p-0 w-100 ">
                                    <Card
                                        className="p-3 m-1 w-100"
                                        style={{
                                            textDecoration: "none",
                                            color: "black",
                                        }}
                                    >
                                        <Row>
                                            <Col>
                                                <Card.Img
                                                    src={product.img}
                                                    className="w-100"
                                                    alt="Card image"
                                                />
                                                <Card.ImgOverlay className=""></Card.ImgOverlay>
                                            </Col>
                                            <Col>
                                                <Card.Body>
                                                    <p>{product.name}</p>
                                                    <p>
                                                        Tags: {product.category}
                                                    </p>
                                                    <p>Rate: {product.rate}</p>
                                                    <p>
                                                        Stock: {product.stock}
                                                    </p>
                                                    <p>
                                                        Brand: {product.marca}
                                                    </p>
                                                    <p>
                                                        Size {product.tamaño}{" "}
                                                        Weight {product.peso}
                                                    </p>
                                                    <p></p>
                                                </Card.Body>
                                            </Col>
                                        </Row>
                                        <Card.Footer className="mt-3">
                                            {product.desc}
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
