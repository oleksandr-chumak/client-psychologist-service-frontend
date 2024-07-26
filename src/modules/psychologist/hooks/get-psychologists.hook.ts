import { computed, onMounted, ref, watchEffect } from 'vue';
import type { PaginationResponse, WebApiParams } from '@/modules/common/types/web-api.type';
import type { Psychologist } from '@/modules/psychologist/types/psychologist.type';
import PsychologistService from '@/modules/psychologist/services/psychologist.service';

export const useGetPsychologist = (params?: WebApiParams) => {
  const isLoading = ref(false);
  const isError = ref(false);
  const psychologists = ref<PaginationResponse<Psychologist> | null>(null);

  const isNotFound = computed(() => Boolean(
    !isLoading.value &&
    psychologists.value &&
    psychologists.value.data.length === 0
  ));

  const fetchPsychologists = async () => {
    isLoading.value = true;
    isError.value = false;

    try {
      psychologists.value = await PsychologistService.getPsychologists(params);
    } catch (error) {
      isError.value = true;
      console.error('Failed to fetch psychologists:', error);
    } finally {
      isLoading.value = false;
    }
  };

  onMounted(() => {
    fetchPsychologists();
  });

  watchEffect(() => {
    if (params) {
      fetchPsychologists();
    }
  });

  return {
    psychologists,
    isNotFound,
    isLoading,
    isError
  };
};
