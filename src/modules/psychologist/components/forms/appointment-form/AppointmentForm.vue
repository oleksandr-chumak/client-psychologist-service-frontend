<script setup lang="ts">
import type { ComputedRef } from 'vue';
import { computed, ref } from 'vue';
import { endOfDay, startOfDay } from 'date-fns';
import DatePicker from '@/modules/common/components/inputs/DatePicker.vue';
import {
  useGetPsychologistAppointments
} from '@/modules/psychologist/hooks/api/appointments/get-psychologist-appointments.hook';
import type { WebApiParams } from '@/modules/common/types/web-api.type';
import StyledButton from '@/modules/common/components/StyledButton.vue';

const props = defineProps<{
  psychologistId: number
  loading?: boolean,
}>();

const emit = defineEmits<{ successSubmit: [data: { startTime: Date, endTime: Date }] }>();

const selectedDay = ref(new Date());
const selectedTime = ref<[start: Date, end: Date] | null>(null);

const params: ComputedRef<WebApiParams> = computed(() => ({
  and: `startTime gt ${startOfDay(selectedDay.value).toISOString()} and endTime lt ${endOfDay(selectedDay.value).toISOString()}`,
  size: 100
}));

const { appointments, loading: appointmentsLoading } = useGetPsychologistAppointments(props.psychologistId, params);

const unavailableTimes: ComputedRef<[start: Date, end: Date][]> = computed(() =>
  appointments.value ?
    appointments.value.data.map((appointment) => [new Date(appointment.startTime), new Date(appointment.endTime)]) :
    []
);

const handleSubmit = (e: Event) => {
  e.preventDefault();
  if (!selectedTime.value) {
    return;
  }

  emit('successSubmit', {
    startTime: selectedTime.value[0],
    endTime: selectedTime.value[1]
  });
};

const handleDayChange = (day: Date) => selectedDay.value = day;
const handleTimeChange = (time: [start: Date, end: Date] | null) => selectedTime.value = time;

</script>

<template>
  <form
    class="tw-flex tw-flex-col tw-gap-4"
    @submit="handleSubmit"
  >
    <date-picker
      :unavailable-times="unavailableTimes"
      :available-hours="[8, 17]"
      :loading="appointmentsLoading"
      @day-change="handleDayChange"
      @time-change="handleTimeChange"
    ></date-picker>
    <styled-button
      class="tw-w-full"
      :disabled="!selectedTime"
      :loading="loading"
      type="submit"
    >
      Send
    </styled-button>
  </form>
</template>

<style scoped>

</style>
