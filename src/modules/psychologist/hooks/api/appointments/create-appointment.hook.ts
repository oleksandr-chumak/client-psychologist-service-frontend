import { ref } from 'vue';
import AppointmentService from '@/modules/psychologist/services/appointment.service';
import type { Appointment, CreateAppointmentBody } from '@/modules/psychologist/types/appointment.type';

export const useCreateAppointmentMutation = () => {
  const loading = ref(false);
  const error = ref(false);

  const createAppointment = async (psychologistId: number, body: CreateAppointmentBody): Promise<Appointment> => {
    loading.value = true;
    error.value = false;
    try {
      return await AppointmentService.createAppointment(psychologistId, body);
    } catch (e) {
      error.value = true;
      console.error(e);
      throw e;
    } finally {
      loading.value = false;
    }
  };

  return { loading, error, createAppointment };
};
