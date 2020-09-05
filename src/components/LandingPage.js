import React, { useState } from "react";

import "../App.css";
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
import LoginHooks from "./LoginHooks"

export default function LandingPage(props) {
  const [showsignup, setSignupShow] = useState(false);

  return (
    <Container>
      <Navbar expand="lg">
        <Navbar.Brand href="#Home" className="navbar-logo">
          ROADABLE
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">How It Works</Nav.Link>
            <Nav.Link href="#">About Us</Nav.Link>
            <Nav.Link id="contact" href="#">
              Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <div id="access-grid">
        <Row id="tag">
          <Col sm={12} md={5}>
            <h1 className="h2">Better Roads For A Safer Drive.</h1>
            <p>
              I was part of something special. I was part of something special.
              You're a very talented young man, with your own clever thoughts
              and ideas. Do you need a manager? Must go faster... go, go, go,
              go, go! Forget the fat lady! You're obsessed with the fat lady!
              Drive us out of here!
            </p>
            <div id="sign-up" className="mb">
              <Button
                style={{
                  backgroundColor: "#912cee",
                  border: "none",
                }}
                onClick={() => setSignupShow(true)}
              >
                <Nav.Link>SIGN UP</Nav.Link>
              </Button>
            </div>
          </Col>
          <Col sm={12} md={7} className="login-box">
            <Card>
              <Card.Body>
                <Card.Text>LOGIN</Card.Text>
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
                    className="login-btn"
                    variant="primary"
                    type="submit"
                  >
                    LOGIN
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
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

    </Container>
  );
}
