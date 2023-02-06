export default function (state, action) {
  if (action.type === "AddCart") {
    const index = state.cart.findIndex(
      (item) => item.name === action.cartItem.name
    );
    console.log(index);
    if (index !== -1) {
      const cartItem = state.cart[index];
      const updatedItem = { ...cartItem, amount: cartItem.amount + 1 };
      const updatedItems = [...state.cart];
      updatedItems[index] = updatedItem;

      return { ...state, cart: updatedItems };
    } else {
      return { ...state, cart: [...state.cart, action.cartItem] };
    }
  }

  if (action.type === "DeleteCart") {
    const filtered = state.cart.filter((item) => item !== action.item);
    return { ...state, cart: filtered };
  }
}
