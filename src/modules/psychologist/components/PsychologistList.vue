<script setup lang="ts">

import type { Psychologist } from '@/modules/psychologist/types/psychologist.type';
import PsychologistCard from '@/modules/psychologist/components/PsychologistCard.vue';

defineProps<{
  psychologists: Psychologist[],
  loading: boolean,
  notFound: boolean,
  totalPages?: number
}>();

const emit = defineEmits<{
  pageChanged: [page: number]
}>();

const handleModalChange = (page: number) => {
  emit('pageChanged', page);
};

</script>

<template>
  <div class="tw-w-full tw-flex tw-flex-col tw-gap-7 tw-justify-between">
    <div
      class="tw-flex tw-flex-col tw-gap-7"
      v-if="loading"
    >
      <div
        v-for="n in 5"
        :key="n"
        class="tw-flex tw-flex-col tw-w-full"
      >
        <v-skeleton-loader type="table-heading, list-item-three-line"></v-skeleton-loader>
      </div>
    </div>
    <div
      class="tw-flex tw-flex-col tw-gap-7"
      v-if="!loading"
    >
      <psychologist-card
        v-for="psychologist in psychologists"
        :key="'psychologist-' + psychologist.id"
        :psychologist="psychologist"
      ></psychologist-card>
    </div>
    <v-pagination @update:model-value="handleModalChange"
                  v-if="totalPages !== undefined"
                  :length="totalPages"
    ></v-pagination>
  </div>
</template>

<style scoped>

</style>
