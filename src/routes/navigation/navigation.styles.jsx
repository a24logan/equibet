import { NavLink } from "react-router-dom";
import { styled } from "styled-components";
export const NavigationContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 20px 40px;

  align-items: center;
`;

export const LogoContainer = styled(NavLink)`
  height: 100%;
  width: 70px;
  color: white;
  &.active {
    color: orange;
    font-weight: bold;
  }
`;

export const NavLinksContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
`;
export const NaviLink = styled(NavLink)`
  cursor: pointer;
  padding: 0px 10px;
  color: white;
  &.active {
    color: orange;
  }
`;
