<script setup lang="ts">

import type { Psychologist } from '@/modules/psychologist/types/psychologist.type';
import PsychologistCard from '@/modules/psychologist/components/PsychologistCard.vue';

defineProps<{
  psychologists: Psychologist[],
  loading: boolean,
  notFound: boolean
}>();

</script>

<template>
  <div class="tw-w-full tw-flex tw-flex-col tw-gap-7">
    <psychologist-card
      v-for="psychologist in psychologists"
      :key="'psychologist-' + psychologist.id"
      :psychologist="psychologist"
    ></psychologist-card>

  </div>
</template>

<style scoped>

</style>
