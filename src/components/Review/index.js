import bcrypt from 'bcryptjs';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { format } from 'date-fns';

import ComponentLoading from '../ComponentLoading';
import {
  addToFavoritesRequest,
  removeFromFavorites,
} from '../../store/modules/favorites/actions';
import { Container } from './styles';
import checkLogo from '../../assets/images/check.svg';

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

  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);

  const favoriteExists = useSelector(state => {
    return state.favorites.favorites.find(favorite => {
      return bcrypt.compareSync(`${ReviewTitle}${CriticName}`, favorite.id);
    });
  });

  const favoritesLoading = useSelector(state => state.favorites.loading);

  useEffect(() => {
    if (!favoritesLoading) {
      setLoading(favoritesLoading);
    }
  }, [favoritesLoading]);

  function handleAddFavorites() {
    setLoading(true);
    dispatch(addToFavoritesRequest(ReviewTitle, CriticName));
  }

  function handleRemoveFavorites() {
    dispatch(removeFromFavorites(ReviewTitle, CriticName));
  }

  return (
    <Container>
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
        {loading ? (
          <button type="button">
            <ComponentLoading />
          </button>
        ) : favoriteExists ? (
          <button type="button" onClick={handleRemoveFavorites}>
            Remove from favorites
          </button>
        ) : (
          <button type="button" onClick={handleAddFavorites}>
            Add to favorites
          </button>
        )}
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
