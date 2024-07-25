import type { Ref } from 'vue';
import { ref } from 'vue';
import { defineStore } from 'pinia';
import type { Client } from '@/modules/client/types/client.type';
import { TokenService } from '@/modules/common/services/token.service';
import ClientService from '@/modules/client/services/client.service';

export const useUserStore = defineStore('user', () => {
  const user: Ref<Client | null> = ref<Client | null>(null);
  const isUseRetrieved = ref(false);

  async function retrieveUser() {
    const accessToken = TokenService.getToken();

    if (!accessToken) {
      user.value = null;
      return;
    }

    user.value = await ClientService.me();
  }

  async function init() {
    try {
      await retrieveUser();
    } catch (error) {
      if (TokenService.getToken()) {
        TokenService.deleteToken();
      }
      console.error(error);
    } finally {
      isUseRetrieved.value = true;
    }
  }

  function logout() {
    TokenService.deleteToken();
    user.value = null;
  }

  return { user, isUseRetrieved, init, retrieveUser, logout };
});
