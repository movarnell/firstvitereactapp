import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <div className="container">
        <div className="row">
            <div className="col">
          <img
            src="../public/vite.svg"
            alt="Vite Logo"
            className="vite-logo logoImage img-fluid"
          />
          <h1>Vite Test App</h1>
          <Link to="/">
            <Button variant="primary" className="fw-bold m-2">
              Home
            </Button>
          </Link>
          <Link to="/emailform">
            <Button variant="primary" className="fw-bold m-2">
              Email Form
            </Button>
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
