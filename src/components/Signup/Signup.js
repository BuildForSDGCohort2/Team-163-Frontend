import React, {useState} from "react";

import "../../App.css";
import "./Signup.css";
import {
  Nav,
  Button,
  Card,
  Form,
  ListGroup, ListGroupItem
} from "react-bootstrap";
import LoginHooks from "../LoginHooks";
import { Link } from "react-router-dom";

export default function Signup(props) {
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

  return (
    <div className="wrapper">
      <main>
        <header>
          <Link to="/">ROADABLE</Link>
        </header>

        <Card>
          <Card.Body>
            <Card.Text>SIGN UP</Card.Text>
            <Form onSubmit={handleFormSubmit} noValidate validated={validated}>
              {errors.length > 0 && (
                <ListGroup>
                  {errors.map((err, index) => {
                    return (
                      <ListGroupItem
                        style={{
                          color: "crimson",
                          fontWeight: "700",
                          marginBottom: "1rem",
                        }}
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
                  type="text"
                  required
                  name="username"
                  value={username}
                  onChange={handleNameChange}
                />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={email}
                  onChange={handleEmailChange}
                  required
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
              <div className="or-text">
                <h4>OR</h4>
              </div>
              <LoginHooks>Sign Up with Google</LoginHooks>
              <div className="mt-5">
                <Form.Text className="text-muted" style={{ display: "inline" }}>
                  Already have an account?
                </Form.Text>
                <span>
                  <Nav.Link className="access-link">
                    <Link to="/login">Login</Link>
                  </Nav.Link>
                </span>
              </div>
            </Form>
          </Card.Body>
        </Card>
      </main>
    </div>
  );
}
