<script setup lang="ts">

import { computed } from 'vue';

const props = withDefaults(defineProps<{
  to: string;
  linkStyle?: 'text' | 'button';
  active?: boolean;
}>(), {
  linkStyle: 'text',
  active: false
});

const linkClass = computed(() => {
  return [
    {
      'tw-text-[#191A15] tw-font-normal tw-leading-5': props.linkStyle === 'text',
      'tw-block tw-w-fit tw-py-3.5 tw-px-10 tw-text-base tw-leading-5 tw-font-medium tw-rounded-full tw-bg-main tw-text-white': props.linkStyle === 'button',
      "tw-relative tw-after:content-[''] tw-after:absolute tw-after:-bottom-3 tw-after:left-1/2 tw-after:-translate-x-1/2 tw-after:w-2 tw-after:h-2 tw-after:rounded-full tw-after:bg-main" : props.linkStyle === "text" && props.active
    }
  ];
});


</script>

<template>
  <router-link
    :class="linkClass"
    :to="props.to"
  >
    <slot></slot>
  </router-link>
</template>

