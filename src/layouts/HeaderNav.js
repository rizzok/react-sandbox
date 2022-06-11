import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavStyled = styled.nav``;

const LinkStyled = styled(NavLink)`
  padding: 0.7rem 1rem;
  text-decoration: none;
  color: #211a1d;
  border-radius: 6px;
  font-weight: bold;
  transition: all 0.1s;

  &:hover,
  &.active {
    background-color: var(--medium-state-blue);
    color: white;
  }
`;

export const HeaderNav = () => {
  return (
    <NavStyled>
      <LinkStyled to="/">Home</LinkStyled>{" "}
      <LinkStyled to="about">About</LinkStyled>{" "}
      <LinkStyled to="contact">Contact</LinkStyled>
    </NavStyled>
  );
};
