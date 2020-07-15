import api from '../../services/api';
import GetReviewsService from '../../services/GetReviewsService';

describe('GetReviewsService service', () => {
  it('should handle reviews load service in case of success', async () => {
    const responseMock = { data: { results: [], has_more: false } };
    api.get = jest.fn(() => Promise.resolve(responseMock));

    const filters = {};
    const response = await GetReviewsService.constructor.run(filters);

    expect(response.success).toEqual(true);
    expect(response.data).toEqual(responseMock.data.results);
    expect(response.hasMore).toEqual(responseMock.data.has_more);
  });

  it('should handle reviews load service in case of failure', async () => {
    api.get = jest.fn(() => Promise.reject());

    const filters = {};
    const response = await GetReviewsService.constructor.run(filters);

    expect(response.success).toEqual(false);
    expect(response.data).toEqual([]);
    expect(response.hasMore).toEqual(false);
  });
});
