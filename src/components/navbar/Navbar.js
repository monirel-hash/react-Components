import React from "react";
import { Marg, Nav, StyledLink as A, Header } from "./NavBarStyle";

const Navbar = () => {
  return (
    <>
    <Marg>
      <Nav>
        <A className="topnavb" href="/home">
          Home
        </A>
        <A href="/news">News</A>
        <A href="/contact">Contact</A>
        <A href="/about">About</A>
      </Nav>
      <Header>
        <h1>Shoop in Style</h1>
        <p>With this shop home page</p>
      </Header>



      </Marg>
    </>
  );
};

export default Navbar;
