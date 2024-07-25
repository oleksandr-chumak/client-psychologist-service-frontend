<script lang="ts">
import { defineComponent } from 'vue';
import TeleportModal from '@/modules/components/TeleportModal.vue';
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
    <login-form></login-form>
  </teleport-modal>
</template>
