import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { format } from 'date-fns';

import {
  addToFavorites,
  removeFromFavorites,
} from '../../store/modules/favorites/actions';
import { Container } from './styles';
import checkLogo from '../../assets/images/check.svg';
import emptyImageLogo from '../../assets/images/empty-image.svg';

const Review = props => {
  const { rawData } = props;

  const {
    display_title: title,
    summary_short: description,
    publication_date: date,
    multimedia,
    link: { url },
    byline: criticName,
    critics_pick: criticsPick,
  } = rawData;

  const dispatch = useDispatch();

  const [data] = useState({
    title,
    description,
    date,
    image: multimedia && multimedia.src ? multimedia.src : emptyImageLogo,
    url,
    criticName,
    criticsPick: !!criticsPick,
  });

  function handleAddFavorites() {
    dispatch(addToFavorites(rawData));
  }

  function handleRemoveFavorites() {
    dispatch(removeFromFavorites(data.title, data.criticName));
  }

  const isFavorite = useSelector(state => {
    return state.favorites.find(favorite => {
      return (
        favorite.display_title === data.title &&
        favorite.byline === data.criticName
      );
    });
  });

  return (
    <Container>
      <div>
        <strong>{data.title}</strong>
        {data.criticsPick && (
          <small>
            <img src={checkLogo} alt="NYTCriticsPick" />
            NYT Critic Pick
          </small>
        )}
        <small>{format(new Date(data.date), 'P')}</small>
        <small>By {data.criticName}</small>
        <span>{data.description}</span>
        <a href={data.url} target="_blank" rel="noopener noreferrer">
          Read review
        </a>
        {isFavorite ? (
          <button type="button" onClick={handleRemoveFavorites}>
            Remove from favorites
          </button>
        ) : (
          <button type="button" onClick={handleAddFavorites}>
            Add to favorites
          </button>
        )}
      </div>
      <img src={data.image} alt="MovieImage" />
    </Container>
  );
};

Review.propTypes = {
  rawData: PropTypes.shape({
    display_title: PropTypes.string.isRequired,
    summary_short: PropTypes.string.isRequired,
    publication_date: PropTypes.string.isRequired,
    multimedia: PropTypes.shape({
      src: PropTypes.string,
    }),
    link: PropTypes.shape({
      url: PropTypes.string.isRequired,
    }),
    byline: PropTypes.string.isRequired,
    critics_pick: PropTypes.number,
  }).isRequired,
};

export default Review;
