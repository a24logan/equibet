import "./cart-dropdown.styles.scss";
import { useNavigate } from "react-router-dom";
import Button from "../button/button.component";
import { useContext, useState } from "react";
import { CartContext } from "../../contexts/cart.context";
import CartItem from "../cart-item/cart-item.component";

const CartDropdown = () => {
  const navigate = useNavigate();

  const gotToCheckouthandler = () => {
    navigate("/checkout");
  };
  const { cartItems } = useContext(CartContext);
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} CartItem={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <Button style={{ fontSize: "12px" }} onClick={gotToCheckouthandler}>
        GO TO CHECKOUT
      </Button>
    </div>
  );
};

export default CartDropdown;
