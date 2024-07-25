<script lang="ts">
import { defineComponent } from 'vue';
import FormInput from '@/modules/components/inputs/FormInput.vue';
import StyledButton from '@/modules/components/StyledButton.vue';
import PasswordFormInput from '@/modules/components/inputs/PasswordFormInput.vue';

export default defineComponent({
  name: 'LoginForm',
  components: { PasswordFormInput, StyledButton, FormInput }
});
</script>

<template>
  <form class="tw-flex tw-flex-col tw-gap-2">
    <form-input placeholder="Email"></form-input>
    <password-form-input
      input-wrapper-class="mb-6"
    ></password-form-input>
    <styled-button class="tw-w-full">Log In</styled-button>
  </form>
</template>

<style scoped>

</style>
