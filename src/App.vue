<script setup lang="ts">
import { useUserStore } from '@/modules/auth/stores/user.store';
import { onMounted } from 'vue';

const userStore = useUserStore();

onMounted(() => {
  userStore.init();
});

</script>

<template>
  <router-view v-if="userStore.isUseRetrieved" />
</template>

<style scoped></style>
