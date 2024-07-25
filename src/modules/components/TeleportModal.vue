<script lang="ts">
import { computed, defineComponent } from 'vue';

export default defineComponent({
  emits: ['close'],
  props: {
    open: {
      type: Boolean,
      default: false
    },
    modalOverlayClass: {
      type: String,
      default: ''
    },
    modalContentClass: {
      type: String,
      default: ''
    }
  },
  setup(props, { emit }) {
    const handleModalClose = () => emit('close');

    const computedModalOverlayClass = computed(() => ['fixed top-0 left-0 w-screen h-screen bg-[#00000066]', { [props.modalOverlayClass]: !!props.modalOverlayClass }]);
    const computedModalContentClass = computed(() => ['fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[white] p-16 rounded-3xl max-w-[566px] w-3/6', { [props.modalContentClass]: !!props.modalContentClass }]);

    return {
      handleModalClose,
      computedModalOverlayClass,
      computedModalContentClass,
      props
    };
  }
});
</script>

<template>
  <teleport to="body">
    <div v-if="open">
      <div
        :class="computedModalOverlayClass"
        @click="handleModalClose"
      />
      <div :class="computedModalContentClass">
        <div class="relative">
          <button
            @click="handleModalClose"
            class="absolute top-0 right-0 -translate-y-12 translate-x-12"
          >
            <v-icon
              icon="mdi-window-close"
            ></v-icon>
          </button>
          <slot></slot>
        </div>
      </div>
    </div>
  </teleport>
</template>
