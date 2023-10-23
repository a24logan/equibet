import "./cart-item-styles.scss";

const CartItem = ({ CartItem }) => {
  const { name, imageUrl, price, quantity } = CartItem;
  return (
    <div className="cart-item-container">
      <img src={imageUrl} alt="name"></img>
      <div className="item-details">
        <h2 className="name">{name}</h2>
        <span className="price">
          {quantity} x {price}
        </span>
      </div>
    </div>
  );
};
export default CartItem;
