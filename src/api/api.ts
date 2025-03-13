/* tslint:disable */
/* eslint-disable */
/**
 * yumemi backend API
 * YumemibanのAPIサーバー
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import type { Configuration } from './configuration';
import type { AxiosPromise, AxiosInstance, RawAxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from './common';
import type { RequestArgs } from './base';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, BaseAPI, RequiredError, operationServerMap } from './base';

/**
 * 
 * @export
 * @interface RequestPostCreateRequest
 */
export interface RequestPostCreateRequest {
    /**
     * 
     * @type {string}
     * @memberof RequestPostCreateRequest
     */
    'content': string;
    /**
     * 
     * @type {string}
     * @memberof RequestPostCreateRequest
     */
    'nickname': string;
    /**
     * 
     * @type {string}
     * @memberof RequestPostCreateRequest
     */
    'novel': string;
    /**
     * 
     * @type {string}
     * @memberof RequestPostCreateRequest
     */
    'title': string;
}
/**
 * 
 * @export
 * @interface ResponseDiscoverLatestResponse
 */
export interface ResponseDiscoverLatestResponse {
    /**
     * 
     * @type {Array<ResponseDiscoverResponse>}
     * @memberof ResponseDiscoverLatestResponse
     */
    'list': Array<ResponseDiscoverResponse>;
}
/**
 * 
 * @export
 * @interface ResponseDiscoverResponse
 */
export interface ResponseDiscoverResponse {
    /**
     * 
     * @type {string}
     * @memberof ResponseDiscoverResponse
     */
    'content': string;
    /**
     * 
     * @type {string}
     * @memberof ResponseDiscoverResponse
     */
    'createdAt': string;
    /**
     * 
     * @type {string}
     * @memberof ResponseDiscoverResponse
     */
    'id': string;
    /**
     * 
     * @type {number}
     * @memberof ResponseDiscoverResponse
     */
    'likes': number;
    /**
     * 
     * @type {string}
     * @memberof ResponseDiscoverResponse
     */
    'nickname': string;
    /**
     * 
     * @type {string}
     * @memberof ResponseDiscoverResponse
     */
    'novel': string;
    /**
     * 
     * @type {string}
     * @memberof ResponseDiscoverResponse
     */
    'title': string;
    /**
     * 
     * @type {string}
     * @memberof ResponseDiscoverResponse
     */
    'updatedAt': string;
    /**
     * 
     * @type {string}
     * @memberof ResponseDiscoverResponse
     */
    'userId': string;
}
/**
 * 
 * @export
 * @interface ResponsePostCreateResponse
 */
export interface ResponsePostCreateResponse {
    /**
     * 
     * @type {string}
     * @memberof ResponsePostCreateResponse
     */
    'content': string;
    /**
     * 
     * @type {string}
     * @memberof ResponsePostCreateResponse
     */
    'createdAt': string;
    /**
     * 
     * @type {string}
     * @memberof ResponsePostCreateResponse
     */
    'id': string;
    /**
     * 
     * @type {string}
     * @memberof ResponsePostCreateResponse
     */
    'nickname': string;
    /**
     * 
     * @type {string}
     * @memberof ResponsePostCreateResponse
     */
    'novel': string;
    /**
     * 
     * @type {string}
     * @memberof ResponsePostCreateResponse
     */
    'title': string;
    /**
     * 
     * @type {string}
     * @memberof ResponsePostCreateResponse
     */
    'updatedAt': string;
    /**
     * 
     * @type {string}
     * @memberof ResponsePostCreateResponse
     */
    'userId': string;
}
/**
 * 
 * @export
 * @interface ResponseUserSignupResponse
 */
export interface ResponseUserSignupResponse {
    /**
     * 
     * @type {string}
     * @memberof ResponseUserSignupResponse
     */
    'accessToken': string;
    /**
     * 
     * @type {string}
     * @memberof ResponseUserSignupResponse
     */
    'createdAt': string;
    /**
     * 
     * @type {string}
     * @memberof ResponseUserSignupResponse
     */
    'id': string;
    /**
     * 
     * @type {string}
     * @memberof ResponseUserSignupResponse
     */
    'name': string;
    /**
     * 
     * @type {string}
     * @memberof ResponseUserSignupResponse
     */
    'password': string;
    /**
     * 
     * @type {string}
     * @memberof ResponseUserSignupResponse
     */
    'refreshToken': string;
    /**
     * 
     * @type {string}
     * @memberof ResponseUserSignupResponse
     */
    'updatedAt': string;
}

/**
 * DiscoverApi - axios parameter creator
 * @export
 */
