import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import PageLoading from '../../components/PageLoading';
import NotFound from '../../components/NotFound';
import Review from '../../components/Review';
import ComponentLoading from '../../components/ComponentLoading';
import useInfiniteScroll from '../../hooks/useInfiniteScroll';
import {
  searchReviewsRequest,
  searchMoreReviewsRequest,
} from '../../store/modules/reviews/actions';
import { Header, Filter, Container } from './styles';

const Reviews = ({ match: { params } }) => {
  const { critic: criticParam } = params;

  const dispatch = useDispatch();

  const initialLoading = useSelector(state => state.reviews.initialLoading);
  const loadingMore = useSelector(state => state.reviews.loadingMore);
  const filters = useSelector(state => state.reviews.filters);
  const reviews = useSelector(state => state.reviews.reviews);
  const hasMore = useSelector(state => state.reviews.hasMore);

  const [componentFilters, setComponentFilters] = useState(filters);

  useEffect(() => {
    dispatch(
      searchReviewsRequest({
        order: '',
        query: '',
        reviewer: criticParam,
        criticsPick: '',
      })
    );
  }, [dispatch, criticParam]);

  const searchMoreReviewsCallback = useCallback(() => {
    if (hasMore) {
      dispatch(searchMoreReviewsRequest());
    }
  }, [dispatch, hasMore]);

  useInfiniteScroll(searchMoreReviewsCallback);

  function handleFilterChange(e) {
    e.preventDefault();

    const {
      target: { name, checked, value },
    } = e;

    if (['criticsPick'].includes(name)) {
      setComponentFilters({
        ...componentFilters,
        [name]: checked,
      });
    } else {
      setComponentFilters({
        ...componentFilters,
        [name]: value,
      });
    }
  }

  async function handleFilterSubmit(e) {
    e.preventDefault();

    dispatch(searchReviewsRequest(componentFilters));
  }

  if (initialLoading) {
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
              value={componentFilters.order}
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
              value={componentFilters.query}
            />
            <input
              type="text"
              name="reviewer"
              placeholder="Reviewer"
              onChange={handleFilterChange}
              value={componentFilters.reviewer}
            />
            <label htmlFor="criticsPick">
              <input
                type="checkbox"
                id="criticsPick"
                name="criticsPick"
                onChange={handleFilterChange}
                checked={componentFilters.criticsPick}
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
          {loadingMore && <ComponentLoading />}
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
