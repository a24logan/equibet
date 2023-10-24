import "./product-card.scss";
import { CartContext } from "../../contexts/cart.context";
import { useContext } from "react";
import Button, { BUTTON_TYPES_CLASSES } from "../button/button.component";
const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);
  const addProductToCart = () => {
    addItemToCart(product);
  };
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={name}></img>
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button
        onClick={addProductToCart}
        buttonType={BUTTON_TYPES_CLASSES.inverted}
      >
        Add to card
      </Button>
    </div>
  );
};
export default ProductCard;
