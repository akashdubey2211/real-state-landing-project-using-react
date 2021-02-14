import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { GoThreeBars } from "react-icons/go";
import { FaTimes } from "react-icons/fa";
import {
  NavbarContainer,
  NavbarMenu,
  NavLogo,
  Nav,
  NavbarSearch,
  SearchInput,
  SearchLogo,
  NavLink,
  NavbarItem,
  BtnWrapper,
  Button,
  Hamburger,
  HamburgerWrap,
} from "./navbarElements";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!open);
  };
  return (
    <>
      <NavbarContainer active={open}>
        <Nav>
          <NavLogo to="/home">Find-Home</NavLogo>

          <HamburgerWrap>
            {open ? (
              <FaTimes onClick={toggleOpen} />
            ) : (
              <FaBars onClick={toggleOpen} />
            )}
          </HamburgerWrap>

          <NavbarMenu active={open}>
            <NavbarItem>
              <NavLink to="/games">Home</NavLink>
            </NavbarItem>
            <NavbarItem>
              <NavLink to="/category">Sell My Home</NavLink>
            </NavbarItem>
            <NavbarItem>
              <NavLink to="/news">Teams</NavLink>
            </NavbarItem>
            <NavbarItem>
              <NavLink to="/about">About</NavLink>
            </NavbarItem>
            <BtnWrapper>
              <Button to="/signup">Price</Button>
            </BtnWrapper>
          </NavbarMenu>
          <NavbarSearch active={open}>
            <SearchLogo />
            <SearchInput typr="text" placeholder="Search by cities" />
          </NavbarSearch>
        </Nav>
      </NavbarContainer>
    </>
  );
};

export default Navbar;
