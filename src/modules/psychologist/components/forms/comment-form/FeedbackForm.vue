<script setup lang="ts">

import FormTextarea from '@/modules/common/components/inputs/FormTextarea.vue';
import { useForm } from 'vee-validate';
import StyledButton from '@/modules/common/components/StyledButton.vue';
import type { FeedbackFormValues } from '@/modules/psychologist/types/feedback.type';

const props = withDefaults(defineProps<{ loading?: boolean }>(), { loading: false });

const emit = defineEmits<{
  successSubmit: [data: FeedbackFormValues];
}>();

const { handleSubmit, defineField, setFieldValue } = useForm<FeedbackFormValues>({
  initialValues: {
    content: '',
    rating: 3
  }
});
const [content] = defineField('content');
const [rating] = defineField('rating');

const onSubmit = handleSubmit((data) => {
  emit('successSubmit', data);
});

const handleRatingChange = (value: number | string) => {
  setFieldValue('rating', Number(value));
};

</script>

<template>
  <form
    class="tw-flex tw-flex-col tw-gap-2"
    @submit="onSubmit"
  >
    <span class="tw-font-semibold tw-text-sm">Your service rating</span>
    <v-rating
      active-color="#FFC530"
      color="#FFC530"
      v-model="rating"
      @update:model-value="handleRatingChange"
    ></v-rating>
    <span class="tw-font-semibold tw-text-sm">Feedback</span>
    <form-textarea
      placeholder="Write your feedback here"
      name="content"
    ></form-textarea>
    <styled-button
      class="tw-w-32"
      type="submit"
      :loading="props.loading"
      :disabled="content.length === 0"
      :rounded="false"
      size="small"
    >Post feedback
    </styled-button>
  </form>
</template>

<style scoped>

</style>
