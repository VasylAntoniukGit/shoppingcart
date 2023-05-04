import React, { createContext, useContext, useReducer } from "react";
import { faker } from "@faker-js/faker";
import {cartReducer, productReducer} from "./Reducers";

const Cart = createContext();
faker.seed(99);
const Context = ({ children }) => {
  const products = [...Array(21)].map((_,i) => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: i%2 === 0 ? faker.image.transport() : faker.image.fashion(),
    inStock: faker.datatype.number({ min: 0, max: 15 }),
    fastDelivery: faker.datatype.boolean(),
    rating: faker.datatype.number({ min: 1, max: 5 }),
  }));

  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: [],
  });

  const [productState, productDispatch] = useReducer(productReducer, {
    byStock: false,
    byFastDelivery: false,
    byRating: 0,
    searchQuery: ""
  })

  return <Cart.Provider value={{ state, dispatch, productState, productDispatch }}>{children}</Cart.Provider>;
};

export default Context;
export const CartState = () =>  useContext(Cart);
