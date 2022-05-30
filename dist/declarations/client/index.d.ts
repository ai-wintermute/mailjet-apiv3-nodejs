import { IClientParams } from './IClient';
import { IRequestConfig } from '../request/IRequest';
import Request, { TRequestConstructorConfig } from '../request';
export declare type TClientConnectParams = Pick<IClientParams, 'config' | 'options'>;
declare class Client {
    private version;
    private config;
    private options;
    private apiKey?;
    private apiSecret?;
    private apiToken?;
    constructor(params: IClientParams);
    private init;
    private cloneParams;
    private setConfig;
    private setOptions;
    private tokenConnectStrategy;
    private basicConnectStrategy;
    get(resource: string, config?: TRequestConstructorConfig): Request;
    post(resource: string, config?: TRequestConstructorConfig): Request;
    put(resource: string, config?: TRequestConstructorConfig): Request;
    delete(resource: string, config?: TRequestConstructorConfig): Request;
    static apiConnect(apiKey: string, apiSecret: string, params?: TClientConnectParams): Client;
    static smsConnect(apiToken: string, params?: TClientConnectParams): Client;
    static config: Readonly<IRequestConfig>;
    static packageJSON: Readonly<{
        readonly name: string;
        readonly version: string;
        readonly main: string;
        readonly browser: string;
        readonly types: string;
        readonly description: string;
        readonly author: string;
        readonly license: string;
        readonly private: boolean;
        readonly keywords: string[];
        readonly engines: {
            node: string;
            npm: string;
        };
        readonly files: string[];
        readonly directories: {
            lib: string;
            docs: string;
        };
        readonly typescript: {
            definition: string;
        };
        readonly scripts: {
            test: string;
            "test:int": string;
            "test:unit": string;
            "test:watch": string;
            cover: string;
            "cover:int": string;
            "cover:unit": string;
            "cover:expandable": string;
            build: string;
            "build:dev": string;
            "build:release": string;
            "build:prepublish": string;
            "build:watch": string;
            lint: string;
            "lint:fix": string;
            "ts:run": string;
            "ts:watch": string;
            "ts:mocha": string;
            "ts:patch": string;
            docs: string;
        };
        readonly dependencies: {
            "json-bigint": string;
            qs: string;
            superagent: string;
            "url-join": string;
        };
        readonly devDependencies: {
            "@babel/core": string;
            "@babel/preset-env": string;
            "@types/chai": string;
            "@types/json-bigint": string;
            "@types/mocha": string;
            "@types/node": string;
            "@types/qs": string;
            "@types/superagent": string;
            "@types/url-join": string;
            "@typescript-eslint/eslint-plugin": string;
            "@typescript-eslint/parser": string;
            "babel-loader": string;
            chai: string;
            eslint: string;
            "eslint-config-airbnb-base": string;
            "eslint-import-resolver-typescript": string;
            "eslint-plugin-import": string;
            "eslint-plugin-tsdoc": string;
            mocha: string;
            nock: string;
            nyc: string;
            "terser-webpack-plugin": string;
            "ts-loader": string;
            "ts-node": string;
            "ts-node-dev": string;
            "ts-patch": string;
            "tsconfig-paths": string;
            "tsconfig-paths-webpack-plugin": string;
            typedoc: string;
            typescript: string;
            "typescript-transform-paths": string;
            webpack: string;
            "webpack-cli": string;
            "webpack-merge": string;
        };
        readonly homepage: string;
        readonly repository: {
            type: string;
            url: string;
        };
        readonly bugs: {
            url: string;
        };
        readonly contributors: string[];
    }>;
}
export default Client;
