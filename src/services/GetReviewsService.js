import api from './api';
import apiConfig from '../config/api';

class GetReviewsService {
  static async run({ order, query, reviewer, criticsPick }) {
    try {
      const response = await api.get(
        `reviews/search.json?api-key=${apiConfig.key}${
          criticsPick ? '&critics-pick=Y' : ''
        }${order ? `&order=${order}` : ''}${query ? `&query=${query}` : ''}${
          reviewer ? `&reviewer=${reviewer}` : ''
        }`
      );

      return {
        success: true,
        data: response.data.results,
      };
    } catch (err) {
      return {
        success: false,
        data: [],
      };
    }
  }
}

export default new GetReviewsService();
