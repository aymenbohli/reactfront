import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

function Footer() {
    return (
        <div class="footer">
        <Container>
        <Row>
        <Col xs={4} md={4}>
        <h5>Qu'est-ce que le Lorem Ipsum?</h5>
   <p>Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise râce à la vente de feuilles Letraset contenant des passages
    </p> </Col>
        <Col xs={4} md={4}>
            <h5>Qu'est-ce que le Lorem Ipsum?</h5>
    <p>
    Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise râce à la vente de feuilles Letraset contenant des passages
    </p>
    </Col>
        <Col xs={4} md={4}>
            <h5>Qu'est-ce que le Lorem Ipsum?</h5>
        <p>
        Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise râce à la vente de feuilles Letraset contenant des passages
       </p>
        </Col>
    </Row>
    <Row>
    <Col xs={12} md={12}>
            <p class="copiry">BHA</p>
        </Col>
        </Row>
    </Container>
    </div>
);
}

export default Footer;
