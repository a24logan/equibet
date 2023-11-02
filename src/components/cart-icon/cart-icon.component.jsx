import "./cart-icon.styles.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const CartIcon = () => {
  const getCartCount = (cartItems) => {
    let currTotal = 0;
    for (const i in cartItems) {
      currTotal += cartItems[i].quantity;
    }
    return currTotal;
  };
  const { isCartOpen, setIsCartOpen, cartItems } = useContext(CartContext);
  return (
    <div
      className="cart-icon-container"
      onClick={() => {
        setIsCartOpen(!isCartOpen);
      }}
    >
      <ShoppingIcon className="shopping-icon"></ShoppingIcon>
      <span className="item-count">{getCartCount(cartItems)}</span>
    </div>
  );
};

export default CartIcon;
