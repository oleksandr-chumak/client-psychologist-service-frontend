import type { Client } from '@/modules/client/types/client.type';
import type { Psychologist } from '@/modules/psychologist/types/psychologist.type';

export interface AppointmentWithoutClientAndPsychologist {
  id: number;
  startTime: Date;
  endTime: Date;
  comment: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface Appointment extends AppointmentWithoutClientAndPsychologist {
  client: Client;
  psychologist: Psychologist;
}

export interface CreateAppointmentBody {
  startTime: Date;
  endTime: Date;
}
