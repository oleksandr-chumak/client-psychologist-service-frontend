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

    const computedModalOverlayClass = computed(() => ['tw-fixed tw-top-0 tw-left-0 tw-w-screen tw-h-screen tw-bg-[#00000066]', { [props.modalOverlayClass]: !!props.modalOverlayClass }]);
    const computedModalContentClass = computed(() => ['tw-fixed tw-top-1/2 tw-left-1/2 tw--translate-x-1/2 tw--translate-y-1/2 tw-bg-[white] tw-p-16 tw-rounded-3xl tw-max-w-[566px] tw-w-3/6', { [props.modalContentClass]: !!props.modalContentClass }]);

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
        <div class="tw-relative">
          <button
            @click="handleModalClose"
            class="tw-absolute tw-top-0 tw-right-0 tw--translate-y-12 tw-translate-x-12"
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
