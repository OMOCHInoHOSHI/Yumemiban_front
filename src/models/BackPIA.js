// API
import { Configuration, UserApiFactory, PostApiFactory, DiscoverApiFactory, NovelApiFactory, } from "../api";
const config = new Configuration({ basePath: "http://localhost:8089/api" });
// userApi作成
const userApi = UserApiFactory(config);
// postApi作成
var postApi = PostApiFactory(config);
// discoverApi作成
const discoverApi = DiscoverApiFactory(config);
// novelApi
var novelApi = NovelApiFactory(config);
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
const getnovelApi = () => {
    return novelApi;
};
// ユーザー作成
const createUser = () => {
    // signupのAPIを実行
    userApi
        .signupPost()
        // then ... 成功時
        .then((response) => {
        console.log(response.data);
        // configを更新  アクセストークンを設定
        config.apiKey = "Bearer " + response.data.accessToken;
        // 更新したコンフィグを元にPostAPIを作成・更新
        postApi = PostApiFactory(config);
        novelApi = NovelApiFactory(config);
    })
        // catch ... 失敗時
        .catch((e) => {
        console.log(e);
    });
};
// エクスポート
const BackAPI = {
    createUser,
    getuserApi,
    getpostApi,
    getdiscoverApi,
    getnovelApi,
};
export default BackAPI;
