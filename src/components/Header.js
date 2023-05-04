import React from "react";
import { Button, FormControl } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { Navbar, Badge, Nav, Dropdown } from "react-bootstrap";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { CartState } from "../context/Context";
import DeleteIcon from "@mui/icons-material/Delete";

const Header = () => {
  const {
    state: { cart },
    dispatch,
    productDispatch
  } = CartState();

  return (
    <Navbar fixed="top" bg="dark" variant="dark" style={{ height: 70 }}>
      <Container>
        <Navbar.Brand>
          {" "}
          <Link style={{textDecoration: "none", color: "white"}} to="/">Shopping Cart </Link>
        </Navbar.Brand>
        <Navbar.Text className="search">
          <FormControl
            style={{ width: 350 }}
            placeholder="Search a product"
            className="m-auto"
            onChange={(e) => productDispatch({
              type:"FILTER_BY_SEARCH",
              payload: e.target.value.toLowerCase()
            })}
          />
        </Navbar.Text>
        <Nav>
          <Dropdown align="end">
            <Dropdown.Toggle variant="success">
              <ShoppingCartIcon />
              <Badge>{cart.length}</Badge>
            </Dropdown.Toggle>
            <Dropdown.Menu
              style={{ marginTop: 15, width: 400, paddingTop: 20 }}
            >
              {cart.length > 0 ? (
                <>
                  {cart.map((prod) => (
                    <span className="cartItem" key={prod.id}>
                      <img
                        src={prod.image}
                        className="cartItemImg"
                        alt={prod.name}
                      />
                      <div className="cartItemDetail">
                        <span>{prod.name}</span>
                        <span>{"£" + prod.price.split(".")[0]}</span>
                      </div>
                      <DeleteIcon style={{cursor: "pointer"}}
                        onClick={() =>
                          dispatch({
                            type: "REMOVE_FROM_CART",
                            payload: prod,
                          })
                        }
                      />
                    </span>
                  ))}
                  <Link to="/cart">
                    <Button style={{width: "95%" , margin: "0 10px" }}>Procced to Cart </Button>
                  </Link>
                </>
              ) : (
                <span style={{ padding: 10 }}>Cart is empty</span>
              )}
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
