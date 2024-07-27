import WebApiService from '@/modules/common/services/web-api.service';
import type { CreateFeedbackBody, Feedback } from '@/modules/psychologist/types/feedback.type';
import type { PaginationResponse, WebApiParams } from '@/modules/common/types/web-api.type';

class FeedbackService extends WebApiService {

  async getPsychologistFeedbacks(psychologistId: number, params?: WebApiParams): Promise<PaginationResponse<Feedback>> {
    const res = await this.get<PaginationResponse<Feedback>>({
      url: `psychologists/${psychologistId}/feedbacks/`,
      params: params
    });
    return res.data;
  }

  async createFeedback(psychologistId: number, body: CreateFeedbackBody): Promise<Feedback> {
    const res = await this.post<Feedback>({
      url: `psychologists/${psychologistId}/feedbacks/`,
      data: body
    }, true);
    return res.data;
  }
}

export default new FeedbackService();
