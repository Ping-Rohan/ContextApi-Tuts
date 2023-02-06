import { createContext, useReducer, useContext } from "react";
import productReducer from "./productReducer";
import { dummy } from "../DummyData";

const Products = createContext({
  product: [],
  cart: [],
  totalPrice: 0,
});

const initialState = {
  product: dummy,
  cart: [],
  totalPrice: 0,
};

const Context = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, initialState);

  return (
    <Products.Provider value={{ state, dispatch }}>
      {children}
    </Products.Provider>
  );
};

export default Context;

function ProductState() {
  return useContext(Products);
}

export { ProductState };
