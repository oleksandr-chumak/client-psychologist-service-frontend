<script lang="ts">
import { computed, defineComponent, ref } from 'vue';
import FormInput from '@/modules/common/components/inputs/FormInput.vue';

export default defineComponent({
  name: 'PasswordFormInput',
  components: { FormInput },
  props: {
    inputWrapperClass: { type: String, default: '' },
    inputClass: String,
    placeholder: { type: String, default: 'Password' }
  },
  setup(props) {
    const type = ref<'text' | 'password'>('password');

    const inputWrapperClass = computed(() => [props.inputWrapperClass, 'tw-relative'].join(' '));
    const inputClass = computed(() => [props.inputClass, 'tw-pr-10'].join(' '));

    const changeType = (newType: 'text' | 'password') => type.value = newType;

    return {
      type,
      changeType,
      computedInputWrapperClass: inputWrapperClass.value,
      computedInputClass: inputClass.value,
      props
    };
  }
});
</script>

<template>
  <form-input
    :type="type"
    :placeholder="props.placeholder"
    :input-wrapper-class="computedInputWrapperClass"
    :input-class="computedInputClass"
  >
    <button
      class="tw-absolute tw-right-2 tw-top-1/2 -tw-translate-y-1/2"
      @click="changeType('text')"
      v-if="type === 'password'"
      type="button"
    >
      <v-icon icon="mdi-eye-off-outline"></v-icon>
    </button>
    <button
      class="tw-absolute tw-right-2 tw-top-1/2 -tw-translate-y-1/2"
      @click="changeType('password')"
      v-if="type === 'text'"
      type="button"
    >
      <v-icon icon="mdi-eye-outline"></v-icon>
    </button>
  </form-input>
</template>
