<script setup lang="ts">
import { computed } from 'vue';


const props = withDefaults(defineProps<{
  error?: String
  placeholder?: string
  inputWrapperClass?: string
  inputClass?: string,
  type?: 'text' | 'password'
}>(), {
  inputClass: '',
  inputWrapperClass: '',
  type: 'text',
});

const inputClass = computed(() => [
  {
    [props.inputClass]: !!props.inputClass,
    'tw-border-red-500 tw-placeholder-red-500': props.error,
    'tw-border-zinc-200 tw-placeholder-black': !props.error
  },
  'tw-border tw-border-solid tw-rounded-lg tw-p-[13px] tw-w-full tw-placeholder-[black] tw-placeholder:font-normal tw-placeholder:text-base tw-placeholder:leading-5'
]);

const inputWrapperClass = computed(() => [
  "tw-w-full",
  {
    [props.inputWrapperClass]: !!props.inputWrapperClass,
  }
]);

const handleChange = (e) => {
  console.log(e);
};

</script>

<template>
  <div :class="inputWrapperClass">
    <input
      :class="inputClass"
      :placeholder="placeholder"
      :type="type"
      @change="handleChange"
    />
    <p
      class="tw-text-red-500 tw-text-sm"
      v-if="!!error"
    >{{ error }}</p>
    <slot></slot>
  </div>
  <div></div>
</template>

<style scoped>

</style>
