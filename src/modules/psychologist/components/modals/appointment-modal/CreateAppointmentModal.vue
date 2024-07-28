<script setup lang="ts">

import TeleportModal from '@/modules/common/components/TeleportModal.vue';
import type { Psychologist } from '@/modules/psychologist/types/psychologist.type';
import MockPsychologistImage from '@/assets/mock-psychologist-image.jpg';
import CreateAppointmentForm from '@/modules/psychologist/components/forms/appointment-form/CreateAppointmentForm.vue';

const props = withDefaults(defineProps<{ open?: boolean, psychologist: Psychologist }>(), { open: false });
const emit = defineEmits(['close']);

</script>

<template>
  <teleport-modal
    modal-wrapper-class="tw-max-w-[600px]"
    modal-body-class="tw-flex tw-flex-col tw-gap-4"
    :open="props.open"
    @close="emit('close')"
  >
    <h3 class="tw-text-[40px] tw-leading-[48px] tw-font-medium tw-mb-2">Make an appointment with a psychologists</h3>
    <p class="tw-text-base tw-font-normal tw-leading-5 tw-text-[#191A15]/50">You are on the verge of changing your life
      for the better. Fill
      out the short
      form below to
      book your personal
      appointment with a professional psychologist. We guarantee confidentiality and respect for your privacy.</p>
    <div class="tw-flex tw-gap-2">
      <div class="tw-size-11 tw-rounded-[15px] tw-overflow-x-auto">
        <img
          class="tw-object-cover tw-object-center tw-size-full"
          :src="MockPsychologistImage"
          alt="psychologist-image"
        />
      </div>
      <div class="tw-flex tw-flex-col tw-justify-evenly">
        <span class="tw-text-xs tw-font-medium tw-text-[#8A8A89]">Your psychologists</span>
        <span class="tw-text-base tw-font-medium">Dr. {{ psychologist.fullName }}</span>
      </div>
    </div>
    <create-appointment-form
      :psychologist-id="psychologist.id"
      @success-create="emit('close')"
    ></create-appointment-form>
  </teleport-modal>
</template>

<style scoped>

</style>
