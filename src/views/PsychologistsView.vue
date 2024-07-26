<script setup lang="ts">

import { computed, ref } from 'vue';
import LayoutHeader from '@/modules/layout/components/LayoutHeader.vue';
import { useGetPsychologist } from '@/modules/psychologist/hooks/get-psychologists.hook';
import PsychologistList from '@/modules/psychologist/components/PsychologistList.vue';

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
  <div class="tw-bg-[#F3F3F3]">
    <layout-header></layout-header>
    <div
      class="tw-flex tw-w-full tw-max-w-6xl tw-mx-auto tw-min-h-[calc(100vh-81px)] tw-px-4 tw-py-7"
    >
      <psychologist-list
        :total-pages="psychologists?.totalPages"
        :not-found="isNotFound"
        :loading="isLoading"
        :psychologists="psychologists?.data || []"
        @page-changed="handlePageChanged"
      >
      </psychologist-list>
    </div>
  </div>
</template>

<style scoped>

</style>
