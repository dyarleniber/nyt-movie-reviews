import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import api from '../../services/api';
import apiConfig from '../../config/api';

import PageLoading from '../../components/PageLoading';
import NotFound from '../../components/NotFound';
import Review from '../../components/Review';

import { Header, Filter, Container } from './styles';

import emptyImageLogo from '../../assets/images/empty-image.svg';

const Reviews = ({ match: { params } }) => {
  const { critic: criticParam } = params;

  const [isLoading, setIsLoading] = useState(true);
  const [filters, setFilters] = useState({
    order: '',
    query: '',
    reviewer: criticParam,
    criticsPick: '',
  });
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function loadReviews() {
      try {
        const { reviewer } = filters;

        const response = await api.get(
          `reviews/search.json?api-key=${apiConfig.key}${
            reviewer ? `&reviewer=${reviewer}` : ''
          }`
        );

        setReviews(response.data.results);
      } catch (err) {
        setReviews([]);
      }

      setIsLoading(false);
    }

    loadReviews();
  }, []);

  if (isLoading) {
    return <PageLoading />;
  }

  function handleFilterChange(e) {
    e.preventDefault();

    const {
      target: { name, checked, value },
    } = e;

    if (['criticsPick'].includes(name)) {
      setFilters({
        ...filters,
        [name]: checked,
      });
    } else {
      setFilters({
        ...filters,
        [name]: value,
      });
    }
  }

  async function handleFilterSubmit(e) {
    e.preventDefault();

    setIsLoading(true);

    try {
      const { order, query, reviewer, criticsPick } = filters;

      const response = await api.get(
        `reviews/search.json?api-key=${apiConfig.key}${
          criticsPick ? '&critics-pick=Y' : ''
        }${order ? `&order=${order}` : ''}${query ? `&query=${query}` : ''}${
          reviewer ? `&reviewer=${reviewer}` : ''
        }`
      );

      setReviews(response.data.results);
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
    }
  }

  return (
    <>
      <Header>
        <Filter>
          <form autoComplete="off" onSubmit={handleFilterSubmit}>
            <select
              name="order"
              onChange={handleFilterChange}
              value={filters.order}
            >
              <option value="">Order</option>
              <option value="by-title">Order by Title</option>
              <option value="by-publication-date">
                Order by Publication date
              </option>
              <option value="by-opening-date">Order by Opening date</option>
            </select>
            <input
              type="text"
              name="query"
              placeholder="Keyword"
              onChange={handleFilterChange}
              value={filters.query}
            />
            <input
              type="text"
              name="reviewer"
              placeholder="Reviewer"
              onChange={handleFilterChange}
              value={filters.reviewer}
            />
            <label htmlFor="criticsPick">
              <input
                type="checkbox"
                id="criticsPick"
                name="criticsPick"
                onChange={handleFilterChange}
                checked={filters.criticsPick}
              />
              <span>NYT Critic’s Pick</span>
            </label>
            <button type="submit">Search</button>
          </form>
        </Filter>
      </Header>
      {!reviews.length ? (
        <NotFound Message="No records found" />
      ) : (
        <Container>
          {reviews.map(review => {
            const image = review.multimedia ? review.multimedia.src : null;
            const url = review.link ? review.link.url : null;

            return (
              <Review
                key={review.display_title}
                ReviewTitle={review.display_title}
                ReviewDescription={review.summary_short}
                ReviewDate={new Date(review.publication_date)}
                ReviewImage={image || emptyImageLogo}
                ReviewUrl={url}
                CriticName={review.byline}
                CriticsPick={!!review.critics_pick}
              />
            );
          })}
        </Container>
      )}
    </>
  );
};

Reviews.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      critic: PropTypes.string,
    }),
  }),
};

Reviews.defaultProps = {
  match: {
    params: {
      critic: null,
    },
  },
};

export default Reviews;
