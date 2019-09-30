import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 1020px;
  margin: 0 auto;
  padding: 0 20px 50px;
  margin-top: 15px;
`;

export const CriticList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  text-align: center;

  li {
    width: 250px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 20px;
    margin: 0 15px 15px 0;
    background: #fff;
    border: 1px solid ${darken(0.2, '#e6e6e6')};
    border-radius: 4px;

    &:hover {
      background: ${darken(0.04, '#fff')};
    }

    div {
      max-height: 250px;
      overflow: hidden;
    }

    strong {
      margin-top: 15px;
      font-size: 20px;
      color: #000000;
    }

    small {
      margin-top: 15px;
      color: #999;
      max-height: 100px;
      overflow-x: scroll;
      overflow-x: hidden;
    }

    a {
      margin-top: 15px;
      color: #999;
      font-weight: bold;

      &:hover {
        color: ${darken(0.5, '#999')};
      }
    }
  }
`;
