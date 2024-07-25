<script lang="ts">
import { defineComponent } from 'vue';
import TeleportModal from '@/modules/components/TeleportModal.vue';
import RegistrationForm from '@/modules/auth/components/forms/RegistrationForm.vue';

export default defineComponent({
  components: { RegistrationForm, TeleportModal },
  emits: ['close'],
  props: {
    open: {
      type: Boolean,
      default: false
    }
  },
  setup(props, { emit }) {
    const handleClose = () => emit('close');

    return {
      handleClose,
      props
    };
  }
});

</script>

<template>
  <teleport-modal
    @close="handleClose"
    :open="props.open"
  >
    <h3 class="tw-text-[40px] tw-font-medium tw-leading-[48px] tw-mb-4">Registration</h3>
    <p class="tw-text-base tw-leading-5 tw-text-[#191A15]/50 tw-font-normal tw-mb-4">Thank you for your interest in our platform! In order to register, we need some information. Please provide us with the following information.</p>
    <registration-form></registration-form>
  </teleport-modal>
</template>
