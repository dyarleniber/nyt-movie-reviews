import React from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';

import checkLogo from '../../assets/images/check.svg';

import { Container } from './styles';

const Review = props => {
  const {
    Reviewtitle,
    ReviewDescription,
    ReviewDate,
    ReviewImage,
    Reviewurl,
    CriticName,
    CriticPick,
  } = props;

  return (
    <Container href="#a" target="_blank">
      <div>
        <strong>{Reviewtitle}</strong>
        {CriticPick && (
          <small>
            <img src={checkLogo} alt="NYTCriticsPick" />
            NYT Critic Pick
          </small>
        )}
        <small>{format(ReviewDate, 'P')}</small>
        <small>By {CriticName}</small>
        <span>{ReviewDescription}</span>
        <a href={Reviewurl} target="_blank" rel="noopener noreferrer">
          Read review
        </a>
      </div>
      <img src={ReviewImage} alt="MovieImage" />
    </Container>
  );
};

Review.propTypes = {
  Reviewtitle: PropTypes.string.isRequired,
  ReviewDescription: PropTypes.string.isRequired,
  ReviewDate: PropTypes.instanceOf(Date).isRequired,
  ReviewImage: PropTypes.string.isRequired,
  Reviewurl: PropTypes.string.isRequired,
  CriticName: PropTypes.string.isRequired,
  CriticPick: PropTypes.bool,
};

Review.defaultProps = {
  CriticPick: false,
};

export default Review;
