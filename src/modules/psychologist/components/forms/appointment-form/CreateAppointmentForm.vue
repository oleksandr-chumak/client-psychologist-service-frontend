<script setup lang="ts">
import { AxiosError } from 'axios';
import AppointmentForm from '@/modules/psychologist/components/forms/appointment-form/AppointmentForm.vue';
import { useCreateAppointmentMutation } from '@/modules/psychologist/hooks/api/appointments/create-appointment.hook';
import { useToast } from 'vue-toastification';
import type { Appointment } from '@/modules/psychologist/types/appointment.type';

const props = defineProps<{
  psychologistId: number
}>();

const emit = defineEmits<{ successCreate: [appointment: Appointment] }>();

const toast = useToast();
const { createAppointment, loading } = useCreateAppointmentMutation();

const handleSuccessSubmit = async (data: { startTime: Date, endTime: Date }) => {
  try {
    const appointment = await createAppointment(props.psychologistId, data);
    toast.success('Appointment created');
    emit('successCreate', appointment);
  } catch (e) {
    const errorMessage = e instanceof AxiosError ? e.response?.data.message || e.message : 'An error occurred';
    toast.error(errorMessage, {
      timeout: 2000
    });
  }
};

</script>

<template>
  <appointment-form :loading="loading" :psychologist-id="psychologistId" @success-submit="handleSuccessSubmit"
  ></appointment-form>
</template>

<style scoped>

</style>
