<script setup lang="ts">
import { ref, computed } from 'vue';
import FormInput from '@/modules/common/components/inputs/FormInput.vue';

const props = withDefaults(defineProps<{
  name: string;
  inputWrapperClass?: string;
  inputClass?: string;
  placeholder?: string;
}>(), {
  inputWrapperClass: '',
  inputClass: '',
  placeholder: 'Password'
});

const type = ref<'text' | 'password'>('password');
const inputWrapperClass = computed(() => [props.inputWrapperClass, 'tw-relative'].join(' '));
const inputClass = computed(() => [props.inputClass, 'tw-pr-10'].join(' '));

const changeType = (newType: 'text' | 'password') => {
  type.value = newType;
};
</script>

<template>
  <form-input
    :name="name"
    :type="type"
    :placeholder="placeholder"
    :input-wrapper-class="inputWrapperClass"
    :input-class="inputClass"
  >
    <button
      class="tw-absolute tw-right-2 tw-top-[26px] -tw-translate-y-1/2"
      @click="changeType('text')"
      v-if="type === 'password'"
      type="button"
    >
      <v-icon icon="mdi-eye-off-outline"></v-icon>
    </button>
    <button
      class="tw-absolute tw-right-2 tw-top-[26px] -tw-translate-y-1/2"
      @click="changeType('password')"
      v-if="type === 'text'"
      type="button"
    >
      <v-icon icon="mdi-eye-outline"></v-icon>
    </button>
  </form-input>
</template>
