import React from 'react';

import { Header, Filter, Container } from './styles';

export default function Reviews() {
  return (
    <>
      <Header>
        <Filter>
          <form>
            <select name="order">
              <option value="">Order</option>
              <option value="by-title">Order by Title</option>
              <option value="by-publication-date">
                Order by Publication date
              </option>
              <option value="by-opening-date">Order by Opening date</option>
            </select>
            <input type="text" name="query" placeholder="Keyword" />
            <input type="text" name="reviewer" placeholder="Reviewer" />
            <label htmlFor="criticspick">
              <input type="checkbox" id="criticspick" name="criticspick" />
              <span>NYT Critic’s Pick</span>
            </label>
            <button type="submit">Search</button>
          </form>
        </Filter>
      </Header>
      <Container>Reviews</Container>
    </>
  );
}
