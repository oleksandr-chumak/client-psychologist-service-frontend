<template>
  <button
    :class="buttonClass"
    @click="handleClick"
    :type="type"
    :disabled="props.disabled || props.loading"
  >
    <slot v-if="!props.loading"></slot>
    <v-progress-circular
      :size="props.size === 'medium' ? 18 : 14"
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
    buttonStyle?: 'outlined' | 'filled',
    size?: 'small' | 'medium'
    type?: 'button' | 'submit'
    rounded?: boolean
    class?: string
  }>(),
  {
    loading: false,
    disabled: false,
    buttonStyle: 'filled',
    type: 'button',
    class: '',
    rounded: true,
    size: 'medium'
  }
);

const emit = defineEmits<{ click: [event: MouseEvent] }>();

const handleClick = (event: MouseEvent) => {
  emit('click', event);
};

const buttonClass = computed(() => [
  'tw-font-medium',
  {
    'tw-bg-main tw-text-white': props.buttonStyle === 'filled',
    'tw-border tw-border-solid tw-border-[#C7CBCA] tw-text-black tw-bg-transparent': props.buttonStyle === 'outlined',
    'tw-opacity-50 tw-cursor-not-allowed': props.loading || props.disabled,
    [`${props.buttonStyle === 'outlined' ? 'tw-py-[13px]' : 'tw-py-3.5'} tw-px-10 tw-text-base tw-leading-5`]: props.size === 'medium',
    [`${props.buttonStyle === 'outlined' ? 'tw-py-[9px]' : 'tw-py-2.5'} tw-px-4 tw-text-xs tw-leading-4`]: props.size === 'small',
    'tw-rounded-lg': !props.rounded,
    'tw-rounded-full': props.rounded,
    [props.class]: props.class
  }
]);
</script>
