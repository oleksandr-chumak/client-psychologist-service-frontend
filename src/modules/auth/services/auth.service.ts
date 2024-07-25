import WebApiService from '@/modules/common/services/web-api.service';
import type {
  LoginClientBody,
  LoginClientResponse,
  RegisterClientBody,
  RegisterClientResponse
} from '@/modules/auth/types/auth.type';

class AuthService extends WebApiService {

  async login(body: LoginClientBody): Promise<LoginClientResponse> {
    const res = await this.post<LoginClientResponse>({
      url: 'auth/login/client',
      data: body
    });
    return res.data;
  }

  async register(body: RegisterClientBody): Promise<RegisterClientResponse> {
    const res = await this.post<RegisterClientResponse>({
      url: 'auth/register/client',
      data: body
    });
    return res.data;
  }

}

export default new AuthService();
