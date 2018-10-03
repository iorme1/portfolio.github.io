import styled from 'styled-components';

export const Hexagon = styled.div`
  margin: 0 auto;
  position: relative;
  width: 160px;
  height: 88px;
  background: #001f3f;
  position: relative;
  color: #FFDC00;
    &::before {
      position: absolute;
      content: "";
      top: -40px;
      left: 0;
      width: 0;
      height: 0;
      border-left: 80px solid transparent;
      border-right: 80px solid transparent;
      border-bottom: 40px solid #001f3f;
    }
    &::after {
      position: absolute;
      content: "";
      bottom: -40px;
      left: 0;
      width: 0;
      height: 0;
      border-left: 80px solid transparent;
      border-right: 80px solid transparent;
      border-top: 40px solid #001f3f;
    }
`;

export const SkillsContainer = styled.div`
  opacity: 0.8;
  padding-left: 50px;
  padding-right: 50px;
`;

export const SkillsText = styled.div`
  background: #001f3f;
  border-radius: 15px;
  margin-top: 50px;
  padding: 20px;
  font-weight: bold;
  color: whitesmoke;
    > p {
      border-bottom: 0.5px dotted #FFDC00;
      padding-bottom: 15px;
    }
    @media all and (max-width: 800px ) {
      margin-bottom: 100px;
    }
`;

export const Title = styled.h5`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
`;
