<script setup lang="ts">
import { AxiosError } from 'axios';
import FeedbackForm from '@/modules/psychologist/components/forms/comment-form/FeedbackForm.vue';
import type { Feedback, FeedbackFormValues } from '@/modules/psychologist/types/feedback.type';
import { useCreateFeedbackMutation } from '@/modules/psychologist/hooks/api/feedbacks/create-feedback.hook';
import { useToast } from 'vue-toastification';

const props = defineProps<{ psychologistId: number }>();
const emit = defineEmits<{ successCreate: [data: Feedback] }>();

const toast = useToast();

const { createFeedback, loading } = useCreateFeedbackMutation();

const handleSuccessSubmit = async (data: FeedbackFormValues) => {
  try {
    const feedback = await createFeedback(props.psychologistId, data);
    emit('successCreate', feedback);
  } catch (e) {
    console.error('error', e);
    const errorMessage = e instanceof AxiosError ? e.response?.data.message || e.message : 'An error occurred';
    console.log('error');
    toast.error(errorMessage, {
      timeout: 2000
    });
  }
};

</script>

<template>
  <feedback-form
    @success-submit="handleSuccessSubmit"
    :loading="loading"
  ></feedback-form>
</template>

<style scoped>

</style>
