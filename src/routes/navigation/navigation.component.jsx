import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";

import { minidenticon } from "https://cdn.jsdelivr.net/npm/minidenticons@4.2.0/minidenticons.min.js";

import { useContext, useMemo } from "react";
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { CartContext } from "../../contexts/cart.context";
import {
  LogoContainer,
  NaviLink,
  NavLinksContainer,
  NavigationContainer,
} from "./navigation.styles";
import "./navigation.css";
const MinidenticonImg = ({ username, saturation, lightness, ...props }) => {
  const svgURI = useMemo(
    () =>
      "data:image/svg+xml;utf8," +
      encodeURIComponent(minidenticon(username, saturation, lightness)),
    [username, saturation, lightness]
  );
  return <img src={svgURI} alt={username} {...props} />;
};

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);
  console.log(currentUser);
  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">Casino</LogoContainer>
        <NavLinksContainer>
          <NaviLink to="/shop">Shop</NaviLink>
          {currentUser ? (
            <NaviLink as="span" onClick={signOutUser}>
              Sign Out
            </NaviLink>
          ) : (
            <NaviLink to="/auth">Sign In</NaviLink>
          )}
          <MinidenticonImg
            username={currentUser ? currentUser.email : "shlok"}
            saturation="90"
            width="50"
            height="25"
          />
          
          {/* <CartIcon></CartIcon> */}
        </NavLinksContainer>
        {/* {isCartOpen && <CartDropdown></CartDropdown>} */}
      </NavigationContainer>
      <Outlet></Outlet>
    </Fragment>
  );
};

export default Navigation;
