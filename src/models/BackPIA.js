// API
import { Configuration, UserApiFactory, PostApiFactory, DiscoverApiFactory, } from "../api";
const config = new Configuration({ basePath: "http://localhost:8089/api" });
// userApi作成
const userApi = UserApiFactory(config);
// postApi作成
var postApi = PostApiFactory(config);
// discoverApi作成
const discoverApi = DiscoverApiFactory(config);
// userApi取得
const getuserApi = () => {
    return userApi;
};
// postApi取得
const getpostApi = () => {
    return postApi;
};
// discoverApi取得
const getdiscoverApi = () => {
    return discoverApi;
};
// ユーザー作成
const createUser = () => {
    // signupのAPIを実行
    userApi
        .signupPost()
        // then ... 成功時
        .then((response) => {
        console.log(response.data);
        config.apiKey = "Bearer " + response.data.accessToken;
        postApi = PostApiFactory(config);
    })
        // catch ... 失敗時
        .catch((e) => {
        console.log(e);
    });
};
// エクスポート
const BackAPI = { createUser, getuserApi, getpostApi, getdiscoverApi };
export default BackAPI;
