<script setup lang="ts">
import TeleportModal from '@/modules/common/components/TeleportModal.vue';
import RegistrationForm from '@/modules/auth/components/forms/RegistrationForm.vue';

const props = withDefaults(defineProps<{
  open: boolean;
}>(), {
  open: false
});

const emit = defineEmits(['close']);

const handleClose = () => emit('close');
</script>

<template>
  <teleport-modal
    @close="handleClose"
    :open="props.open"
  >
    <h3 class="tw-text-[40px] tw-font-medium tw-leading-[48px] tw-mb-4">Registration</h3>
    <p class="tw-text-base tw-leading-5 tw-text-[#191A15]/50 tw-font-normal tw-mb-4">
      Thank you for your interest in our platform! In order to register, we need some information.
      Please provide us with the following information.
    </p>
    <registration-form @on-success-submit="emit('close')"></registration-form>
  </teleport-modal>
</template>
