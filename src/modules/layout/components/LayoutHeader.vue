<script setup lang="ts">
import { ref } from 'vue';
import StyledButton from '@/modules/common/components/StyledButton.vue';
import NavigationLink from '@/modules/common/components/NavigationLink.vue';
import LoginModal from '@/modules/auth/components/modals/LoginModal.vue';
import RegistrationModal from '@/modules/auth/components/modals/RegistrationModal.vue';
import { useUserStore } from '@/modules/auth/stores/user.store';

const userStore = useUserStore();
const isLoginModalOpen = ref(false);
const isRegistrationModalOpen = ref(false);

const openLoginModal = () => isLoginModalOpen.value = true;
const closeLoginModal = () => isLoginModalOpen.value = false;
const openRegistrationModal = () => isRegistrationModalOpen.value = true;
const closeRegistrationModal = () => isRegistrationModalOpen.value = false;

</script>

<template>
  <div class="tw-py-4 tw-border-b">
    <div class="tw-flex tw-justify-between tw-w-full tw-max-w-6xl tw-mx-auto px-4">
      <div class="tw-flex tw-items-center tw-gap-4">
        <span class="tw-font-bold tw-text-xl tw-mr-20"><span class="tw-text-main">psychologists.</span>services</span>
        <navigation-link to="/">Home</navigation-link>
        <navigation-link to="/">Psychologist</navigation-link>
      </div>
      <div
        class="tw-flex tw-gap-4"
        v-if="!userStore.user"
      >
        <styled-button
          button-style="outlined"
          @click="openLoginModal"
        >
          Log In
        </styled-button>
        <styled-button @click="openRegistrationModal">Register</styled-button>
      </div>
      <styled-button
        button-style="outlined"
        @click="userStore.logout"
        v-if="userStore.user"
      >
        Log out
      </styled-button>
    </div>
  </div>
  <login-modal
    :open="isLoginModalOpen"
    @close="closeLoginModal"
  ></login-modal>
  <registration-modal
    :open="isRegistrationModalOpen"
    @close="closeRegistrationModal"
  ></registration-modal>
</template>
