import React from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function EmailForm() {
  return (
    <div>
      <Form className="border border-dark border-1 shadow p-3">
        <div className="d-flex justify-content-center m-3">
          <div className="row">
            <div className="d-flex justify-content-center col-12">
              <img
                src="../public/vite.svg"
                alt="Vite Logo"
                className="vite-logo logoImage img-fluid"
              />
            </div>
          </div>
        </div>

        <h1 className="text-center">Email Form</h1>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Text className="text-muted">
            This is an exercise in using Vite to create a React app.
          </Form.Text>
          <br />
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Link to="/">
          <Button variant="primary" className="fw-bold m-2">
            Home
          </Button>
          <Button className="fw-bold shadow border border-1" type="submit">
            Submit
          </Button>
        </Link>
      </Form>
    </div>
  );
}
