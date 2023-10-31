import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";
import Logo from "../../assets/logo.png";
// import { ReactComponent as CrwnLogo } from "../../assets/logo.png";

import { useContext } from "react";
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { CartContext } from "../../contexts/cart.context";
import {
  LogoContainer,
  NavLink,
  NavLinksContainer,
  NavigationContainer,
} from "./navigation.styles";
const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <img
            src={Logo}
            style={{ width: "150px" }}
            alt=""
            className="logo"
          ></img>
        </LogoContainer>
        <NavLinksContainer>
          <NavLink to="/shop">SHOP</NavLink>
          {currentUser ? (
            <NavLink as="span" onClick={signOutUser}>
              Sign Out
            </NavLink>
          ) : (
            <NavLink to="/auth">Sign In</NavLink>
          )}
          <CartIcon></CartIcon>
        </NavLinksContainer>
        {isCartOpen && <CartDropdown></CartDropdown>}
      </NavigationContainer>
      <Outlet></Outlet>
    </Fragment>
  );
};

export default Navigation;
