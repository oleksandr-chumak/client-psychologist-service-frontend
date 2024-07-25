import { STORAGE_KEYS } from '@/modules/common/consts/local-storage.const';

export class TokenService {
  static saveToken(token: string): void {
    localStorage.setItem(STORAGE_KEYS.TOKEN, token);
  }

  static getToken(): string | null {
    return localStorage.getItem(STORAGE_KEYS.TOKEN);
  }

  static deleteToken(): void {
    localStorage.removeItem(STORAGE_KEYS.TOKEN);
  }
}
