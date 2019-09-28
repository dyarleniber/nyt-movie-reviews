import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1020px;
  margin: 0 auto;
  padding: 0 20px 50px;

  display: flex;
  flex-direction: column;
`;

export const Filter = styled.div`
  display: flex;
  align-self: center;
  align-items: center;

  button {
    border: 0;
    background: none;
  }
`;
