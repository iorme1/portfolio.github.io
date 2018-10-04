import styled from 'styled-components';

export const BannerContainer = styled.div`
  background: #001f3f;
  color: whitesmoke;
  margin: 0 auto;
  margin-top: 125px;
  border-radius: 35px;
  margin-bottom: 100px;
  opacity: 0.8;
  width: 75%;
  @media all and (max-width: 500px) {
    width: 90%;
  }
`;

export const Title =  styled.h2`
  font-family: Impact;
  letter-spacing: 2px;
  color: #FFDC00;
  padding-bottom: 20px;
  border-bottom: 1px dotted whitesmoke;
`;

export const Isaac = styled.img`
  width: 125px;
  height: 125px;
  border-radius: 50%;
`;
