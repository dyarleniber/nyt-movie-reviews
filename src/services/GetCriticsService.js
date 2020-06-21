import api from './api';
import apiConfig from '../config/api';

class GetCriticsService {
  static async run() {
    try {
      const response = await api.get(
        `critics/all.json?api-key=${apiConfig.key}`
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

export default new GetCriticsService();
