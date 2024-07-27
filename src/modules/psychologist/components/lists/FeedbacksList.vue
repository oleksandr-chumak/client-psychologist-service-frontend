<script setup defer lang="ts">

import { computed, onMounted } from 'vue';
import { usePsychologistsFeedbacksStore } from '@/modules/psychologist/store/psychologist-feedbacks.store';
import FeedbackItem from '@/modules/psychologist/components/lists-items/FeedbackItem.vue';

const props = withDefaults(defineProps<{ psychologistId: number, wrapperClass?: string }>(), { wrapperClass: '' });

const store = usePsychologistsFeedbacksStore();

const wrapperClass = computed(() => ['tw-flex tw-flex-col tw-gap-2 tw-h-[300px] tw-overflow-y-scroll', { [props.wrapperClass]: props.wrapperClass }]);

onMounted(() => {
  const wrapper = document.querySelector('#feedbacks-list');
  const end = document.querySelector('#feedbacks-end');

  if (!wrapper || !end) return;

  store.setParams(props.psychologistId, { size: 5 });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !store.loading && store.hasNextPage) {
        store.fetchNextPage();
      }
    });
  }, { root: wrapper, threshold: 0 });

  observer.observe(end);
});

</script>

<template>
  <div
    id="feedbacks-list"
    :class="wrapperClass"
  >
    <feedback-item
      v-for="feedback in store.feedbacks"
      :key="'feedback-' + feedback.id"
      :feedback="feedback"
    ></feedback-item>
    <div
      class="tw-w-full tw-h-14"
      v-show="store.hasNextPage"
      id="feedbacks-end"
    >
      <v-skeleton-loader type="list-item-avatar"></v-skeleton-loader>
    </div>
    <div
      class="tw-w-full tw-text-center tw-font-medium"
      v-if="store.notFound"
    >
      No comments found
    </div>
  </div>
</template>

<style scoped>

</style>
