<script setup lang="ts">
import { onBeforeMount, watchEffect } from 'vue';
import { useRoute, useRouter } from 'vue-router';

import { useGetPsychologistById } from '@/modules/psychologist/hooks/api/psychologists/get-psychologist-by-id.hook';
import PsychologistDetails from '@/modules/psychologist/components/PsychologistDetails.vue';
import DefaultLayout from '@/modules/layout/components/DefaultLayout.vue';
import StyledButton from '@/modules/common/components/StyledButton.vue';
import { useUserStore } from '@/modules/auth/stores/user.store';
import CreateFeedbackForm from '@/modules/psychologist/components/forms/comment-form/CreateFeedbackForm.vue';
import FeedbacksList from '@/modules/psychologist/components/lists/FeedbacksList.vue';
import { usePsychologistsFeedbacksStore } from '@/modules/psychologist/store/psychologist-feedbacks.store';
import CreateAppointmentModal
  from '@/modules/psychologist/components/modals/appointment-modal/CreateAppointmentModal.vue';
import { useModal } from '@/modules/common/hooks/modal.hook';

const userStore = useUserStore();
const store = usePsychologistsFeedbacksStore();
const route = useRoute();
const router = useRouter();

const id = Number(route.params.id);
const { psychologist, isLoading, isError } = useGetPsychologistById(id);
const { open, handleModalOpen, handleModalClose } = useModal();

const handleSuccessFeedbackCreate = () => {
  store.refetchData();
};

onBeforeMount(() => {
  if (Number.isNaN(id)) {
    router.push('/psychologists');
  }
});

watchEffect(() => {
  if (isError.value) {
    router.push('/psychologists');
  }
});

</script>

<template>
  <default-layout>
    <div
      class="tw-w-full tw-p-6 tw-rounded-3xl tw-bg-white"
      v-if="isLoading"
    >
      <v-skeleton-loader type="table-heading, list-item-three-line"></v-skeleton-loader>
    </div>
    <div
      class="tw-w-full tw-p-6 tw-rounded-3xl tw-bg-white"
      v-if="psychologist && !isLoading"
    >
      <psychologist-details :psychologist="psychologist"></psychologist-details>
      <div class="tw-ml-[142px] tw-mt-4">
        <div class="tw-mb-4">
          <styled-button
            @click="handleModalOpen"
            :disabled="!userStore.user"
          >
            {{ userStore.user ? 'Make an appointment' : 'Authorize to make an appointment' }}
          </styled-button>
        </div>
        <div class="tw-mb-4">
          <h4 class="tw-font-semibold tw-text-xl">
            Feedback {{ userStore.user ? '' : '(Authorize to leave feedback)' }}
          </h4>
        </div>
        <create-feedback-form
          v-if="!!userStore.user"
          @success-create="handleSuccessFeedbackCreate"
          :psychologist-id="psychologist.id"
        ></create-feedback-form>
        <feedbacks-list
          wrapper-class="tw-mt-4"
          :psychologist-id="psychologist.id"
        ></feedbacks-list>
      </div>
      <create-appointment-modal
        :open="open"
        :psychologist="psychologist"
        @close="handleModalClose"
      ></create-appointment-modal>
    </div>
  </default-layout>
</template>

<style scoped>

</style>
