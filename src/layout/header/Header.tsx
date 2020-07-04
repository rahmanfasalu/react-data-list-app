import React from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/logo.svg";
import Theme from "../../theme/theme";
import styled from "styled-components";

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  background: ${Theme.colors.primary};
  width: 96%;
  border-radius: 30px 0 31px 0px;
  margin: 0 auto;
`;

const Logo = styled.img`
  margin-left: 20px;
`;

function Header(): JSX.Element {
  return (
    <HeaderWrapper>
      <Link to="/">
        <Logo src={logo} alt="logo"></Logo>
      </Link>
    </HeaderWrapper>
  );
}
export default Header;
