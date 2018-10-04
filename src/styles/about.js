import styled from 'styled-components';

export const AboutContainer = styled.div`
  background: #001f3f;
  border-radius: 35px;
  margin: 0 auto;
  margin-top: 20px;
  opacity: 0.8;
  width: 75%;
`;

export const Title = styled.h3`
  font-family: Impact;
  letter-spacing: 2px;
  color: #FFDC00;
`;


export const Paragraph = styled.p`
  color: whitesmoke;
  text-align: left;
  font-size: 20px;
  @media all and (max-width: 500px) {
    font-size: 15px;
  }
`;
