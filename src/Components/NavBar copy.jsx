import React from "react";
import "../styles.css";
import { BsCart4 } from "react-icons/bs";
import { useState } from "react";
import { useShoppingCart } from "../Context/ShoppingContext";
import { Button, Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function NavBar() {
  //useState
  const [menu, setMenu] = useState("nav-menu");

  const { openCart, cartQuantity } = useShoppingCart();

  return (
    <NavbarBs className="bg-white shadow-sm mb-3" sticky="top">
      <Container>
        <Nav>
          <Nav.Link to="/" as={NavLink}>
            Home
          </Nav.Link>
          <Nav.Link to="/store" as={NavLink}>
            Store
          </Nav.Link>
          <Nav.Link to="/about" as={NavLink}>
            About
          </Nav.Link>
        </Nav>
      </Container>
      {cartQuantity > 0 && (
        <Button
          style={{ width: "3rem", height: "3rem", position: "relative" }}
          className="rounded-circle"
          variant="outline-primary"
          onClick={openCart}
        >
          <BsCart4 size={42} />
          <div
            className="rounded-circle bg-danger d-flex justify-content-center align-item-center"
            style={{
              color: "white",
              width: "1.5rem",
              height: "1.5rem",
              position: "absolute",
              bottom: 0,
              right: 0,
              transform: "translate(25%, 25%)",
            }}
          >
            {cartQuantity}
          </div>
        </Button>
      )}
    </NavbarBs>
  );
}

export default NavBar;
