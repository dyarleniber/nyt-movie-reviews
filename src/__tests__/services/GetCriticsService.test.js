import api from '../../services/api';
import GetCriticsService from '../../services/GetCriticsService';

describe('GetCriticsService service', () => {
  it('should handle critics load service in case of success', async () => {
    const responseMock = { data: { results: [] } };
    api.get = jest.fn(() => Promise.resolve(responseMock));

    const response = await GetCriticsService.constructor.run();

    expect(response.success).toEqual(true);
    expect(response.data).toEqual(responseMock.data.results);
  });

  it('should handle critics load service in case of failure', async () => {
    api.get = jest.fn(() => Promise.reject());

    const response = await GetCriticsService.constructor.run();

    expect(response.success).toEqual(false);
    expect(response.data).toEqual([]);
  });
});
