<script setup lang="ts">
import { useForm } from 'vee-validate';
import * as z from 'zod';
import { toTypedSchema } from '@vee-validate/zod';
import FormInput from '@/modules/common/components/inputs/FormInput.vue';
import StyledButton from '@/modules/common/components/StyledButton.vue';
import PasswordFormInput from '@/modules/common/components/inputs/PasswordFormInput.vue';

const schema = z.object({
  email: z.string().email('Email must be email').min(1, 'Email is required'),
  password: z.string().min(8, 'Password must be at least 8 characters long').max(64, 'Password must be shorter than 64 characters')
});
type Schema = z.infer<typeof schema>
const validationSchema = toTypedSchema(schema);

const { handleSubmit } = useForm<Schema>({
  validationSchema
});

const onSubmit = handleSubmit(values => {
  // pretty print the values object
  alert(JSON.stringify(values, null, 2));
});

</script>

<template>
  <form
    class="tw-flex tw-flex-col tw-gap-1"
    @submit="onSubmit"
  >
    <form-input
      name="email"
      placeholder="Email"
    ></form-input>
    <password-form-input
      name="password"
      input-wrapper-class="mb-4"
    ></password-form-input>
    <styled-button
      class="tw-w-full"
      type="submit"
    >Log In
    </styled-button>
  </form>
</template>

<style scoped>

</style>
