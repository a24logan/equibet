import "./product-card.scss";
import Button from "../button/button.component";
import { CartContext } from "../../contexts/cart.context";
import { useContext } from "react";
const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { cart, setCart } = useContext(CartContext);

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={name}></img>
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button
        onClick={() => {
          console.log(cart);
          cart.push(product);
          setCart(cart);
        }}
        buttonType="inverted"
      >
        Add to card
      </Button>
    </div>
  );
};
export default ProductCard;
