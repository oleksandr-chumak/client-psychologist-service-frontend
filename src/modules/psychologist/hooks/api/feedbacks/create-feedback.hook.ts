import { ref } from 'vue';
import { AxiosError } from 'axios';
import type { CreateFeedbackBody } from '@/modules/psychologist/types/feedback.type';
import FeedbackService from '@/modules/psychologist/services/feedback.service';

export const useCreateFeedbackMutation = () => {
  const loading = ref(false);
  const error = ref<AxiosError | null>(null);

  const createFeedback = async (psychologistId: number, body: CreateFeedbackBody) => {
    loading.value = true;
    error.value = null; // Reset error before new request
    try {
      return await FeedbackService.createFeedback(psychologistId, body);
    } catch (e) {
      if (e instanceof AxiosError) {
        error.value = e;
      } else {
        console.error('Unexpected error:', e);
      }
      throw e;
    } finally {
      loading.value = false;
    }
  };

  return { createFeedback, loading, error };
};
