import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import PageLoading from '../../components/PageLoading';
import NotFound from '../../components/NotFound';
import Review from '../../components/Review';
import { searchReviewsRequest } from '../../store/modules/reviews/actions';
import { Header, Filter, Container } from './styles';

const Reviews = ({ match: { params } }) => {
  const { critic: criticParam } = params;

  const dispatch = useDispatch();

  const [filters, setFilters] = useState({
    order: '',
    query: '',
    reviewer: criticParam,
    criticsPick: '',
  });

  const loading = useSelector(state => state.reviews.loading);

  const reviews = useSelector(state => state.reviews.reviews);

  useEffect(() => {
    dispatch(searchReviewsRequest());
  }, [dispatch]);

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

    dispatch(searchReviewsRequest(filters));
  }

  if (loading) {
    return <PageLoading />;
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
            return (
              <Review
                key={`${review.display_title}-${review.byline}`}
                rawData={review}
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
