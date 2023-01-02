import { useState } from "react";
import styled from "styled-components";
import { VerticalBar } from "../VerticalBar";
import { LinkStyleless } from "../LinkStyleless";
import Burguer from "./Burguer";

const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;

  @media ${({ theme }) => theme.devices.tablet} {
    flex: 1 0 25%;
    height: 100vh;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
`;

const NavList = styled.ul`
  font-family: ${({ theme }) => theme.fonts.Heading4Regular.fontFamily};
  font-weight: ${({ theme }) => theme.fonts.Heading4Regular.fontWeight};
  font-size: ${({ theme }) => theme.fonts.Heading4Regular.fontSize};
  line-height: ${({ theme }) => theme.fonts.Heading4Regular.lineHeight};
  list-style-type: none;
  text-align: left;
  border-left: 1px solid;
  border-left-color: ${({ theme }) => theme.colors.NeutralsN50};
  background-color: ${({ theme }) => theme.colors.NeutralsN0};

  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: calc(100vw * 0.6);
  margin: 0;
  padding-left: ${({ theme }) => theme.sizes.Size7};

  display: flex;
  flex-direction: column;
  justify-content: center;

  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.3s ease-in-out;

  @media ${({ theme }) => theme.devices.tablet} {
    top: unset;
    right: unset;
    position: unset;
    width: unset;
    padding-left: unset;
    border-left: unset;
    display: flex;
    text-align: right;
    transform: unset;
  }
`;

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <Nav>
      <Burguer open={open} setOpen={setOpen} />
      <NavList open={open}>
        <li>
          <LinkStyleless>Home</LinkStyleless>
        </li>
        <li>
          <LinkStyleless>Portfólio</LinkStyleless>
        </li>
        <li>
          <LinkStyleless>Currículo</LinkStyleless>
        </li>
      </NavList>
      <VerticalBar />
    </Nav>
  );
};

export default Navbar;
