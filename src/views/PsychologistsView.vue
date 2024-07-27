<script setup lang="ts">

import { computed, ref } from 'vue';
import { useGetPsychologist } from '@/modules/psychologist/hooks/api/psychologists/get-psychologists.hook';
import PsychologistList from '@/modules/psychologist/components/lists/PsychologistList.vue';
import DefaultLayout from '@/modules/layout/components/DefaultLayout.vue';

const page = ref(0);

const params = computed(() => ({
  size: 5,
  page: page.value
}));

const { psychologists, isNotFound, isLoading } = useGetPsychologist(params);

const handlePageChanged = (newPage: number) => {
  page.value = newPage - 1;
};

</script>

<template>
  <default-layout>
    <psychologist-list
      :total-pages="psychologists?.totalPages"
      :not-found="isNotFound"
      :loading="isLoading"
      :psychologists="psychologists?.data || []"
      @page-changed="handlePageChanged"
    >
    </psychologist-list>
  </default-layout>
</template>

<style scoped>

</style>
