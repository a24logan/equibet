import "./cart-dropdown.styles.scss";
import Button from "../button/button.component";

const CartDropdown = () => {
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items"></div>
      <Button>
        <div style={{ fontSize: "12px" }}>Go To Checkout</div>
      </Button>
    </div>
  );
};

export default CartDropdown;
