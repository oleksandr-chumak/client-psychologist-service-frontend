<script lang="ts">
import { defineComponent } from 'vue';
import TeleportModal from '@/modules/components/TeleportModal.vue';

export default defineComponent({
  components: { TeleportModal },
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
    login modal
  </teleport-modal>
</template>
