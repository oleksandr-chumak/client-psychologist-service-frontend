<script setup lang="ts">
import type { Psychologist } from '@/modules/psychologist/types/psychologist.type';
import MockPsychologistImage from '@/assets/mock-psychologist-image.jpg';

defineProps<{ psychologist: Psychologist }>();

</script>

<template>
  <div class="tw-flex tw-gap-6 ">
    <div
      class="tw-size-[120px] tw-p-2.5 tw-border-2 tw-border-solid tw-border-main/20 tw-rounded-[30px]"
    >
      <div class="tw-size-24 tw-rounded-[15px] tw-overflow-x-auto">
        <img
          class="tw-object-cover tw-object-center tw-size-full"
          alt="psychologist image"
          :src="MockPsychologistImage"
        />
      </div>
    </div>
    <div class="tw-w-full">
      <div class="tw-flex tw-justify-between">
        <span class="tw-font-medium tw-text-base tw-text-[#8A8A89]">Psychologist</span>
        <div class="tw-flex tw-gap-2 tw-items-center">
          <div class="tw-flex tw-gap-1">
            <v-icon
              class="tw-text-[#FFC530]"
              icon="mdi-star"
            ></v-icon>
            <span class="tw-font-medium tw-text-base">
              Rating: 4.8
            </span>
          </div>
          <div class="tw-w-[1px] tw-h-[70%] tw-bg-[#CDCECD]" />
          <span class="tw-font-medium tw-text-base">Price / 1 hour:
            <span class="tw-text-[#38CD3E]">
              {{ psychologist.ratePerHour }}$
            </span>
          </span>
        </div>
      </div>
      <div class="tw-mb-4">
        <span class="tw-font-medium tw-text-2xl">Dr. {{ psychologist.fullName }}</span>
      </div>
      <div class="tw-flex tw-gap-2 tw-flex-wrap tw-mb-4">
        <div class="tw-py-2 tw-px-4 tw-rounded-full tw-w-fit tw-bg-[#F3F3F3]">
          <span class="tw-font-medium"
          ><span class="tw-text-[#8A8A89]"
          >Experience:</span> {{ psychologist.experienceAmount + psychologist.experienceUnit.toLowerCase() + 's'
            }}</span>
        </div>
        <div class="tw-py-2 tw-px-4 tw-rounded-full tw-w-fit tw-bg-[#F3F3F3]">
          <span class="tw-font-medium"><span class="tw-text-[#8A8A89]">License:</span> {{ psychologist.license }}</span>
        </div>
        <div class="tw-py-2 tw-px-4 tw-rounded-full tw-w-fit tw-bg-[#F3F3F3]">
          <span class="tw-font-medium"><span class="tw-text-[#8A8A89]"
          >Specialization:</span> {{ psychologist.specialization }}</span>
        </div>
        <div class="tw-py-2 tw-px-4 tw-rounded-full tw-w-fit tw-bg-[#F3F3F3]">
          <span class="tw-font-medium"><span class="tw-text-[#8A8A89]"
          >Initial Consultation:</span> {{ psychologist.initialConsultation }}</span>
        </div>
      </div>
      <p class="tw-text-[#191A15]/50 tw-text-base tw-font-normal tw-leading-5 tw-line-clamp-5">
        {{ psychologist.description }}</p>
    </div>
  </div>
</template>

<style scoped>

</style>
