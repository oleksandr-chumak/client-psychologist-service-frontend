import { computed, ref } from 'vue';
import type { Feedback } from '@/modules/psychologist/types/feedback.type';
import type { WebApiParams } from '@/modules/common/types/web-api.type';
import FeedbackService from '@/modules/psychologist/services/feedback.service';
import { defineStore } from 'pinia';

export const usePsychologistsFeedbacksStore = defineStore('feedbacks', () => {
    const psychologistId = ref<number | null>(null);
    const params = ref<WebApiParams>({});
    const loading = ref(false);
    const error = ref<unknown | null>(null);
    const hasNextPage = ref(true);
    const currentPage = ref(0);
    const feedbacks = ref<Feedback[]>([]);

    const notFound = computed(() => !loading.value && !hasNextPage.value && feedbacks.value.length === 0);

    const fetchNextPage = async () => {
      if (!psychologistId.value) {
        return;
      }

      loading.value = true;
      try {
        const fetchedFeedbacks = await FeedbackService.getPsychologistFeedbacks(psychologistId.value, {
          ...params.value,
          page: currentPage.value
        });
        feedbacks.value = [...feedbacks.value, ...fetchedFeedbacks.data];
        console.log('hasNextPage.value', currentPage.value < fetchedFeedbacks.totalPages - 1);
        hasNextPage.value = currentPage.value < fetchedFeedbacks.totalPages - 1;
        currentPage.value += 1;
      } catch (e) {
        error.value = e;
        console.error(e);
        throw e;
      } finally {
        console.log('set loading to false');
        loading.value = false;
      }
    };
    const resetData = () => {
      loading.value = false;
      error.value = null;
      hasNextPage.value = true;
      currentPage.value = 0;
      feedbacks.value = [];
    };

    const refetchData = () => {
      resetData();
      fetchNextPage();
    };

    const setParams = (newPsychologistId: number, newParams?: WebApiParams) => {
      psychologistId.value = newPsychologistId;
      params.value = newParams || {};
      resetData();
    };

    return { loading, notFound, error, hasNextPage, currentPage, feedbacks, fetchNextPage, setParams, refetchData };
  }
);
