import { AxiosProxyConfig, AxiosRequestConfig, AxiosRequestHeaders, ResponseType } from 'axios';
import { TObject } from "../types";
export interface IRequestConfig {
    host: string;
    version: string;
    output: ResponseType;
}
export interface IRequestOptions {
    timeout?: number;
    proxy?: AxiosProxyConfig;
    headers?: AxiosRequestHeaders;
    maxBodyLength?: number;
    maxContentLength?: number;
}
export declare type TRequestData = string | TObject.TUnknownRec;
export declare type TRequestParams = TObject.TUnknownRec;
export declare type TRequestMethodOptions<TBody extends TRequestData, TParams extends TObject.TUnknownRec> = {
    data?: TRequestData | TBody;
    params?: TRequestParams | TParams;
    performAPICall?: boolean;
};
export declare type TRequestConstructorConfig = null | Partial<IRequestConfig>;
export declare type TRequestAxiosConfig = Required<Pick<AxiosRequestConfig, 'url' | 'data' | 'params' | 'method' | 'headers' | 'responseType' | 'transformResponse'>> & Pick<AxiosRequestConfig, 'auth' | 'timeout' | 'proxy' | 'maxBodyLength' | 'maxContentLength'>;
export declare type TSubPath = 'REST' | 'DATA' | '';
