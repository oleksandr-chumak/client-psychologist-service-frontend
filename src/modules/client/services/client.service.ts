import WebApiService from '@/modules/common/services/web-api.service';
import type { Client } from '@/modules/client/types/client.type';

class ClientService extends WebApiService {

  async me(): Promise<Client> {
    const res = await this.get<Client>({ url: 'clients/me' }, true);
    return res.data;
  }

}

export default new ClientService();
