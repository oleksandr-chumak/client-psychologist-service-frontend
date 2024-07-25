import type { AxiosRequestConfig, AxiosStatic } from 'axios';
import axios from 'axios';
import { TokenService } from '@/modules/common/services/token.service';

class HttpService {
  private readonly baseUrl: string;
  private readonly apiVersion: string;
  private readonly fetchingService: AxiosStatic;

  constructor(
    baseUrl: string,
    apiVersion: string,
    fetchingService: AxiosStatic = axios
  ) {
    this.baseUrl = baseUrl;
    this.apiVersion = apiVersion;
    this.fetchingService = fetchingService;
  }

  get<T>(config: AxiosRequestConfig, withAuth: boolean = true) {
    if (withAuth) {
      config.headers = {
        ...config.headers,
        ...this.populateTokenToHeaderConfig()
      };
    }
    return this.fetchingService.get<T>(
      this.getFullApiUrl(config.url || ''),
      this.extractUrlAndDataFromConfig(config)
    );
  }

  put<T>(config: AxiosRequestConfig, withAuth: boolean = true) {
    if (withAuth) {
      config.headers = {
        ...config.headers,
        ...this.populateTokenToHeaderConfig()
      };
    }
    return this.fetchingService.put<T>(
      this.getFullApiUrl(config.url || ''),
      config.data,
      this.extractUrlAndDataFromConfig(config)
    );
  }

  post<T>(config: AxiosRequestConfig, withAuth: boolean = true) {
    if (withAuth) {
      config.headers = {
        ...config.headers,
        ...this.populateTokenToHeaderConfig()
      };
    }
    return this.fetchingService.post<T>(
      this.getFullApiUrl(config.url || ''),
      config.data,
      this.extractUrlAndDataFromConfig(config)
    );
  }

  delete<T>(config: AxiosRequestConfig, withAuth: boolean = true) {
    if (withAuth) {
      config.headers = {
        ...config.headers,
        ...this.populateTokenToHeaderConfig()
      };
    }
    return this.fetchingService.delete<T>(
      this.getFullApiUrl(config.url || ''),
      this.extractUrlAndDataFromConfig(config)
    );
  }

  private getFullApiUrl(url: string): string {
    return [this.baseUrl, this.apiVersion, url].filter(Boolean).join('/');
  }

  private populateTokenToHeaderConfig() {
    const token: string | null = TokenService.getToken();
    return token ? { Authorization: `Bearer ${token}` } : {};
  }

  private extractUrlAndDataFromConfig(config: AxiosRequestConfig): Omit<AxiosRequestConfig, 'data' | 'url'> {
    // eslint-disable-next-line no-unused-vars
    const { data, url, ...configWithoutDataAndUrl } = config;
    return configWithoutDataAndUrl;
  }

}

export default HttpService;
