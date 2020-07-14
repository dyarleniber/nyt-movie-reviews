import reducer from '../../../../store/modules/favorites/reducer';

describe('favorites reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual([]);
  });

  it('should handle add favorites', () => {
    const review = {
      display_title: 'title 2',
      summary_short: 'description',
      publication_date: '01-01-2020',
      multimedia: { src: '#' },
      link: { url: '#' },
      byline: 'criticName',
      critics_pick: 1,
    };
    expect(
      reducer(
        [
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
        { type: '@favorites/ADD', payload: { review } }
      )
    ).toEqual([
      {
        display_title: 'title',
        summary_short: 'description',
        publication_date: '01-01-2020',
        multimedia: { src: '#' },
        link: { url: '#' },
        byline: 'criticName',
        critics_pick: 1,
      },
      review,
    ]);
  });

  it('should handle remove favorites', () => {
    const review1 = {
      display_title: 'title',
      summary_short: 'description',
      publication_date: '01-01-2020',
      multimedia: { src: '#' },
      link: { url: '#' },
      byline: 'criticName',
      critics_pick: 1,
    };
    const review2 = {
      display_title: 'title 2',
      summary_short: 'description',
      publication_date: '01-01-2020',
      multimedia: { src: '#' },
      link: { url: '#' },
      byline: 'criticName',
      critics_pick: 1,
    };
    expect(
      reducer([review1, review2], {
        type: '@favorites/REMOVE',
        payload: { title: review2.display_title, criticName: review2.byline },
      })
    ).toEqual([review1]);
  });
});
