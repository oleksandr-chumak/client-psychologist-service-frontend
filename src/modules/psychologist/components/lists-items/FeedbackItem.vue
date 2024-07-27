<script setup lang="ts">

import type { Feedback } from '@/modules/psychologist/types/feedback.type';

const props = defineProps<{ feedback: Feedback }>();

const firstNameChar = props.feedback.client.fullName[0];

</script>

<template>
  <div>
    <div class="tw-flex tw-gap-2 tw-mb-2">
      <div class="tw-flex tw-items-center tw-justify-center tw-size-11 tw-bg-main/20 tw-rounded-full">
        <span class="tw-font-medium tw-text-main tw-text-xl">{{ firstNameChar }}</span>
      </div>
      <div>
        <span class="tw-font-medium tw-text-base tw-leading-5">{{ props.feedback.client.fullName }}</span>
        <div class="tw-flex tw-mt-0.5">
          <v-icon
            size="16"
            class="tw-text-[#FFC530]"
            icon="mdi-star"
          ></v-icon>
          <span class="tw-text-sm tw-font-medium tw-leading-[16px]">{{ props.feedback.rating }}</span>
        </div>
      </div>
    </div>
    <div><p class="tw-text-[#191A15]/50 tw-text-base tw-leading-5">{{ props.feedback.content }}</p></div>
  </div>
</template>

<style scoped>

</style>
