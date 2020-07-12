import api from './api';
import apiConfig from '../config/api';

class GetReviewsService {
  static async run({ order, query, reviewer, criticsPick, offset }) {
    try {
      const response = await api.get(
        `reviews/search.json?api-key=${apiConfig.key}${
          criticsPick ? '&critics-pick=Y' : ''
        }${order ? `&order=${order}` : ''}${query ? `&query=${query}` : ''}${
          reviewer ? `&reviewer=${reviewer}` : ''
        }${offset ? `&offset=${offset}` : ''}`
      );

      return {
        success: true,
        data: response.data.results,
        hasMore: response.data.has_more,
      };
    } catch (err) {
      return {
        success: false,
        data: [],
        hasMore: false,
      };
    }
  }
}

export default new GetReviewsService();
