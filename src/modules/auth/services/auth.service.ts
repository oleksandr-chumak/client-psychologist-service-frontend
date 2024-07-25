import WebApiService from '@/modules/common/services/web-api.service';
import type { LoginClientBody, LoginClientResponse, RegisterClientBody } from '@/modules/auth/types/auth.type';

class AuthService extends WebApiService {

  async login(body: LoginClientBody): Promise<LoginClientResponse> {
    const res = await this.post<LoginClientResponse>({
      url: 'auth/register/client',
      data: body
    });
    return res.data;
  }

  async register(body: RegisterClientBody): Promise<LoginClientResponse> {
    const res = await this.post<LoginClientResponse>({
      url: 'auth/register/psychologist',
      data: body
    });
    return res.data;
  }

}

export default new AuthService();
