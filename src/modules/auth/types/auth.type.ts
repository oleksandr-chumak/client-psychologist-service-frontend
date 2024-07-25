import type { Client } from '@/modules/client/types/client.type';

export interface LoginClientBody {
  email: string;
  password: string;
}

export interface LoginClientResponse {
  accessToken: string;
}

export interface RegisterClientBody {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface RegisterClientResponse extends Client {}
