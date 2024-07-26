<script setup lang="ts">
import { useForm } from 'vee-validate';
import * as z from 'zod';
import { toTypedSchema } from '@vee-validate/zod';
import FormInput from '@/modules/common/components/inputs/FormInput.vue';
import StyledButton from '@/modules/common/components/StyledButton.vue';
import PasswordFormInput from '@/modules/common/components/inputs/PasswordFormInput.vue';
import { AxiosError } from 'axios';
import { ref } from 'vue';
import { useToast } from 'vue-toastification';
import AuthService from '@/modules/auth/services/auth.service';
import { TokenService } from '@/modules/common/services/token.service';
import { useUserStore } from '@/modules/auth/stores/user.store';


const emit = defineEmits(['onSuccessSubmit']);
const loading = ref(false);

const schema = z.object({
  email: z.string().email('Email must be email').min(1, 'Email is required'),
  password: z.string().min(8, 'Password must be at least 8 characters long').max(64, 'Password must be shorter than 64 characters')
});
type Schema = z.infer<typeof schema>
const validationSchema = toTypedSchema(schema);
const userStore = useUserStore();

const toast = useToast();
const { handleSubmit } = useForm<Schema>({
  validationSchema
});

const onSubmit = handleSubmit(async (values) => {
  loading.value = true;
  try {
    const res = await AuthService.login(values);
    TokenService.saveToken(res.accessToken);
    await userStore.retrieveUser();
    toast.success('Login success');
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
      class="tw-w-full"
      type="submit"
    >Log In
    </styled-button>
  </form>
</template>

<style scoped>

</style>
