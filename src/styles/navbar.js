import styled from 'styled-components';

export const NavBar = styled.nav`
  background: #001f3f !important;
  height: 80px;
  color: whitesmoke;
  opacity: 0.8;
`;

export const Title = styled.h2`
  font-family: Impact;
  color: #FFDC00;
  letter-spacing: 2px;
  @media all and (max-width: 600px) {
    margin: 0 auto;
  }
`;

export const ScrollItem = styled.li`
  background-color: black;
  color: yellow;
  @media all and (max-width: 600px) {
    font-size: 14px;
    background: none;
    border: none;
    color: whitesmoke;
    text-decoration: underline;
  }
`;

export const NavItems = styled.ul`
  @media all and (max-width: 600px) {
    text-align: center;
    margin: 0 auto !important;
  }
`;

export const ResumeLink = styled.a`
  background-color: black;
  color: yellow;
  @media all and (max-width: 600px) {
    font-size: 14px;
    background: none;
    border: none;
    color: whitesmoke;
    text-decoration: underline;
  }
`;
