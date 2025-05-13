import { Button, Card, Row, Col, Container, Dropdown } from "react-bootstrap";
import scifi from "../data/scifi.json";
import romance from "../data/romance.json";
import horror from "../data/horror.json";
import history from "../data/history.json";
import fantasy from "../data/fantasy.json";
import { Component } from "react";

class AllTheBooks extends Component {
  //default state
  state = {
    selectedCategory: "scifi",
    books: scifi
  };

  // function to change category
  handleCategoryChange = (category) => {
    let books;

    // switch case to select the books from that category
    switch (category) {
      case "romance":
        books = romance;
        break;
      case "horror":
        books = horror;
        break;
      case "history":
        books = history;
        break;
      case "fantasy":
        books = fantasy;
        break;
      default:
        books = scifi;
    }

    // update the state
    this.setState({
      selectedCategory: category,
      books: books
    });
  };

  render() {
    const { books } = this.state; // books to show
    console.log(books);

    return (
      <Container>
        {/* Buttons to select categories */}
        <div className="my-4 d-flex flex-wrap gap-2 justify-content-center">
          <Button variant="info" onClick={() => this.setState({ books: scifi })}>
            Sci-Fi
          </Button>
          <Button variant="danger" onClick={() => this.setState({ books: romance })}>
            Romance
          </Button>
          <Button variant="dark" onClick={() => this.setState({ books: horror })}>
            Horror
          </Button>
          <Button variant="warning" onClick={() => this.setState({ books: history })}>
            History
          </Button>
          <Button variant="success" onClick={() => this.setState({ books: fantasy })}>
            Fantasy
          </Button>
        </div>

        {/* or dropdown to select categeories */}
        <Dropdown onSelect={this.handleCategoryChange} className="my-3">
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Select Category
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item eventKey="scifi">Sci-Fi</Dropdown.Item>
            <Dropdown.Item eventKey="romance">Romance</Dropdown.Item>
            <Dropdown.Item eventKey="horror">Horror</Dropdown.Item>
            <Dropdown.Item eventKey="history">History</Dropdown.Item>
            <Dropdown.Item eventKey="fantasy">Fantasy</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        {/* books */}
        <Row className="g-4 my-5">
          {books.slice(0, 10).map((book, index) => (
            <Col key={`book-${index}`} xs={12} sm={6} md={3} className="text-center">
              <Card className="mb-3 h-100 shadow">
                <Card.Img className="card-img-ratio" variant="top" src={book.img} alt={book.title} />
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
