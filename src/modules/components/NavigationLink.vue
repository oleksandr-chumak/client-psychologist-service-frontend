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
      'text-[#191A15] font-normal leading-5': props.linkStyle === 'text',
      'py-3.5 px-10 text-base leading-5 font-medium rounded-full bg-main text-white': props.linkStyle === 'button',
      "relative after:content-[''] after:absolute after:-bottom-3 after:left-1/2 after:-translate-x-1/2 after:w-2 after:h-2 after:rounded-full after:bg-main" : props.linkStyle === "text" && props.active
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

