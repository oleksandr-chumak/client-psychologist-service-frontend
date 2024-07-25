<script setup lang="ts">
import { computed } from 'vue';


const props = withDefaults(defineProps<{
  error?: String
  placeholder?: string
  inputWrapperClass?: string
  inputClass?: string
}>(), {
  inputClass: ''
});

const inputClass = computed(() => [
  'tw-border tw-border-solid tw-border-slate-200 tw-rounded-lg tw-p-[13px] tw-w-full tw-placeholder-[black] tw-placeholder:font-normal tw-placeholder:text-base tw-placeholder:leading-5',
  {
    [props.inputClass]: !!props.inputClass,
    'tw-border-red-300': !!props.error
  },
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
      @change="handleChange"
    />
    <span v-if="!!error">{{ error }}</span>
    <slot></slot>
  </div>
  <div></div>
</template>

<style scoped>

</style>
