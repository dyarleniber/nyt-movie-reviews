import reducer from '../../../../store/modules/critics/reducer';

describe('critics reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({ loading: false, critics: [] });
  });

  it('should handle search request', () => {
    expect(
      reducer(
        { loading: false, critics: [] },
        { type: '@critics/SEARCH_REQUEST' }
      )
    ).toEqual({ loading: true, critics: [] });
  });

  it('should handle search success', () => {
    const critics = [
      {
        display_name: 'name',
        bio: 'description',
        multimedia: { resource: { src: '#' } },
      },
    ];
    expect(
      reducer(
        { loading: true, critics: [] },
        { type: '@critics/SEARCH_SUCCESS', payload: { critics } }
      )
    ).toEqual({ loading: false, critics });
  });

  it('should handle search failure', () => {
    expect(
      reducer(
        { loading: true, critics: [] },
        { type: '@critics/SEARCH_FAILURE' }
      )
    ).toEqual({ loading: false, critics: [] });
  });
});
