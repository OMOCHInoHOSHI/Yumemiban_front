import BackAPI from "./BackPIA";
const getLastestPost = () => {
    // signupのAPIを実行
    BackAPI
        .getdiscoverApi()
        .discoverLatestGet()
        // then ... 成功時
        .then((response) => {
        console.log(response.data);
    })
        // catch ... 失敗時
        .catch((e) => {
        console.log(e);
    });
};
const Post_Get = { getLastestPost };
export default Post_Get;
