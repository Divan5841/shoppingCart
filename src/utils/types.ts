import { AxiosResponse } from 'axios'

export type RestResponse<T = Record<string, unknown>> = Promise<
  AxiosResponse<T>
>

export type RestApi<P = {}, R = Record<string, unknown>> = (
  payload?: P,
) => RestResponse<R>

export type WithRequired<T, K extends keyof T> = Pick<T, K> & Partial<Omit<T, K>>;
