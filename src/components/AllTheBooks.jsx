import { Badge, Button, Card, Row, Col, Container, Image } from "react-bootstrap";
import scifi from "../data/scifi.json";
/* import romance from "../data/romance.json";
import horror from "../data/horror.json";
import history from "../data/history.json";
import fantasy from "../data/fantasy.json"; */
import { Component } from "react";

class AllTheBooks extends Component {
  state = { selectedBook: null };

  render() {
    console.log("Books", scifi);
    return (
      <Container>
        <Row className="g-4 my-5">
          {scifi.slice(0, 10).map((book, index) => (
            <Col key={`book-${index}`} xs={12} sm={6} md={3} className="text-center">
              <Card className="mb-3 h-100">
                <div className="">
                  <Card.Img className="card-img-ratio" variant="top" src={book.img} alt={book.title} />
                </div>
                <Card.Body>
                  <Card.Title>{book.title}</Card.Title>
                  <Card.Text>{book.price} €</Card.Text>
                  <Button variant="primary">Add to the cart</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default AllTheBooks;
