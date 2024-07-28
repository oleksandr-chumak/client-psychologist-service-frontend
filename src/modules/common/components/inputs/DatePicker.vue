<script setup lang="ts">

import {
  add,
  endOfDay,
  endOfWeek,
  format,
  isAfter,
  isBefore,
  isSameDay,
  isThisWeek,
  isWithinInterval,
  startOfDay,
  startOfWeek,
  sub
} from 'date-fns';
import { isToday } from 'date-fns/isToday';
import type { ComputedRef } from 'vue';
import { computed, ref } from 'vue';

const props = withDefaults(defineProps<{
  availableHours: [from: number, to: number],
  loading?: boolean,
  unavailableTimes?: [start: Date, end: Date][]
}>(), { loading: false });

const emit = defineEmits<{
  dayChange: [day: Date],
  timeChange: [time: [from: Date, end: Date] | null]
}>();

const endOfYesterday = endOfDay(sub(new Date(), { days: 1 }));
const currentWeek = ref(new Date());
const currentDay = ref<Date>(new Date());
const selectedTime = ref<[from: Date, end: Date] | null>(null);

const handleTimeChange = (time: [from: Date, end: Date] | null) => {
  if (time && isTimeUnavailable(time)) {
    return;
  }

  selectedTime.value = time;
  emit('timeChange', time);
};

const handleDayChange = (date: Date) => {
  if (isBefore(date, endOfYesterday)) {
    return;
  }

  handleTimeChange(null);
  currentDay.value = date;
  emit('dayChange', date);
};

const handlePreviousWeekClick = () => {
  if (isThisWeek(currentWeek.value)) {
    return;
  }

  const previousWeek = sub(currentWeek.value, { weeks: 1 });

  handleTimeChange(null);
  handleDayChange(endOfWeek(previousWeek, { weekStartsOn: 1 }));
  currentWeek.value = previousWeek;
};

const handleNextWeekClick = () => {
  const nextWeek = add(currentWeek.value, { weeks: 1 });

  handleTimeChange(null);
  handleDayChange(startOfWeek(nextWeek, { weekStartsOn: 1 }));
  currentWeek.value = nextWeek;
};

const isTimeUnavailable = (time: [from: Date, end: Date]): boolean => {
  if (!props.unavailableTimes) {
    return false;
  }

  return props.unavailableTimes.some(unavailable => {
    const from = time[0];
    const end = time[1];
    const unavailableFrom = add(unavailable[0], { seconds: 1 });
    const unavailableEnd = sub(unavailable[1], { seconds: 1 });

    const isUnavailableFromWithinInterval = isWithinInterval(unavailableFrom, { start: from, end: end });
    const isUnavailableEndWithinInterval = isWithinInterval(unavailableEnd, { start: from, end: end });

    // Check if the given time range [from, end] overlaps with the unavailable time range [unavailableFrom, unavailableEnd]
    return isUnavailableFromWithinInterval || isUnavailableEndWithinInterval;
  });
};


const availableTimes: ComputedRef<[start: Date, end: Date][]> = computed(() => {
  const start = add(startOfDay(currentDay.value), { hours: props.availableHours[0] });
  return Array.from({ length: props.availableHours[1] - props.availableHours[0] },
    (_, i) => [add(start, { hours: i }), add(start, { hours: i + 1 })]
  );
});

const daysOfCurrentWeek = computed(() => {
  const startDate = startOfWeek(currentWeek.value, { weekStartsOn: 1 });
  return Array.from({ length: 7 }, (_, index) => add(startDate, { days: index }));
});

</script>

