import WebApiService from '@/modules/common/services/web-api.service';
import type { PaginationResponse, WebApiParams } from '@/modules/common/types/web-api.type';
import type { Psychologist } from '@/modules/psychologist/types/psychologist.type';

class PsychologistService extends WebApiService {

  async getPsychologists(params: WebApiParams = {}): Promise<PaginationResponse<Psychologist>> {
    const res = await this.get<PaginationResponse<Psychologist>>({
      url: 'psychologists/',
      params: params
    });

    return res.data;
  }
}

export default new PsychologistService();
