export interface Psychologist {
  id: number;
  firstName: string;
  lastName: string;
  fullName: string;
  rating: number | null;
  email: string;
  experienceAmount: number;
  experienceUnit: string;
  license: string;
  specialization: string;
  description: string;
  initialConsultation: string;
  ratePerHour: number;
  createdAt: string;
}
