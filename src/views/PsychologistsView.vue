<script setup lang="ts">

import LayoutHeader from '@/modules/layout/components/LayoutHeader.vue';
import { useGetPsychologist } from '@/modules/psychologist/hooks/get-psychologists.hook';
import PsychologistList from '@/modules/psychologist/components/PsychologistList.vue';

const { psychologists, isNotFound, isLoading } = useGetPsychologist();

</script>

<template>
  <div class="tw-bg-[#F3F3F3]">
    <layout-header></layout-header>
    <div
      class="tw-flex tw-w-full tw-max-w-6xl tw-mx-auto tw-min-h-[calc(100vh-81px)] tw-h-full tw-px-4 tw-pt-7"
    >
      <psychologist-list
        :not-found="isNotFound"
        :loading="isLoading"
        :psychologists="psychologists?.data || []"
      >
      </psychologist-list>
    </div>
  </div>
</template>

<style scoped>

</style>
