<script setup lang="ts">
import LayoutHeader from '@/modules/layout/components/LayoutHeader.vue';
</script>

<template>
  <div class="tw-bg-[#F3F3F3]">
    <layout-header></layout-header>
    <div
      class="tw-flex tw-w-full tw-max-w-6xl tw-mx-auto tw-min-h-[calc(100vh-81px)] tw-px-4 tw-py-7"
    >
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>

</style>
