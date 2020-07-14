import reducer from '../../../../store/modules/reviews/reducer';

describe('reviews reducer', () => {
  const initialState = {
    initialLoading: false,
    loadingMore: false,
    searchCounter: 0,
    filters: {
      order: '',
      query: '',
      reviewer: '',
      criticsPick: '',
    },
    reviews: [],
    hasMore: false,
    hasError: false,
  };

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle search request', () => {
    const filters = {
      order: 'by-title',
      query: 'title',
      reviewer: 'criticName',
      criticsPick: true,
    };
    expect(
      reducer(
        {
          ...initialState,
          initialLoading: false,
          filters: {
            order: '',
            query: '',
            reviewer: '',
            criticsPick: '',
          },
        },
        { type: '@reviews/SEARCH_REQUEST', payload: { filters } }
      )
    ).toEqual({ ...initialState, initialLoading: true, filters });
  });

  it('should handle search success', () => {
    const reviews = [
      {
        display_title: 'title',
        summary_short: 'description',
        publication_date: '01-01-2020',
        multimedia: { src: '#' },
        link: { url: '#' },
        byline: 'criticName',
        critics_pick: 1,
      },
    ];
    const hasMore = true;
    expect(
      reducer(
        {
          ...initialState,
          initialLoading: true,
          searchCounter: 0,
          reviews: [],
          hasMore: false,
          hasError: true,
        },
        { type: '@reviews/SEARCH_SUCCESS', payload: { reviews, hasMore } }
      )
    ).toEqual({
      ...initialState,
      initialLoading: false,
      searchCounter: 1,
      reviews,
      hasMore,
      hasError: false,
    });
  });

  it('should handle search failure', () => {
    expect(
      reducer(
        { ...initialState, initialLoading: true, hasError: false },
        { type: '@reviews/SEARCH_FAILURE' }
      )
    ).toEqual({ ...initialState, initialLoading: false, hasError: true });
  });

  it('should handle search more request', () => {
    expect(
      reducer(
        {
          ...initialState,
          loadingMore: false,
        },
        { type: '@reviews/SEARCH_MORE_REQUEST' }
      )
    ).toEqual({ ...initialState, loadingMore: true });
  });

  it('should handle search more success', () => {
    const reviews = [
      {
        display_title: 'title 2',
        summary_short: 'description',
        publication_date: '01-01-2020',
        multimedia: { src: '#' },
        link: { url: '#' },
        byline: 'criticName',
        critics_pick: 1,
      },
    ];
    const hasMore = true;
    expect(
      reducer(
        {
          ...initialState,
          loadingMore: true,
          searchCounter: 0,
          reviews: [
            {
              display_title: 'title',
              summary_short: 'description',
              publication_date: '01-01-2020',
              multimedia: { src: '#' },
              link: { url: '#' },
              byline: 'criticName',
              critics_pick: 1,
            },
          ],
          hasMore: false,
          hasError: true,
        },
        { type: '@reviews/SEARCH_MORE_SUCCESS', payload: { reviews, hasMore } }
      )
    ).toEqual({
      ...initialState,
      loadingMore: false,
      searchCounter: 1,
      reviews: [
        {
          display_title: 'title',
          summary_short: 'description',
          publication_date: '01-01-2020',
          multimedia: { src: '#' },
          link: { url: '#' },
          byline: 'criticName',
          critics_pick: 1,
        },
        ...reviews,
      ],
      hasMore,
      hasError: false,
    });
  });

  it('should handle search more failure', () => {
    expect(
      reducer(
        { ...initialState, loadingMore: true, hasError: false },
        { type: '@reviews/SEARCH_MORE_FAILURE' }
      )
    ).toEqual({ ...initialState, loadingMore: false, hasError: true });
  });
});
