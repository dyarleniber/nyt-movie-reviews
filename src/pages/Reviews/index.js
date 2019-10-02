import React from 'react';

import Review from '../../components/Review';

import { Header, Filter, Container } from './styles';

export default function Reviews() {
  return (
    <>
      <Header>
        <Filter>
          <form autoComplete="off">
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
      <Container>
        <Review
          ReviewTitle="The Irishman"
          ReviewDescription="Robert De Niro, Al Pacino and Joe Pesci star in Martin Scorsese’s monumental, elegiac tale of violence, betrayal, memory and loss. It’s the opening-night movie at the New York Film Festival."
          ReviewDate={new Date()}
          ReviewImage="https://static01.nyt.com/images/2019/09/27/arts/27irishman1/27irishman1-mediumThreeByTwo210.jpg"
          ReviewUrl="#url"
          CriticName="Critic name"
          CriticsPick
        />
        <Review
          ReviewTitle="The Irishman"
          ReviewDescription="Robert De Niro, Al Pacino and Joe Pesci star in Martin Scorsese’s monumental, elegiac tale of violence, betrayal, memory and loss. It’s the opening-night movie at the New York Film Festival."
          ReviewDate={new Date()}
          ReviewImage="https://static01.nyt.com/images/2019/09/27/arts/27irishman1/27irishman1-mediumThreeByTwo210.jpg"
          ReviewUrl="#url"
          CriticName="Critic name"
        />
        <Review
          ReviewTitle="The Irishman"
          ReviewDescription="Robert De Niro, Al Pacino and Joe Pesci star in Martin Scorsese’s monumental, elegiac tale of violence, betrayal, memory and loss. It’s the opening-night movie at the New York Film Festival."
          ReviewDate={new Date()}
          ReviewImage="https://static01.nyt.com/images/2019/09/27/arts/27irishman1/27irishman1-mediumThreeByTwo210.jpg"
          ReviewUrl="#url"
          CriticName="Critic name"
          CriticsPick
        />
      </Container>
    </>
  );
}
