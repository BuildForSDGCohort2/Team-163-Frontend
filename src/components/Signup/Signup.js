import React from "react";

import "../../App.css";
import "./Signup.css";
import {
  Nav,
  Button,
  Card,
  Form,
} from "react-bootstrap";
import LoginHooks from "../LoginHooks";
import { Link } from "react-router-dom";

export default function Signup(props) {
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
              <div className="or-text">
                <h4>OR</h4>
              </div>
              <LoginHooks>Sign Up with Google</LoginHooks>
              <div className="mt-5">
                <Form.Text className="text-muted" style={{ display: "inline" }}>
                  Already have an account?
                </Form.Text>
                <span>
                  <Nav.Link className="access-link">Login</Nav.Link>
                </span>
              </div>
            </Form>
          </Card.Body>
        </Card>
      </main>
    </div>
  );
}
