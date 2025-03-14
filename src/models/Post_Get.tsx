import BackAPI from "./BackPIA";

interface GetPostRequest {
    id: number;
}

// const getLastestPost = () => {
//     // signupのAPIを実行
//     BackAPI
//     .getdiscoverApi()
//     .discoverLatestGet()
//     // then ... 成功時
//     .then((response) => {
//         console.log(response.data);
//         return response.data.list;
//     })
//     // catch ... 失敗時
//     .catch((e) => {
//         console.log(e);
//         return [];  // エラー時は空配列を返す
//     });
// }

const getLastestPost = async () => {
    try {
        const response = await BackAPI.getdiscoverApi().discoverLatestGet();
        console.log(response.data);
        return response.data.list;  // list配列を返す
    } catch (e) {
        console.error(e);
        return [];  // エラー時は空配列を返す
    }
};

const Post_Get = {getLastestPost};
export default Post_Get;