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
    'tw-py-3.5 tw-px-10 tw-text-base tw-leading-5 tw-font-medium tw-rounded-full',
    {
      'tw-bg-main tw-text-white': props.buttonStyle === 'filled',
      'tw-border tw-border-solid tw-border-[#C7CBCA] tw-text-black tw-bg-transparent tw-py-[13px]': props.buttonStyle === 'outlined',
      'tw-opacity-50 tw-cursor-not-allowed': props.loading
    }
  ];
});
</script>
