import "./App.css";
import React from "react";
import { ProductState } from "./Context/Index";

function App() {
  const { state, dispatch } = ProductState();

  console.log(state);

  function handleClick(item) {
    dispatch({ type: "AddCart", cartItem: { name: item, amount: 1 } });
  }

  function handleDelete(item) {
    dispatch({ type: "DeleteCart", item });
  }
  return (
    <>
      {state.product.map((item) => (
        <>
          <li onClick={handleClick.bind(null, item.name)}>{item.name}</li>
        </>
      ))}

      <h1>cart</h1>
      <>
        {state.cart.map((item) => (
          <li onClick={handleDelete.bind(null, item)}>
            {item.name}
            {item.amount}
          </li>
        ))}
      </>
    </>
  );
}

export default App;
