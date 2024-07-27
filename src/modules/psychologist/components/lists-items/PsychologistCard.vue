<script setup lang="ts">

import type { Psychologist } from '@/modules/psychologist/types/psychologist.type';
import PsychologistDetails from '@/modules/psychologist/components/PsychologistDetails.vue';
import NavigationLink from '@/modules/common/components/NavigationLink.vue';

defineProps<{ psychologist: Psychologist }>();

</script>

<template>
  <div class="tw-w-full tw-p-6 tw-rounded-3xl tw-bg-white">
    <psychologist-details :psychologist="psychologist"></psychologist-details>
    <div class="tw-ml-[142px] tw-mt-4">
      <navigation-link
        class="tw-underline tw-underline-offset-4 tw-font-semibold tw-text-base"
        :to="`/psychologist/${psychologist.id}`"
      >Read More
      </navigation-link>
    </div>
  </div>
</template>

<style scoped>

</style>
