<script setup lang="ts">

import type { Psychologist } from '@/modules/psychologist/types/psychologist.type';
import PsychologistDetails from '@/modules/psychologist/components/PsychologistDetails.vue';

defineProps<{ psychologist: Psychologist }>();

</script>

<template>
  <div class="tw-w-full tw-p-6 tw-rounded-3xl tw-bg-white">
    <psychologist-details :psychologist="psychologist"></psychologist-details>
  </div>
</template>

<style scoped>

</style>
