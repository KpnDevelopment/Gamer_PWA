import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigationbar() {
  const liStyle = {
    color: "white",
    margin: "1rem",
  };

  return (
    <Navbar
      className="navigation"
      fixed="top"
      style={{ zIndex: "999" }}
      bg="dark"
      variant="dark"
    >
      <Navbar.Brand className="brand">
        {" "}
        Fo<span style={{ color: "red" }}>r</span>tun
        <span style={{ color: "red" }}>a</span>te
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Link className="link" to="/">
          <li style={liStyle}>Home</li>
        </Link>
        <Link className="link" to="/shop">
          <li style={liStyle}>shop</li>
        </Link>

        <Link className="link" to="/about">
          <li style={liStyle}>about</li>
        </Link>
      </Nav>
      {/* <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button className="search-btn" variant="danger">
          Search
        </Button>
      </Form> */}
    </Navbar>
  );
}

export default Navigationbar;
