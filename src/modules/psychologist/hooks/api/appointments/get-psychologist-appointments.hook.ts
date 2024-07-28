import { ref, watchEffect } from 'vue';
import type {Ref} from 'vue';
import type { PaginationResponse, WebApiParams } from '@/modules/common/types/web-api.type';
import type { AppointmentWithoutClientAndPsychologist } from '@/modules/psychologist/types/appointment.type';
import AppointmentService from '@/modules/psychologist/services/appointment.service';

export const useGetPsychologistAppointments = (psychologistId: number, params?: Ref<WebApiParams>) => {
  const loading = ref(true);
  const error = ref(false);
  const appointments = ref<PaginationResponse<AppointmentWithoutClientAndPsychologist> | null>(null);

  const fetchPsychologistAppointments = async (psychologistId: number, params?: WebApiParams) => {
    loading.value = true;
    error.value = false;
    try {
      appointments.value = await AppointmentService.getPsychologistAppointments(psychologistId, params);
    } catch (e) {
      console.error(e);
      error.value = true;
    } finally {
      loading.value = false;
    }
  };

  watchEffect(() => {
    fetchPsychologistAppointments(psychologistId, params?.value);
  });

  return { loading, error, appointments };
};
