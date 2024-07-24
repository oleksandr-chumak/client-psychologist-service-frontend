<template>
  <button
    :class="buttonClass"
    @click="handleClick"
    :disabled="props.disabled || props.loading"
  >
    <slot v-if="!props.loading"></slot>
    <v-progress-circular
      :size="18"
      v-if="props.loading"
      indeterminate
    ></v-progress-circular>
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = withDefaults(
  defineProps<{
    loading?: boolean,
    disabled?: boolean,
    buttonStyle?: 'outlined' | 'filled'
  }>(),
  {
    loading: false,
    disabled: false,
    buttonStyle: 'filled'
  }
);

const emit = defineEmits<{ click: [event: MouseEvent] }>();

const handleClick = (event: MouseEvent) => {
  emit('click', event);
};

const buttonClass = computed(() => {
  return [
    'py-3.5 px-10 text-base leading-5 font-medium rounded-full',
    {
      'bg-[#54BE96] text-white': props.buttonStyle === 'filled',
      'border border-[#C7CBCA] text-black bg-transparent py-[13px]': props.buttonStyle === 'outlined',
      'opacity-50 cursor-not-allowed': props.loading
    }
  ];
});
</script>
