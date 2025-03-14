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
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from './common';
// @ts-ignore
import { BASE_PATH, BaseAPI, operationServerMap } from './base';
/**
 * DiscoverApi - axios parameter creator
 * @export
 */
export const DiscoverApiAxiosParamCreator = function (configuration) {
    return {
        /**
         * 最新の投稿を一覧取得する
         * @summary GetLatest
         * @param {string} [lastId] 最後の投稿ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        discoverLatestGet: async (lastId, options = {}) => {
            const localVarPath = `/discover/latest`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options };
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            if (lastId !== undefined) {
                localVarQueryParameter['lastId'] = lastId;
            }
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    };
};
/**
 * DiscoverApi - functional programming interface
 * @export
 */
export const DiscoverApiFp = function (configuration) {
    const localVarAxiosParamCreator = DiscoverApiAxiosParamCreator(configuration);
    return {
        /**
         * 最新の投稿を一覧取得する
         * @summary GetLatest
         * @param {string} [lastId] 最後の投稿ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async discoverLatestGet(lastId, options) {
            var _a, _b, _c;
            const localVarAxiosArgs = await localVarAxiosParamCreator.discoverLatestGet(lastId, options);
            const localVarOperationServerIndex = (_a = configuration === null || configuration === void 0 ? void 0 : configuration.serverIndex) !== null && _a !== void 0 ? _a : 0;
            const localVarOperationServerBasePath = (_c = (_b = operationServerMap['DiscoverApi.discoverLatestGet']) === null || _b === void 0 ? void 0 : _b[localVarOperationServerIndex]) === null || _c === void 0 ? void 0 : _c.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    };
};
/**
 * DiscoverApi - factory interface
 * @export
 */
export const DiscoverApiFactory = function (configuration, basePath, axios) {
    const localVarFp = DiscoverApiFp(configuration);
    return {
        /**
         * 最新の投稿を一覧取得する
         * @summary GetLatest
         * @param {string} [lastId] 最後の投稿ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        discoverLatestGet(lastId, options) {
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
    discoverLatestGet(lastId, options) {
        return DiscoverApiFp(this.configuration).discoverLatestGet(lastId, options).then((request) => request(this.axios, this.basePath));
    }
}
/**
 * NovelApi - axios parameter creator
 * @export
 */
export const NovelApiAxiosParamCreator = function (configuration) {
    return {
        /**
         * 小説を生成する
         * @summary GenerateNovel
         * @param {RequestNovelGenerateRequest} request 小説生成リクエスト
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        novelsGeneratePost: async (request, options = {}) => {
            // verify required parameter 'request' is not null or undefined
            assertParamExists('novelsGeneratePost', 'request', request);
            const localVarPath = `/novels/generate`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options };
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            // authentication BearerAuth required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration);
            localVarHeaderParameter['Content-Type'] = 'application/json';
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
            localVarRequestOptions.data = serializeDataIfNeeded(request, localVarRequestOptions, configuration);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    };
};
/**
 * NovelApi - functional programming interface
 * @export
 */
export const NovelApiFp = function (configuration) {
    const localVarAxiosParamCreator = NovelApiAxiosParamCreator(configuration);
    return {
        /**
         * 小説を生成する
         * @summary GenerateNovel
         * @param {RequestNovelGenerateRequest} request 小説生成リクエスト
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async novelsGeneratePost(request, options) {
            var _a, _b, _c;
            const localVarAxiosArgs = await localVarAxiosParamCreator.novelsGeneratePost(request, options);
            const localVarOperationServerIndex = (_a = configuration === null || configuration === void 0 ? void 0 : configuration.serverIndex) !== null && _a !== void 0 ? _a : 0;
            const localVarOperationServerBasePath = (_c = (_b = operationServerMap['NovelApi.novelsGeneratePost']) === null || _b === void 0 ? void 0 : _b[localVarOperationServerIndex]) === null || _c === void 0 ? void 0 : _c.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    };
};
/**
 * NovelApi - factory interface
 * @export
 */
export const NovelApiFactory = function (configuration, basePath, axios) {
    const localVarFp = NovelApiFp(configuration);
    return {
        /**
         * 小説を生成する
         * @summary GenerateNovel
         * @param {RequestNovelGenerateRequest} request 小説生成リクエスト
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        novelsGeneratePost(request, options) {
            return localVarFp.novelsGeneratePost(request, options).then((request) => request(axios, basePath));
        },
    };
};
/**
 * NovelApi - object-oriented interface
 * @export
 * @class NovelApi
 * @extends {BaseAPI}
 */
export class NovelApi extends BaseAPI {
    /**
     * 小説を生成する
     * @summary GenerateNovel
     * @param {RequestNovelGenerateRequest} request 小説生成リクエスト
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NovelApi
     */
    novelsGeneratePost(request, options) {
        return NovelApiFp(this.configuration).novelsGeneratePost(request, options).then((request) => request(this.axios, this.basePath));
    }
}
/**
 * PostApi - axios parameter creator
 * @export
 */
export const PostApiAxiosParamCreator = function (configuration) {
    return {
        /**
         * 投稿を新規作成する
         * @summary CreatePost
         * @param {RequestPostCreateRequest} request 投稿作成リクエスト
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postsPost: async (request, options = {}) => {
            // verify required parameter 'request' is not null or undefined
            assertParamExists('postsPost', 'request', request);
            const localVarPath = `/posts`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options };
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            // authentication BearerAuth required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration);
            localVarHeaderParameter['Content-Type'] = 'application/json';
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
            localVarRequestOptions.data = serializeDataIfNeeded(request, localVarRequestOptions, configuration);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 投稿詳細を取得する
         * @summary GetPost
         * @param {string} postId 投稿ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postsPostIdGet: async (postId, options = {}) => {
            // verify required parameter 'postId' is not null or undefined
            assertParamExists('postsPostIdGet', 'postId', postId);
            const localVarPath = `/posts/{postId}`
                .replace(`{${"postId"}}`, encodeURIComponent(String(postId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options };
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
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
        postsPostIdLikesPost: async (postId, options = {}) => {
            // verify required parameter 'postId' is not null or undefined
            assertParamExists('postsPostIdLikesPost', 'postId', postId);
            const localVarPath = `/posts/{postId}/likes`
                .replace(`{${"postId"}}`, encodeURIComponent(String(postId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options };
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            // authentication BearerAuth required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration);
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    };
};
/**
 * PostApi - functional programming interface
 * @export
 */
export const PostApiFp = function (configuration) {
    const localVarAxiosParamCreator = PostApiAxiosParamCreator(configuration);
    return {
        /**
         * 投稿を新規作成する
         * @summary CreatePost
         * @param {RequestPostCreateRequest} request 投稿作成リクエスト
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async postsPost(request, options) {
            var _a, _b, _c;
            const localVarAxiosArgs = await localVarAxiosParamCreator.postsPost(request, options);
            const localVarOperationServerIndex = (_a = configuration === null || configuration === void 0 ? void 0 : configuration.serverIndex) !== null && _a !== void 0 ? _a : 0;
            const localVarOperationServerBasePath = (_c = (_b = operationServerMap['PostApi.postsPost']) === null || _b === void 0 ? void 0 : _b[localVarOperationServerIndex]) === null || _c === void 0 ? void 0 : _c.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 投稿詳細を取得する
         * @summary GetPost
         * @param {string} postId 投稿ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async postsPostIdGet(postId, options) {
            var _a, _b, _c;
            const localVarAxiosArgs = await localVarAxiosParamCreator.postsPostIdGet(postId, options);
            const localVarOperationServerIndex = (_a = configuration === null || configuration === void 0 ? void 0 : configuration.serverIndex) !== null && _a !== void 0 ? _a : 0;
            const localVarOperationServerBasePath = (_c = (_b = operationServerMap['PostApi.postsPostIdGet']) === null || _b === void 0 ? void 0 : _b[localVarOperationServerIndex]) === null || _c === void 0 ? void 0 : _c.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 投稿にいいねをつける
         * @summary LikePost
         * @param {string} postId 投稿ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async postsPostIdLikesPost(postId, options) {
            var _a, _b, _c;
            const localVarAxiosArgs = await localVarAxiosParamCreator.postsPostIdLikesPost(postId, options);
            const localVarOperationServerIndex = (_a = configuration === null || configuration === void 0 ? void 0 : configuration.serverIndex) !== null && _a !== void 0 ? _a : 0;
            const localVarOperationServerBasePath = (_c = (_b = operationServerMap['PostApi.postsPostIdLikesPost']) === null || _b === void 0 ? void 0 : _b[localVarOperationServerIndex]) === null || _c === void 0 ? void 0 : _c.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    };
};
/**
 * PostApi - factory interface
 * @export
 */
export const PostApiFactory = function (configuration, basePath, axios) {
    const localVarFp = PostApiFp(configuration);
    return {
        /**
         * 投稿を新規作成する
         * @summary CreatePost
         * @param {RequestPostCreateRequest} request 投稿作成リクエスト
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postsPost(request, options) {
            return localVarFp.postsPost(request, options).then((request) => request(axios, basePath));
        },
        /**
         * 投稿詳細を取得する
         * @summary GetPost
         * @param {string} postId 投稿ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postsPostIdGet(postId, options) {
            return localVarFp.postsPostIdGet(postId, options).then((request) => request(axios, basePath));
        },
        /**
         * 投稿にいいねをつける
         * @summary LikePost
         * @param {string} postId 投稿ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postsPostIdLikesPost(postId, options) {
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
    postsPost(request, options) {
        return PostApiFp(this.configuration).postsPost(request, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 投稿詳細を取得する
     * @summary GetPost
     * @param {string} postId 投稿ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PostApi
     */
    postsPostIdGet(postId, options) {
        return PostApiFp(this.configuration).postsPostIdGet(postId, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 投稿にいいねをつける
     * @summary LikePost
     * @param {string} postId 投稿ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PostApi
     */
    postsPostIdLikesPost(postId, options) {
        return PostApiFp(this.configuration).postsPostIdLikesPost(postId, options).then((request) => request(this.axios, this.basePath));
    }
}
/**
 * UserApi - axios parameter creator
 * @export
 */
export const UserApiAxiosParamCreator = function (configuration) {
    return {
        /**
         * ユーザーを新規作成する
         * @summary CreateUser
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        signupPost: async (options = {}) => {
            const localVarPath = `/signup`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options };
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    };
};
/**
 * UserApi - functional programming interface
 * @export
 */
export const UserApiFp = function (configuration) {
    const localVarAxiosParamCreator = UserApiAxiosParamCreator(configuration);
    return {
        /**
         * ユーザーを新規作成する
         * @summary CreateUser
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async signupPost(options) {
            var _a, _b, _c;
            const localVarAxiosArgs = await localVarAxiosParamCreator.signupPost(options);
            const localVarOperationServerIndex = (_a = configuration === null || configuration === void 0 ? void 0 : configuration.serverIndex) !== null && _a !== void 0 ? _a : 0;
            const localVarOperationServerBasePath = (_c = (_b = operationServerMap['UserApi.signupPost']) === null || _b === void 0 ? void 0 : _b[localVarOperationServerIndex]) === null || _c === void 0 ? void 0 : _c.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    };
};
/**
 * UserApi - factory interface
 * @export
 */
export const UserApiFactory = function (configuration, basePath, axios) {
    const localVarFp = UserApiFp(configuration);
    return {
        /**
         * ユーザーを新規作成する
         * @summary CreateUser
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        signupPost(options) {
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
    signupPost(options) {
        return UserApiFp(this.configuration).signupPost(options).then((request) => request(this.axios, this.basePath));
    }
}
