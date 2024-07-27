import { onMounted, ref } from 'vue';
import type { Psychologist } from '@/modules/psychologist/types/psychologist.type';
import PsychologistService from '@/modules/psychologist/services/psychologist.service';

export const useGetPsychologistById = (id: number) => {
  const isLoading = ref(false);
  const isError = ref(false);
  const psychologist = ref<Psychologist | null>(null);

  const fetchPsychologistById = async () => {
    isLoading.value = true;
    isError.value = false;

    try {
      psychologist.value = await PsychologistService.getPsychologistById(id);
    } catch (error) {
      isError.value = true;
      console.error('Failed to fetch psychologists:', error);
    } finally {
      isLoading.value = false;
    }
  };


  onMounted(() => {
    fetchPsychologistById();
  });

  return {
    psychologist,
    isLoading,
    isError
  };
};
