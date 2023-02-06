export default function (state, action) {
  if (action.type === "AddCart") {
    const index = state.cart.findIndex(
      (item) => item.name === action.cartItem.name
    );
    if (index !== -1) {
      const cartItem = state.cart[index];
      const updatedItem = { ...cartItem, amount: cartItem.amount + 1 };
      const updatedItems = [...state.cart];
      updatedItems[index] = updatedItem;

      return { product: state.product, cart: updatedItems };
    } else {
      return { product: state.product, cart: [...state.cart, action.cartItem] };
    }
  }

  if (action.type === "DeleteCart") {
    const index = state.cart.findIndex(
      (item) => item.name === action.item.name
    );
    const cartItem = state.cart[index];
    if (cartItem && cartItem.amount > 1) {
      const updatedCart = { ...cartItem, amount: cartItem.amount - 1 };
      let updatedItem = [...state.cart];
      updatedItem[index] = updatedCart;
      return { ...state, cart: updatedItem };
    } else {
      const filtered = state.cart.filter((item) => item !== action.item);
      return { ...state, cart: filtered };
    }
  }
}
