import styled from 'styled-components';
import { darken } from 'polished';

export const Header = styled.div`
  background: #e6e6e6;
  padding: 0 30px;
`;

export const Filter = styled.div`
  max-width: 900px;
  display: flex;
  align-self: center;
  align-items: center;
  margin: 0 auto;

  form {
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    flex-direction: column;
    align-items: stretch;
    justify-content: space-between;

    input,
    select {
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 4px;
      padding: 10px 15px;
      margin: 15px 0 15px 0;
    }

    label {
      input,
      span {
        font-size: smaller;
        margin: 0 5px 0 0;
        padding: 0;
      }

      input {
        vertical-align: sub;
      }
    }

    button {
      height: 44px;
      margin: 15px 0 15px 0;
      padding: 10px 20px;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      font-weight: bold;
      color: #fff;
      background: #999;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.5, '#999')};
      }
    }

    @media (min-width: 900px) {
      flex-direction: row;
      align-items: center;
    }
  }
`;

export const Container = styled.div`
  max-width: 1020px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 0 20px 50px;
`;

export const Review = styled.a`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  margin-top: 15px;
  border-radius: 4px;
  background: #fff;
  color: #000000;

  &:hover {
    color: #000000;
    background: ${darken(0.04, '#fff')};

    a {
      color: ${darken(0.5, '#999')};
    }
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
  }

  img {
    margin: 0 0 0 20px;
    height: 120px;
  }
`;
