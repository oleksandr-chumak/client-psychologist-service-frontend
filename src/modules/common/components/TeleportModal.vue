<script setup lang="ts">
import { computed } from 'vue';

const props = withDefaults(defineProps<{
  open: boolean;
  modalOverlayClass?: string;
  modalWrapperClass?: string;
  modalBodyClass?: string;
}>(), {
  open: false,
  modalOverlayClass: '',
  modalWrapperClass: '',
  modalBodyClass: ''
});

const emit = defineEmits(['close']);

const handleModalClose = () => emit('close');

const modalOverlayClass = computed(() => [
  'tw-fixed tw-top-0 tw-left-0 tw-w-screen tw-h-screen tw-bg-[#00000066]',
  { [props.modalOverlayClass]: !!props.modalOverlayClass }
]);

const modalWrapperClass = computed(() => [
  'tw-fixed tw-top-1/2 tw-left-1/2 tw--translate-x-1/2 tw--translate-y-1/2 tw-bg-[white] tw-p-16 tw-rounded-3xl tw-max-w-[566px] tw-w-3/6',
  { [props.modalWrapperClass]: !!props.modalWrapperClass }
]);

const modalBodyClass = computed(() => ['tw-relative', { [props.modalBodyClass]: !!props.modalBodyClass }]);

</script>

<template>
  <teleport to="body">
    <div v-if="open">
      <div
        :class="modalOverlayClass"
        @click="handleModalClose"
      />
      <div :class="modalWrapperClass">
        <div :class="modalBodyClass">
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
