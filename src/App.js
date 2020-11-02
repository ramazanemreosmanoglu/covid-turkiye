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
import Number from "./components/Number.jsx";
import axios from "axios";

class App extends React.Component {
  state = {};
  componentDidMount() {
    axios.get("https://covid19-api.org/api/status/TR")
      .then(res => {
        this.setState(res.data);
      });
  }

  render() {
    return (
      <React.Fragment>
        <div className="main">

          <Row>
            <Col>
              <Card className="cases">
                <Card.Header>Vaka</Card.Header>
                <Number number={this.state.cases} color="yellow"/>
              </Card>
            </Col>

            <Col>
              <Card className="deaths">
                <Card.Header>Olum</Card.Header>
                <Number number={this.state.deaths} color="red"/>
              </Card>
            </Col>

            <Col>
              <Card className="recovered">
                <Card.Header>Kurtarilan</Card.Header>
                <Number number={this.state.recovered} color="green"/>
              </Card>
            </Col>
          </Row>
        </div>

        <div className="end_texts">
          <p>Ramazan Emre Osmanoglu</p>
          <p>Kaynak: <a href="https://covid19-api.org/api/status/UA">https://covid19-api.org/api/status/UA</a></p>
        </div>
      </React.Fragment>
    )
  }
}

export default App;
