import React, { useState } from "react";

import "../../App.css";
import "./Home.css";
import roadReport from "../../img/manifesto.png";
import roadCon from "../../img/road.png";
import trafficReport from "../../img/traffic.png";
import {
  Container,
  Navbar,
  Nav,
  Button,
  Row,
  Col,
  Card,
  Form,
  Modal,
} from "react-bootstrap";
import LoginHooks from "../LoginHooks";
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";
import { NavLink } from "react-router-dom";

const mapStyles = {
  width: "100%",
  height: "100%",
};

function Map() {
  return (
    <GoogleMap
      defaultZoom={10}
      style={mapStyles}
      defaultCenter={{
        lat: 6.41285,
        lng: 4.0876,
      }}
    ></GoogleMap>
  );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default function HomePage(props) {
  const [showsignup, setSignupShow] = useState(false);
  // const [showlogin, setLoginShow] = useState(false);

  return (
    <div className="home-body">
      <Container className="home-container">
        <Navbar expand="lg">
          <Navbar.Brand href="" className="navbar-logo">
            <NavLink exact to="/home">
              ROADABLE
            </NavLink>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="">
              <Nav.Link href="">
                <NavLink
                  exact
                  to="/home"
                  className="hovered"
                  activeClassName="selected"
                >
                  Home
                </NavLink>
              </Nav.Link>
              <Nav.Link href="">
                <NavLink exact to="/how-it-works" className="hovered">
                  How It Works
                </NavLink>
              </Nav.Link>
              <Nav.Link href="">
                <NavLink exact to="/about" className="hovered">
                  About Us
                </NavLink>
              </Nav.Link>
              <Nav.Link
                className="sign-up"
                href=""
                onClick={() => setSignupShow(true)}
              >
                Sign Up
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <div id="access-grid" style={{ marginBottom: "150px" }}>
          <Row id="tag" className="mb-5" style={{ textAlign: "left" }}>
            <Col sm={12}>
              <h1 className="h2 mb-3" style={{ maxWidth: "400px" }}>
                A simple and smart tool to help you travel safer.
              </h1>
              <div className="cta-box">
                <span style={{ marginRight: "4rem" }}>
                  <Button
                    className="cta-btn"
                    onClick={() => setSignupShow(true)}
                  >
                    <Nav.Link>
                      <NavLink exact to="/report" className="report-hover">
                        + REPORT
                      </NavLink>
                    </Nav.Link>
                  </Button>
                </span>
                <span>
                  <Button
                    className="cta-btn"
                    onClick={() => setSignupShow(true)}
                  >
                    <Nav.Link>VIEW MAP</Nav.Link>
                  </Button>
                </span>
              </div>
            </Col>
          </Row>
          <Row style={{ textAlign: "center" }} className="lg-view">
            <Col
              sm={12}
              lg={4}
              style={{
                backgroundColor: "#fa9917",
                height: "147px",
                textAlign: "center",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span>
                <img src={roadReport} alt="manifesto" height="80" />
              </span>
            </Col>
            <Col
              sm={12}
              lg={4}
              style={{
                backgroundColor: "#41d7e7",
                height: "147px",
                textAlign: "center",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span>
                <img src={roadCon} alt="road" height="80" />
              </span>
            </Col>
            <Col
              sm={12}
              lg={4}
              style={{
                backgroundColor: "#2bba3e",
                height: "147px",
                textAlign: "center",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span>
                <img src={trafficReport} alt="traffic" height="80" />
              </span>
            </Col>

            <Col
              sm={12}
              lg={4}
              style={{
                textAlign: "center",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              className="copy-card"
            >
              <h5 className="h5">Road Report</h5>
              <p>
                I was part of something special. I was part of something
                special. You're a very talented young man, with your own clever
                thoughts and ideas. Do you need a manager? Must go faster... go,
                go, go, go, go! Forget the fat lady!
              </p>
            </Col>
            <Col
              sm={12}
              lg={4}
              style={{
                textAlign: "center",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              className="copy-card"
            >
              <h5 className="h5">Road Condition</h5>
              <p>
                I was part of something special. I was part of something
                special. You're a very talented young man, with your own clever
                thoughts and ideas. Do you need a manager? Must go faster... go,
                go, go, go, go! Forget the fat lady!
              </p>
            </Col>
            <Col
              sm={12}
              lg={4}
              style={{
                textAlign: "center",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              className="copy-card"
            >
              <h5 className="h5">Traffic Report</h5>
              <p>
                I was part of something special. I was part of something
                special. You're a very talented young man, with your own clever
                thoughts and ideas. Do you need a manager? Must go faster... go,
                go, go, go, go! Forget the fat lady!
              </p>
            </Col>
          </Row>
          <div className="sm-view">
            <div className="road-report">
              <img src={roadReport} alt="manifesto" height="80" />
              <h5 className="h5">Road Report</h5>
              <p>
                I was part of something special. I was part of something
                special. You're a very talented young man, with your own clever
                thoughts and ideas. Do you need a manager? Must go faster... go,
                go, go, go, go! Forget the fat lady!
              </p>
            </div>

            <div className="road-condition">
              <img src={roadCon} alt="road" height="80" />
              <h5 className="h5">Road Condition</h5>
              <p>
                I was part of something special. I was part of something
                special. You're a very talented young man, with your own clever
                thoughts and ideas. Do you need a manager? Must go faster... go,
                go, go, go, go! Forget the fat lady!
              </p>
            </div>
            <div className="traffic-report">
              <img src={trafficReport} alt="traffic" height="80" />
              <h5 className="h5">Traffic Report</h5>
              <p>
                I was part of something special. I was part of something
                special. You're a very talented young man, with your own clever
                thoughts and ideas. Do you need a manager? Must go faster... go,
                go, go, go, go! Forget the fat lady!
              </p>
            </div>
          </div>
        </div>

        <Modal
          show={showsignup}
          onHide={() => setSignupShow(false)}
          dialogClassName="modal-60w"
          aria-labelledby="signup-modal"
          style={{ overflowY: "scroll" }}
        >
          <Modal.Header closeButton>
            <Modal.Title id="signup-modal">SIGN UP</Modal.Title>
          </Modal.Header>
          <Modal.Body scrollable>
            <Form>
              <Form.Group controlId="formBasicUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" />
                <Form.Text className="text-muted">
                  Your password should be at least 10 characters.
                </Form.Text>
              </Form.Group>
              <Button
                className="modal-signup-btn"
                variant="primary"
                type="submit"
              >
                SIGN UP
              </Button>
              or
              <LoginHooks />
              <div className="mt-5">
                <Form.Text className="text-muted" style={{ display: "inline" }}>
                  Already have an account?
                </Form.Text>
                <span>
                  <Nav.Link className="access-link">Login</Nav.Link>
                </span>
              </div>
            </Form>
          </Modal.Body>
        </Modal>

        {/* <Modal
          show={showlogin}
          onHide={() => setLoginShow(false)}
          dialogClassName="modal-60w"
          aria-labelledby="login-modal"
          style={{ overflowY: "scroll" }}
        >
          <Modal.Header closeButton>
            <Modal.Title id="login-modal">LOGIN</Modal.Title>
          </Modal.Header>
          <Modal.Body scrollable>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" />
              </Form.Group>
              <Button
                className="modal-signup-btn"
                variant="primary"
                type="submit"
              >
                LOGIN
              </Button>
              <div className="mt-5">
                <Form.Text
                  style={{ display: "inline" }}
                  className="text-muted"
                >
                  Don't have an account?
                </Form.Text>
                <Nav.Link className="access-link">Sign Up</Nav.Link>
              </div>
            </Form>
          </Modal.Body>
        </Modal> */}
      </Container>
      <Container fluid className="footer">
        <Row style={{ height: "-webkit-fill-available" }}>
          <Col sm={12} lg={9} className="map">
            <WrappedMap
              googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}
              `}
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `100%` }} />}
              mapElement={<div style={{ height: `100%` }} />}
            />
          </Col>
          <Col sm={12} lg={3}>
            <h3 className="h3 text-center">HOTSPOTS</h3>
            <div style={{ textAlign: "left" }}>
              <Card className="location-card">
                <Button className="location">Presidential Ave.</Button>
              </Card>
              <Card className="location-card">
                <Button className="location">Hospital Road</Button>
              </Card>
              <Card className="location-card">
                <Button className="location">Lake Blvd.</Button>
              </Card>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
