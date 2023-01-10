import 'bootstrap/dist/css/bootstrap.css';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Row from 'react-bootstrap/Row';

const Footer = () => {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };
    return (
        <div style={{}}>
                <Row>
                    <Col sm={4} style={{
                        backgroundColor: 'rgb(13, 13, 75)', padding: "25px 5px 200px 10px", color: "white"
                    }}>
                        <h3>NOUS ECRIRE</h3>
                        <hr />
                        <p>Envoyer nous vos demandes</p>
                    </Col>
                    <Col sm={8} style={{
                        backgroundColor: '#cfcccf',
                    }}>
                        <Form noValidate validated={validated} onSubmit={handleSubmit} style={{ padding: "25px" }}>
                            <Row className="mb-3">
                                <Form.Group as={Col} md="6" controlId="validationCustom01">
                                    <Form.Control
                                        required
                                        type="text"
                                        defaultValue="Nom"
                                    />
                                </Form.Group>
                                <Form.Group as={Col} md="6" controlId="validationCustom01">
                                    <Form.Control
                                        required
                                        type="email"
                                        defaultValue="Email"
                                    />
                                </Form.Group>
                            </Row>
                            <Row className="mb-3">
                                <Form.Group as={Col} md="6" controlId="validationCustom01">
                                    <Form.Control
                                        required
                                        type="text"
                                        defaultValue="Telephone"
                                    />
                                </Form.Group>
                                <Form.Group as={Col} md="6" controlId="validationCustom01">
                                    <Form.Control
                                        required
                                        type="text"
                                        defaultValue="Sujet"
                                    />
                                </Form.Group>
                            </Row>
                            <FloatingLabel
                                controlId="floatingTextarea"
                                label="Message"
                                className="mb-3"
                            >
                                <Form.Control as="textarea" placeholder="Leave a comment here"  style={{ height: '100px' }} />
                            </FloatingLabel>
                            <br />
                            <Button type="submit" style={{backgroundColor : 'red', borderColor: 'red', borderRadius: "0", padding: "8px 30px", textTransform: "uppercase"}}>Envoyer</Button>
                        </Form>
                    </Col>
                </Row>
        </div>
    )
}

export default Footer
