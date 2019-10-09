import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  margin-top: 15px;
  border-radius: 4px;
  background: #fff;

  &:hover {
    background: ${darken(0.04, '#fff')};
  }

  div {
    strong {
      display: block;
      font-size: 20px;
    }

    small {
      display: flex;
      align-items: stretch;
      padding: 0;
      margin: 2px 0 0 0;
      color: #999;

      img {
        width: 16px;
        height: 16px;
        padding: 0;
        margin: 0 4px 0 0;
      }
    }

    span {
      display: block;
      margin-top: 15px;
      color: #000000;
    }

    a {
      display: block;
      margin-top: 15px;
      color: #999;
      font-weight: bold;

      &:hover {
        color: ${darken(0.5, '#999')};
      }
    }

    button {
      display: block;
      margin-top: 5px;
      color: #999;
      background-color: transparent;
      font-weight: bold;
      border: none;
      cursor: pointer;

      &:hover {
        color: ${darken(0.5, '#999')};
      }
    }
  }

  img {
    margin: 0 0 0 20px;
    height: 120px;
  }
`;
