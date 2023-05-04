import React from "react";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import Rating from "./Rating";
import { CartState } from "../context/Context";

const SingleProduct = ({ prod }) => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  console.log(cart);

  return (
    <div className="products">
      <Card className="singleCard">
        <Card.Img variant="top" src={prod.image} />
        <Card.Body>
          <Card.Title>{prod.name}</Card.Title>
          <Card.Subtitle>
            <span>{"£" + prod.price.split(".")[0]}</span>
            {prod.fastDelivery ? (
              <div>Fast Delivery</div>
            ) : (
              <div>4 Days delivery</div>
            )}
            <Rating rating={prod.rating} />
          </Card.Subtitle>
          <Card.Text></Card.Text>
          {cart.some((p) => p.id === prod.id) ? (
            <Button
              onClick={() => {
                dispatch({
                  type: "REMOVE_FROM_CART",
                  payload: prod,
                });
              }}
              variant="danger"
            >
              Remove from cart
            </Button>
          ) : (
            <Button
              onClick={() => {
                dispatch({
                  type: "ADD_TO_CART",
                  payload: prod,
                });
              }}
              disabled={!prod.inStock}
              variant="primary"
            >
              {" "}
              {!prod.inStock ? "Out of Stock" : "Add to card"}
            </Button>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default SingleProduct;
