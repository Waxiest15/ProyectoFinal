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

    function AvailableCategoires() {
        return (
            <Form.Group>
                <Form.Label>Available Categories</Form.Label>
                <Form.Select
                    type="select"
                    onChange={(e) => setSelectedTag(e.target.value)}
                >
                    <option value="">Choose one</option>
                    {noDuplicates.map((tags) => (
                        <option value={tags}>{tags}</option>
                    ))}
                </Form.Select>
            </Form.Group>
        );
    }

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
                <Container className="p-0 my-3">
                    <Row>
                        <Col className="align middle my-auto">
                            <Form.Group className="d-flex gap-2">
                                <Form.Label className="">Category: </Form.Label>
                                <Form.Control
                                    className="w-100"
                                    type="text"
                                    onChange={(e) =>
                                        setHelper(e.target.value.toString())
                                    }
                                />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Button
                                onClick={() =>
                                    setNoDuplicates([...noDuplicates, helper])
                                }
                            >
                                Add
                            </Button>
                        </Col>
                    </Row>
                </Container>
                <Container className="d-flex flex-wrap p-0">
                    <Row className="w-100">
                        <Col className="">
                            <AvailableCategoires />
                        </Col>
                        <Col className="d-flex align-middle">
                            <Form.Group className="">
                                <Form.Label>Eliminar</Form.Label>
                                <Container className="d-flex gap-2 p-0">
                                    <Form.Control
                                        readOnly
                                        value={selectedTag}
                                    />
                                    <Button
                                        onClick={() =>
                                            setNoDuplicates(
                                                noDuplicates.filter(
                                                    (erase) =>
                                                        !erase.includes(
                                                            selectedTag
                                                        )
                                                )
                                            )
                                        }
                                    >
                                        Quitar
                                    </Button>
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
