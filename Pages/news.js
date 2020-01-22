import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card'

class News extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount() {
        fetch("https://reqres.in/api/users?page=2")
            .then(res => res.json())
            .then(
                    (result) => {
                    this.setState({
                    isLoaded: true,
                    items: result.data
                });
            },
        (error) => {
            this.setState({
                isLoaded: true,
                error
            });
        }
    )
    }

    render() {
        const { error, isLoaded, items } = this.state;
                if (error) {
                    return <div>Erreur : {error.message}</div>;
                } else if (!isLoaded) {
                    return <div class="news">
                        <Container><div>Chargement…</div>
                        </Container></div>;
                } else {
                    return (
                        <div class="news">
                            <Container>
                                <Row class="card">
                                {items.map(item => (
                                <Col xs={4} md={4} className="cardnews">
                                <Card style={{width: '18rem'}} >
                                   <Card.Img variant="top" src={item.avatar} />
                                        <Card.Body>
                                        <Card.Title>{item.first_name} {item.last_name}</Card.Title>
                                    <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                    </Card.Text>
                                    </Card.Body>
                                </Card>
                                </Col>
                                ))}
                                </Row>
                            </Container>
                        </div>

        );
    }
    }
}

export default News;