import React from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';

import checkLogo from '../../assets/images/check.svg';

import { Container } from './styles';

const Review = props => {
  const {
    ReviewTitle,
    ReviewDescription,
    ReviewDate,
    ReviewImage,
    ReviewUrl,
    CriticName,
    CriticsPick,
  } = props;

  return (
    <Container href="#a" target="_blank">
      <div>
        <strong>{ReviewTitle}</strong>
        {CriticsPick && (
          <small>
            <img src={checkLogo} alt="NYTCriticsPick" />
            NYT Critic Pick
          </small>
        )}
        <small>{format(ReviewDate, 'P')}</small>
        <small>By {CriticName}</small>
        <span>{ReviewDescription}</span>
        <a href={ReviewUrl} target="_blank" rel="noopener noreferrer">
          Read review
        </a>
      </div>
      <img src={ReviewImage} alt="MovieImage" />
    </Container>
  );
};

Review.propTypes = {
  ReviewTitle: PropTypes.string.isRequired,
  ReviewDescription: PropTypes.string.isRequired,
  ReviewDate: PropTypes.instanceOf(Date).isRequired,
  ReviewImage: PropTypes.string.isRequired,
  ReviewUrl: PropTypes.string.isRequired,
  CriticName: PropTypes.string.isRequired,
  CriticsPick: PropTypes.bool,
};

Review.defaultProps = {
  CriticsPick: false,
};

export default Review;
