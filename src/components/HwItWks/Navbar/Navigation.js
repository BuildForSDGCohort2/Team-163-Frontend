import React, { useState } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { Navs, Navlist, SButton } from "../../StyledComponents";
// import "../../../index.css";
import {
  Nav,
  Button,
  Form,
  Modal,
} from "react-bootstrap";
import LoginHooks from "../../LoginHooks";

const Navigation = () => {
  const [showsignup, setSignupShow] = useState(false);
  return (
    <>
      <Navs>
        <Link className="logo" to="/home">
          ROADABLE
        </Link>
        <Navlist>
          <Menulink to="/home" label="HOME" />
          <Menulink
            to="/how-it-works"
            label="HOW IT WORKS"
            activeOnlyWhenExact={true}
          />
          <Menulink to="/about" label="ABOUT US" />
        </Navlist>
        <Navlist access>
          <li>
            <Link to="/login">
              <SButton access>LOGIN</SButton>
            </Link>
          </li>
          <li onClick={() => setSignupShow(true)}>
            <Link to="/signup">
              <SButton access>SIGN UP</SButton>
            </Link>
          </li>
        </Navlist>
      </Navs>
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
    </>
  );
};

const Menulink = ({ label, to, activeOnlyWhenExact }) => {
  let match = useRouteMatch({
    path: to,
    exact: activeOnlyWhenExact,
  });

  return (
    <li className={match ? "active" : "links"}>
      <Link to={to}>{label}</Link>
    </li>
  );
};

export default Navigation;
