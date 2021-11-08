import React from 'react';
import styled from 'styled-components';
import logoIcon from '../images/header/logo.svg';
import userIcon from '../images/header/user.svg';

const NavBarStyled = styled.header`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 99;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 15px 25px;
  color: #ffffff;
  background-color: #299B01;
`;

const Logo = styled.a`
  display: flex;
  align-items: center;
`;

const LogoIcon = styled.img`
  margin-right: 10px;
  width: 50px;
  height: 50px;
`;

const LogoText = styled.span`
  font-family: Pacifico, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 42px;
`;

const LoginButton = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LoginIcon = styled.img`
  margin-bottom: 3px;
  width: 32px;
  height: 32px;
`;

const LoginText = styled.span`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  text-transform: uppercase;
`;

export const NavBar = () => (
  <NavBarStyled>
      <Logo href="#">
        <LogoIcon src={logoIcon} alt="Grinch Burgers Logo" />
        <LogoText>Grinch Burgers</LogoText>
    </Logo>
    
    <LoginButton href="#">
      <LoginIcon src={userIcon} alt="" />
      <LoginText>Log In</LoginText>
    </LoginButton>
  </NavBarStyled>
);