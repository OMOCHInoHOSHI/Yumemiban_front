// API
import { Configuration, UserApiFactory } from "../api";

const config = new Configuration({ basePath: "http://localhost:8089/api" });
  // userApi作成
const userApi = UserApiFactory(config);


  // ユーザー作成
const createUser = () => {
    // signupのAPIを実行
    userApi
    .signupPost()
      // then ... 成功時
    .then((response) => {
        console.log(response.data);
    })
      // catch ... 失敗時
    .catch((e) => {
        console.log(e);
    });
};

// エクスポート
const BackAPI = { createUser };
export default BackAPI;
