import React from 'react';

import reviewLogo from '../../assets/images/review.svg';
import criticLogo from '../../assets/images/critic.svg';
import favoriteLogo from '../../assets/images/favorite.svg';

import { Container, Option } from './styles';

export default function Home() {
  return (
    <Container>
      <ul>
        <Option to="/reviews">
          <strong>Reviews</strong>
          <img src={reviewLogo} alt="ReviewLogo" />
          <span>
            Search New York Times movie reviews by keyword and filter by
            Critic’s Pick and Reviewer. Supports ordering results by-title,
            by-publication-date, or by-opening-date.
          </span>
        </Option>

        <Option to="/critics">
          <strong>Critics</strong>
          <img src={criticLogo} alt="CriticLogo" />
          <span>
            Get New York Times movie critics. You can either specify the
            reviewer name.
          </span>
        </Option>

        <Option to="/favorites">
          <strong>Favorites</strong>
          <img src={favoriteLogo} alt="favoriteLogo" />
          <span>Favorites New York Times movie reviews.</span>
        </Option>
      </ul>
    </Container>
  );
}
