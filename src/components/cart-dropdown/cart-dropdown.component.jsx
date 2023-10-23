import "./cart-dropdown.styles.scss";
import Button from "../button/button.component";
import { useContext, useState } from "react";
import { CartContext } from "../../contexts/cart.context";

const CartDropdown = () => {
  const { cart } = useContext(CartContext);
  const { currentCart, setCurrentCart } = useState(cart);
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items"></div>
      {currentCart && currentCart.map((product) => <div>{product.name}</div>)}
      <div></div>
      <Button>
        <div style={{ fontSize: "12px" }}>Go To Checkout</div>
      </Button>
    </div>
  );
};

export default CartDropdown;
