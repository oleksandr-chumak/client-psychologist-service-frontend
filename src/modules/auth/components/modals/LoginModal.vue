<script lang="ts">
import { defineComponent } from 'vue';
import TeleportModal from '@/modules/common/components/TeleportModal.vue';
import LoginForm from '@/modules/auth/components/forms/LoginForm.vue';

export default defineComponent({
  components: { LoginForm, TeleportModal },
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
    <h3 class="tw-text-[40px] tw-font-medium tw-leading-[48px] tw-mb-4">Log In</h3>
    <p class="tw-text-base tw-leading-5 tw-text-[#191A15]/50 tw-font-normal tw-mb-4">Welcome back! Please enter your credentials to access your account and continue your search for a psychologist.</p>
    <login-form></login-form>
  </teleport-modal>
</template>
