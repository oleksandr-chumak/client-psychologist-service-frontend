<script lang="ts">
import { defineComponent } from 'vue';
import FormInput from '@/modules/common/components/inputs/FormInput.vue';
import StyledButton from '@/modules/common/components/StyledButton.vue';
import PasswordFormInput from '@/modules/common/components/inputs/PasswordFormInput.vue';

export default defineComponent({
  name: 'RegistrationForm',
  components: { PasswordFormInput, StyledButton, FormInput }
});
</script>

<template>
  <form class="tw-flex tw-flex-col tw-gap-2">
    <div class="tw-flex tw-mb-2">
      <form-input
        input-wrapper-class="tw-mr-4"
        placeholder="First Name"
      ></form-input>
      <form-input placeholder="Last Name"></form-input>
    </div>
    <form-input placeholder="Email"></form-input>
    <password-form-input
      input-wrapper-class="mb-6"
    ></password-form-input>
    <styled-button class="tw-w-full">Sign Up</styled-button>
  </form>
</template>

<style scoped>

</style>
