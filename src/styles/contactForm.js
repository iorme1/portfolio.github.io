import styled from 'styled-components';

export const FormStyle = styled.form`
  width: 400px;
  margin: 0 auto;
  padding-bottom: 20px;
    > input, textarea {
        width: 400px;
        display: block;
        margin-bottom: 5px;
        padding: 10px;
        @media all and (max-width: 500px) {
          width: 300px;
        }
    };
    > textarea { height: 150px; };
    @media all and (max-width: 500px) {
      width: 300px;
    }
`;

export const Title = styled.h3`
  color: #FFDC00;
`
