import React from "react";

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

  return (
    <div className="wrapper">
      <main>
        <header>
          <Link to="/">ROADABLE</Link>
        </header>

        <Card>
          <Card.Body>
            <Card.Text>LOGIN</Card.Text>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  required
                  className="email-required"
                />
                {/* <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text> */}
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" required />
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
