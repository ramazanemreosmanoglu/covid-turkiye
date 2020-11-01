import logo from './logo.svg';
import './App.css';
import React from "react";
import {
  Button,
  Card,
  Navbar,
  Container,
  Row,
  Col,
} from "react-bootstrap";

class App extends React.Component {
  state = {
    cases: 0,
    deaths: 0,
    recovered: 0,
  };
  render() {
    return (
      <React.Fragment>
        <Navbar bg="primary">
          <Navbar.Brand href="/" className="brand">Covid Turkiye</Navbar.Brand>
        </Navbar>

        <Row>
          <Col>
            <Card className="cases">
              <Card.Header>Vaka</Card.Header>
            </Card>
          </Col>

          <Col>
            <Card className="deaths">
              <Card.Header>Vaka</Card.Header>
            </Card>
          </Col>

          <Col>
            <Card className="recovered">
              <Card.Header>Vaka</Card.Header>
            </Card>
          </Col>
        </Row>

        <Container>

        </Container>
      </React.Fragment>
    )
  }
}

export default App;
