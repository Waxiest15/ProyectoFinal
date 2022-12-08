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

import Data from "../JSONs/products.json";
import { ProductionQuantityLimits } from "@mui/icons-material";

const LP = Data.map((tags) => tags.category);
export let LP2 = [...new Set(LP)];

function SearchResult() {
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
            <Container>
                <Form.Group className="d-flex gap-2">
                    <Form.Label>categoria: </Form.Label>
                    <Form.Control
                        type="text"
                        onChange={(e) => setHelper(e.target.value.toString())}
                    />
                    <Button
                        className="d-block m-2 ms-auto "
                        onClick={() =>
                            setNoDuplicates([...noDuplicates, helper])
                        }
                    >
                        Add
                    </Button>
                    {/*SAbe */}
                </Form.Group>
                <Container className="d-flex flex-wrap">
                    <Row className="w-100">
                        <Col className="">
                            <Form.Group>
                                <Form.Label>Categorias</Form.Label>
                                <Form.Select
                                    type="select"
                                    onChange={(e) =>
                                        setSelectedTag(e.target.value)
                                    }
                                >
                                    <option value="">Seleccione una</option>
                                    {noDuplicates.map((tags) => (
                                        <option value={tags}>{tags}</option>
                                    ))}
                                </Form.Select>
                            </Form.Group>
                        </Col>
                        <Col className="d-flex align-middle">
                            <Form.Group className="">
                                <Form.Label>Eliminar</Form.Label>
                                <Container className="d-flex gap-2">

                                    <Form.Control
                                        readOnly
                                        value={selectedTag}
                                    />
                                    <Button onClick={()=>setNoDuplicates(noDuplicates.filter((erase)=>!erase.includes(selectedTag)))}>Quitar</Button>
                                </Container>
                            </Form.Group>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </Container>
    );
}

export default SearchResult;
