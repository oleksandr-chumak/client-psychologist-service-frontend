import { ENV_VARIABLE } from '@/modules/common/consts/env-var.const';
import HttpService from '@/modules/common/services/http.service';


class WebApiService extends HttpService {

  constructor() {
    super(ENV_VARIABLE.WEB_API_URL, '');
  }
}

export default WebApiService;
