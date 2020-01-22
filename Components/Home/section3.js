import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

function Section3() {
    return (
        <div class="section3">
        <Container>
        <Row>
        <Col xs={6} md={6}>
        <h2>Qu'est-ce que le Lorem Ipsum?</h2>
    <p>
    Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.</p>
    </Col>
    <Col xs={6} md={6}>
        <Image width="100%" src="http://www.newsmaster.be/wp-content/uploads/2014/11/img-7.jpg" rounded  />
    </Col>
    </Row>
    </Container>
    </div>
);
}

export default Section3;
