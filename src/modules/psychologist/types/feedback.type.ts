import type { Client } from '@/modules/client/types/client.type';
import type { Psychologist } from '@/modules/psychologist/types/psychologist.type';

export interface FeedbackFormValues {
  rating: number;
  content: string;
}

export interface CreateFeedbackBody {
  rating: number;
  content: string;
}

export interface Feedback {
  id: number;
  content: string;
  psychologist: Psychologist;
  client: Client;
  rating: number;
  createdAt: string;
  updatedAt: string;
}
