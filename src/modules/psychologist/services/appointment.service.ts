import WebApiService from '@/modules/common/services/web-api.service';
import type { PaginationResponse, WebApiParams } from '@/modules/common/types/web-api.type';
import type {
  Appointment,
  AppointmentWithoutClientAndPsychologist,
  CreateAppointmentBody
} from '@/modules/psychologist/types/appointment.type';

class AppointmentService extends WebApiService {

  async createAppointment(psychologistId: number, body: CreateAppointmentBody): Promise<Appointment> {
    const res = await this.post<Appointment>({
      url: `psychologists/${psychologistId}/appointments`,
      data: body
    }, true);

    return res.data;
  }

  async getPsychologistAppointments(psychologistId: number, params?: WebApiParams): Promise<PaginationResponse<AppointmentWithoutClientAndPsychologist>> {
    const res = await this.get<PaginationResponse<AppointmentWithoutClientAndPsychologist>>({
      url: `psychologists/${psychologistId}/appointments`,
      params
    });
    return res.data;
  }
}

export default new AppointmentService();
