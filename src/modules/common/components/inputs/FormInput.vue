<script setup lang="ts">
import { computed, toRef } from 'vue';
import { useField } from 'vee-validate';

const props = withDefaults(defineProps<{
  name: string
  value?: string
  placeholder?: string
  inputWrapperClass?: string
  inputClass?: string,
  type?: 'text' | 'password'
}>(), {
  inputClass: '',
  inputWrapperClass: '',
  type: 'text'
});

const name = toRef(props, 'name');

const {
  value: inputValue,
  errorMessage,
  handleBlur,
  handleChange
} = useField(name, undefined, {
  initialValue: props.value
});

const inputWrapperClass = computed(() => ['tw-w-full', { [props.inputWrapperClass]: !!props.inputWrapperClass }]);

const inputClass = computed(() => [
  {
    [props.inputClass]: !!props.inputClass,
    'tw-border-red-500 tw-placeholder-red-500': errorMessage.value,
    'tw-border-zinc-200 tw-placeholder-black': !errorMessage.value
  },
  'tw-border tw-border-solid tw-rounded-lg tw-p-[13px] tw-w-full tw-placeholder-[black] tw-placeholder:font-normal tw-placeholder:text-base tw-placeholder:leading-5'
]);

</script>

<template>
  <div :class="inputWrapperClass">
    <input
      :name="name"
      :id="name"
      :value="inputValue"
      :class="inputClass"
      :placeholder="placeholder"
      :type="type"
      @input="handleChange"
      @blur="handleBlur"
    />
    <p
      class="tw-text-red-500 tw-text-sm tw-h-4"
    >{{ errorMessage || '' }}</p>
    <slot></slot>
  </div>
  <div></div>
</template>

<style scoped>

</style>