export const DiscoverApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 最新の投稿を一覧取得する
         * @summary GetLatest
         * @param {string} [lastId] 最後の投稿ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        discoverLatestGet: async (lastId?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/discover/latest`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (lastId !== undefined) {
                localVarQueryParameter['lastId'] = lastId;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * DiscoverApi - functional programming interface
 * @export
 */
export const DiscoverApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = DiscoverApiAxiosParamCreator(configuration)
    return {
        /**
         * 最新の投稿を一覧取得する
         * @summary GetLatest
         * @param {string} [lastId] 最後の投稿ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async discoverLatestGet(lastId?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ResponseDiscoverLatestResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.discoverLatestGet(lastId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['DiscoverApi.discoverLatestGet']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * DiscoverApi - factory interface
 * @export
 */
export const DiscoverApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = DiscoverApiFp(configuration)
    return {
        /**
         * 最新の投稿を一覧取得する
         * @summary GetLatest
         * @param {string} [lastId] 最後の投稿ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        discoverLatestGet(lastId?: string, options?: RawAxiosRequestConfig): AxiosPromise<ResponseDiscoverLatestResponse> {
            return localVarFp.discoverLatestGet(lastId, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * DiscoverApi - object-oriented interface
 * @export
 * @class DiscoverApi
 * @extends {BaseAPI}
 */
export class DiscoverApi extends BaseAPI {
    /**
     * 最新の投稿を一覧取得する
     * @summary GetLatest
     * @param {string} [lastId] 最後の投稿ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DiscoverApi
     */
    public discoverLatestGet(lastId?: string, options?: RawAxiosRequestConfig) {
        return DiscoverApiFp(this.configuration).discoverLatestGet(lastId, options).then((request) => request(this.axios, this.basePath));
    }
}



/**
 * PostApi - axios parameter creator
 * @export
 */
export const PostApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 投稿を新規作成する
         * @summary CreatePost
         * @param {RequestPostCreateRequest} request 投稿作成リクエスト
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postsPost: async (request: RequestPostCreateRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'request' is not null or undefined
            assertParamExists('postsPost', 'request', request)
            const localVarPath = `/posts`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(request, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 投稿にいいねをつける
         * @summary LikePost
         * @param {string} postId 投稿ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postsPostIdLikesPost: async (postId: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'postId' is not null or undefined
            assertParamExists('postsPostIdLikesPost', 'postId', postId)
            const localVarPath = `/posts/{postId}/likes`
                .replace(`{${"postId"}}`, encodeURIComponent(String(postId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * PostApi - functional programming interface
 * @export
 */
export const PostApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = PostApiAxiosParamCreator(configuration)
    return {
        /**
         * 投稿を新規作成する
         * @summary CreatePost
         * @param {RequestPostCreateRequest} request 投稿作成リクエスト
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async postsPost(request: RequestPostCreateRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ResponsePostCreateResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.postsPost(request, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PostApi.postsPost']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 投稿にいいねをつける
         * @summary LikePost
         * @param {string} postId 投稿ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async postsPostIdLikesPost(postId: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.postsPostIdLikesPost(postId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PostApi.postsPostIdLikesPost']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * PostApi - factory interface
 * @export
 */
export const PostApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = PostApiFp(configuration)
    return {
        /**
         * 投稿を新規作成する
         * @summary CreatePost
         * @param {RequestPostCreateRequest} request 投稿作成リクエスト
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postsPost(request: RequestPostCreateRequest, options?: RawAxiosRequestConfig): AxiosPromise<ResponsePostCreateResponse> {
            return localVarFp.postsPost(request, options).then((request) => request(axios, basePath));
        },
        /**
         * 投稿にいいねをつける
         * @summary LikePost
         * @param {string} postId 投稿ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postsPostIdLikesPost(postId: string, options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.postsPostIdLikesPost(postId, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * PostApi - object-oriented interface
 * @export
 * @class PostApi
 * @extends {BaseAPI}
 */
export class PostApi extends BaseAPI {
    /**
     * 投稿を新規作成する
     * @summary CreatePost
     * @param {RequestPostCreateRequest} request 投稿作成リクエスト
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PostApi
     */
    public postsPost(request: RequestPostCreateRequest, options?: RawAxiosRequestConfig) {
        return PostApiFp(this.configuration).postsPost(request, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 投稿にいいねをつける
     * @summary LikePost
     * @param {string} postId 投稿ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PostApi
     */
    public postsPostIdLikesPost(postId: string, options?: RawAxiosRequestConfig) {
        return PostApiFp(this.configuration).postsPostIdLikesPost(postId, options).then((request) => request(this.axios, this.basePath));
    }
}



/**
 * UserApi - axios parameter creator
 * @export
 */
export const UserApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * ユーザーを新規作成する
         * @summary CreateUser
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        signupPost: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/signup`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * UserApi - functional programming interface
 * @export
 */
export const UserApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = UserApiAxiosParamCreator(configuration)
    return {
        /**
         * ユーザーを新規作成する
         * @summary CreateUser
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async signupPost(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ResponseUserSignupResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.signupPost(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['UserApi.signupPost']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * UserApi - factory interface
 * @export
 */
export const UserApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = UserApiFp(configuration)
    return {
        /**
         * ユーザーを新規作成する
         * @summary CreateUser
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        signupPost(options?: RawAxiosRequestConfig): AxiosPromise<ResponseUserSignupResponse> {
            return localVarFp.signupPost(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * UserApi - object-oriented interface
 * @export
 * @class UserApi
 * @extends {BaseAPI}
 */
export class UserApi extends BaseAPI {
    /**
     * ユーザーを新規作成する
     * @summary CreateUser
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApi
     */
    public signupPost(options?: RawAxiosRequestConfig) {
        return UserApiFp(this.configuration).signupPost(options).then((request) => request(this.axios, this.basePath));
    }
}



