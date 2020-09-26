import React, {useState} from "react";

import "../../App.css";
import "./Login.css";
import {
  Button,
  Card,
  Form,
} from "react-bootstrap";
import LoginHooks from "../LoginHooks";
import { Link } from "react-router-dom";


export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validated, setValidated] = useState(false);

  const handleEmailChange = (e) => {
    setEmail((e.target.name = e.target.value));
  };

  const handlePasswordChange = (e) => {
    setPassword((e.target.name = e.target.value));
  };

  const handleSubmit = (e) => {
    const form = e.currentTarget;
    e.preventDefault();

    if (form.checkValidity === false) {
      e.stopPropagation();
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
            <Card.Text>LOGIN</Card.Text>
            <Form onSubmit={handleSubmit} noValidate validated={validated}>
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
              <Button className="login-btn" variant="primary" type="submit">
                LOGIN
              </Button>
            </Form>
            <div className="or-text">
              <h4>OR</h4>
            </div>
            <LoginHooks>Sign In with Google</LoginHooks>
          </Card.Body>
        </Card>
      </main>
    </div>
  );
}