<template>
  <div class="tw-w-full">
    <div class="tw-flex tw-w-full tw-items-center tw-gap-2 tw-mb-4">
      <button
        :disabled="isThisWeek(currentWeek)"
        :class="['tw-border tw-border-solid tw-border-[#C9CED8] tw-p-1.5 tw-rounded-lg', {
          'tw-cursor-not-allowed': isThisWeek(currentWeek)
        }]"
        @click="handlePreviousWeekClick"
        type="button"
      >
        <v-icon
          :class="[{
            'tw-text-[#9AA4B5]':isThisWeek(currentWeek),
            'tw-text-main':!isThisWeek(currentWeek),
          }]"
          icon="mdi-chevron-left"
        ></v-icon>
      </button>
      <div class="tw-border tw-w-full tw-border-solid tw-border-[#C9CED8] tw-rounded-lg tw-overflow-hidden">
        <div class="tw-flex tw-w-full tw-bg-[#F2F4F7] tw-border-b tw-border-solid tw-border-[#C9CED8]">
          <div class="tw-w-full tw-p-2 tw-text-center"><span class="tw-text-sm">Mon</span></div>
          <div class="tw-w-full tw-p-2 tw-text-center"><span class="tw-text-sm">Tue</span></div>
          <div class="tw-w-full tw-p-2 tw-text-center"><span class="tw-text-sm">Wed</span></div>
          <div class="tw-w-full tw-p-2 tw-text-center"><span class="tw-text-sm">Thu</span></div>
          <div class="tw-w-full tw-p-2 tw-text-center"><span class="tw-text-sm">Fri</span></div>
          <div class="tw-w-full tw-p-2 tw-text-center"><span class="tw-text-sm">Sat</span></div>
          <div class="tw-w-full tw-p-2 tw-text-center"><span class="tw-text-sm">Sun</span></div>
        </div>
        <div class="tw-flex">
          <div
            :class="['tw-flex tw-items-center tw-justify-center tw-flex-col tw-w-full tw-px-2 tw-py-4', {
            'tw-bg-main tw-text-white': isSameDay(currentDay, day),
            'tw-text-main': !isToday(day) && !isSameDay(currentDay, day) && !isBefore(day ,endOfYesterday),
            'tw-text-[#7F56D9]': isToday(day) && !isSameDay(currentDay, day),
            'tw-cursor-pointer': isAfter(day ,endOfYesterday),
            'tw-bg-[#9AA4B5]/30 tw-cursor-not-allowed tw-text-[#98A2B3]': isBefore(day ,endOfYesterday),
          }]"
            v-for="day in daysOfCurrentWeek"
            :key="day.getTime()"
            @click="handleDayChange(day)"
          >
            <span class="tw-font-bold tw-text-lg">{{ format(day, 'dd') }}</span>
            <span class="tw-font-medium tw-text-sm">{{ format(day, 'MMM') }}</span>
          </div>
        </div>
      </div>
      <button
        class="tw-border tw-border-solid tw-border-[#C9CED8] tw-p-1.5 tw-rounded-lg"
        @click="handleNextWeekClick"
        type="button"
      >
        <v-icon
          class="tw-text-main"
          icon="mdi-chevron-right"
        ></v-icon>
      </button>
    </div>
    <div>
      <div class="tw-w-full tw-text-center tw-mb-4"><span
        class="tw-font-semibold tw-py-2.5 tw-px-5 tw-border-b tw-border-solid tw-border-[#C9CED8]"
      >Select a time slot</span></div>
      <div class="tw-w-full tw-flex tw-items-center tw-justify-center tw-gap-1.5 tw-mb-4">
        <v-icon
          icon="tw-text-[#5B657C] mdi-clock-outline"
          size="16"
        ></v-icon>
        <span class="tw-text-[#5B657C] tw-text-sm">1 hour meeting</span>
      </div>
      <div
        class="tw-grid tw-grid-cols-3 tw-gap-2"
        v-if="!loading"
      >
        <button
          :class="['tw-flex tw-items-center tw-justify-center tw-border tw-border-solid tw-font-semibold tw-antialiased tw-text-sm tw-p-2 tw-rounded-lg', {
            'tw-cursor-pointer tw-bg-main/5 tw-text-main tw-border-main': !isTimeUnavailable(time) && !(selectedTime &&  time[0].getTime() === selectedTime[0].getTime()),
            'tw-bg-main tw-text-white tw-border-main': selectedTime &&  time[0].getTime() === selectedTime[0].getTime(),
            'tw-bg-[#9AA4B5]/30 tw-cursor-not-allowed tw-text-[#9AA4B5] tw-border-[#9AA4B5]': isTimeUnavailable(time)
          }]"
          v-for="time in availableTimes"
          :key="time[0].getMilliseconds()"
          @click="handleTimeChange(time)"
          type="button"
        >
          {{ format(time[0], 'HH:mm aa') }}
        </button>
      </div>
      <div
        class="tw-grid tw-grid-cols-3 tw-gap-2"
        v-if="loading"
      >
        <div
          class="tw-cursor-wait tw-rounded-lg tw-h-[38px] tw-bg-gray-200 tw-animate-pulse"
          v-for="(_, index) in Array.from({ length: 9 })"
          :key="'loading-time-' + index"
        >
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
