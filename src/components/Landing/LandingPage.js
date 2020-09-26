import React, { useState } from "react";

import "../../App.css";

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
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";
import LoginHooks from "../LoginHooks";
import "./Landing.css";
import { NavLink, Link } from "react-router-dom";

export default function LandingPage(props) {
  const [showsignup, setSignupShow] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [validated, setValidated] = useState(false);
  const [errors, setError] = useState([]);

  const handleNameChange = (e) => {
    setUsername((e.target.name = e.target.value));
  };

  const handleEmailChange = (e) => {
    setEmail((e.target.name = e.target.value));
  };

  const handlePasswordChange = (e) => {
    setPassword((e.target.name = e.target.value));
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword((e.target.name = e.target.value));
  };

  const handleFormSubmit = (e) => {
    const form = e.currentTarget;
    e.preventDefault();

    if (form.checkValidity === false) {
      e.stopPropagation();
    }

    if (password !== confirmPassword) {
      const err = ["Password Don't match"];
      setError(err);
    }

    setValidated(true);
  };

  const handleSubmit = (e) => {
    const form = e.currentTarget;
    e.preventDefault();

    if (form.checkValidity === false) {
      e.stopPropagation();
    }

    setValidated(true);
  }

  return (
    <div className="landing-body">
      <Container className="landing-container">
        <Navbar expand="lg">
          <Navbar.Brand href="#Home" className="navbar-logo">
            <NavLink exact to="/home">
              ROADABLE
            </NavLink>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="">
              <Nav.Link>
                <NavLink
                  exact
                  to="/home"
                  activeClassName="selected"
                  className="hovered"
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
              <Nav.Link id="sign-up-cta" onClick={() => setSignupShow(true)}>
                Sign Up
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <div id="access-grid">
          <Row id="tag">
            <Col sm={12} md={5}>
              <h1 className="h2">Better Roads For A Safer Drive.</h1>
              <p>
                I was part of something special. I was part of something
                special. You're a very talented young man, with your own clever
                thoughts and ideas. Do you need a manager? Must go faster... go,
                go, go, go, go! Forget the fat lady! You're obsessed with the
                fat lady! Drive us out of here!
              </p>
              <div id="report" className="">
                <Button
                  style={{
                    backgroundColor: "#912cee",
                    border: "none",
                  }}
                  onClick={() => setSignupShow(true)}
                >
                  <Nav.Link>
                    <NavLink exact to="/report" className="report-hover">
                      + REPORT
                    </NavLink>
                  </Nav.Link>
                </Button>
              </div>
            </Col>
            <Col sm={12} md={7} className="login-box">
              <Card>
                <Card.Body>
                  <Card.Text>LOGIN</Card.Text>
                  <Form
                    onSubmit={handleSubmit}
                    noValidate
                    validated={validated}
                  >
                    <Form.Group controlId="formBasicEmail">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        value={email}
                        onChange={handleEmailChange}
                        required
                        className="email-required"
                      />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        type="password"
                        name="password"
                        value={password}
                        onChange={handlePasswordChange}
                        required
                      />
                    </Form.Group>
                    <Button
                      className="login-btn"
                      variant="primary"
                      type="submit"
                    >
                      LOGIN
                    </Button>
                  </Form>
                  <div className="or-text">
                    <h4>OR</h4>
                  </div>
                  <LoginHooks>Sign In with Google</LoginHooks>
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
            <Form onSubmit={handleFormSubmit} noValidate validated={validated}>
              {errors.length > 0 && (
                <ListGroup>
                  {errors.map((err, index) => {
                    return (
                      <ListGroupItem
                        style={{ color: "crimson", fontWeight: "700", marginBottom:"1rem" }}
                        key={index}
                      >
                        {err}
                      </ListGroupItem>
                    );
                  })}
                </ListGroup>
              )}
              <Form.Group controlId="formBasicUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  required
                  type="text"
                  name="username"
                  value={username}
                  onChange={handleNameChange}
                />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  required
                  type="email"
                  name="email"
                  value={email}
                  onChange={handleEmailChange}
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  required
                  type="password"
                  name="password"
                  value={password}
                  onChange={handlePasswordChange}
                />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  required
                  type="password"
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange}
                />
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
              <LoginHooks>Sign Up with Google</LoginHooks>
              <div className="mt-5">
                <Form.Text className="text-muted" style={{ display: "inline" }}>
                  Already have an account?
                </Form.Text>
                <span>
                  <Nav.Link className="access-link">
                    <Link to="/">Login</Link>
                  </Nav.Link>
                </span>
              </div>
            </Form>
          </Modal.Body>
        </Modal>
      </Container>
    </div>
  );
}
