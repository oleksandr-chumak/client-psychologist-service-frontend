<script setup lang="ts">
import FormInput from '@/modules/common/components/inputs/FormInput.vue';
import * as z from 'zod';
import { ref } from 'vue';
import { toTypedSchema } from '@vee-validate/zod';
import { useForm } from 'vee-validate';
import PasswordFormInput from '@/modules/common/components/inputs/PasswordFormInput.vue';
import StyledButton from '@/modules/common/components/StyledButton.vue';
import AuthService from '@/modules/auth/services/auth.service';
import { useToast } from 'vue-toastification';
import { AxiosError } from 'axios';

const schema = z.object({
  firstName: z.string().min(3, 'Must be at least 3 characters'),
  lastName: z.string().min(3, 'Must be at least 3 characters long'),
  email: z.string().email('Email must be email').min(1, 'Email is required'),
  password: z.string().min(8, 'Password must be at least 8 characters long').max(64, 'Password must be shorter than 64 characters')
});
type Schema = z.infer<typeof schema>
const validationSchema = toTypedSchema(schema);

const toast = useToast();
const { handleSubmit } = useForm<Schema>({
  validationSchema
});

const loading = ref(false);
const emit = defineEmits(['onSuccessSubmit']);

const onSubmit = handleSubmit(async (values) => {
  loading.value = true;
  try {
    await AuthService.register(values);
    toast.success('Registration success');
    emit('onSuccessSubmit');
  } catch (e) {
    console.error(e);
    const errorMessage = e instanceof AxiosError ? e.response?.data.message || e.message : 'An error occurred';
    toast.error(errorMessage, {
      timeout: 2000
    });
  } finally {
    loading.value = false;
  }
});

</script>

<template>
  <form
    class="tw-flex tw-flex-col tw-gap-1"
    @submit="onSubmit"
  >
    <div class="tw-flex tw-mb-0.5">
      <form-input
        name="firstName"
        input-wrapper-class="tw-mr-4"
        placeholder="First Name"
      ></form-input>
      <form-input
        name="lastName"
        placeholder="Last Name"
      ></form-input>
    </div>
    <form-input
      name="email"
      placeholder="Email"
    ></form-input>
    <password-form-input
      name="password"
      input-wrapper-class="mb-4"
    ></password-form-input>
    <styled-button
      :loading="loading"
      type="submit"
      class="tw-w-full"
    >Sign Up
    </styled-button>
  </form>
</template>

<style scoped>

</style>
