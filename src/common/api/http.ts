import axios, {
  AxiosError,
  AxiosRequestConfig,
  InternalAxiosRequestConfig,
} from "axios";

export interface ApiError {
  message: string;
  status?: number;
  code?: string;
  details?: unknown;
  isApiError: true;
}

const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL ?? "";
const accessTokenStorageKey = "resonance_access_token";

const getAccessToken = () => {
  if (typeof window === "undefined") {
    return null;
  }

  return window.localStorage.getItem(accessTokenStorageKey);
};

export const apiClient = axios.create({
  baseURL,
  timeout: 30000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = getAccessToken();

    if (token) {
      config.headers.set("Authorization", `Bearer ${token}`);
    }

    return config;
  },
  (error) => Promise.reject(error),
);

apiClient.interceptors.response.use(
  (response) => response,
  (error: AxiosError<{ message?: string; code?: string; errors?: unknown }>) => {
    const normalizedError: ApiError = {
      isApiError: true,
      message:
        error.response?.data?.message ??
        error.message ??
        "Something went wrong while handling the request.",
      status: error.response?.status,
      code: error.response?.data?.code,
      details: error.response?.data?.errors ?? error.response?.data,
    };

    return Promise.reject(normalizedError);
  },
);

export const api = {
  get: async <TResponse>(url: string, config?: AxiosRequestConfig) =>
    (await apiClient.get<TResponse>(url, config)).data,
  post: async <TResponse, TPayload = unknown>(
    url: string,
    payload?: TPayload,
    config?: AxiosRequestConfig,
  ) => (await apiClient.post<TResponse>(url, payload, config)).data,
  put: async <TResponse, TPayload = unknown>(
    url: string,
    payload?: TPayload,
    config?: AxiosRequestConfig,
  ) => (await apiClient.put<TResponse>(url, payload, config)).data,
  patch: async <TResponse, TPayload = unknown>(
    url: string,
    payload?: TPayload,
    config?: AxiosRequestConfig,
  ) => (await apiClient.patch<TResponse>(url, payload, config)).data,
  delete: async <TResponse>(url: string, config?: AxiosRequestConfig) =>
    (await apiClient.delete<TResponse>(url, config)).data,
};
