import styled from "styled-components";


export const Marg = styled.div`
 body {
    margin: 0px !important;
    padding: 0px;
    }
`;

export const Nav = styled.nav`
  margin: -10px -10px 0px -10px;
  overflow: hidden;
  background-color: #333;
`;

export const StyledLink = styled.a`
  float: left;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
  :hover {
    background-color: #ddd;
    color: black;
  }
  &.topnavb {
    background-color: #04aa6d;
    color: white;
  }
`;

export const Header = styled.div`
  margin: 0px -10px 0px -10px;
  padding: 60px;
  text-align: center;
  background: black;
  color: white;
  font-size: 30px;
`;
