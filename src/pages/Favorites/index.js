import React from 'react';

import Review from '../../components/Review';

import { Container } from './styles';

export default function Reviews() {
  return (
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
    </Container>
  );
}
