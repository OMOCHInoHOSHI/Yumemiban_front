import BackAPI from "./BackPIA";
const getLastestPost = () => {
    return BackAPI
        .getdiscoverApi()
        .discoverLatestGet()
        .then((response) => {
        console.log(response.data);
        return response.data.list;
    })
        .catch((e) => {
        console.error(e);
        return [];
    });
};
// const getLastestPost = async () => {
//     try {
//         const response = await BackAPI.getdiscoverApi().discoverLatestGet();
//         console.log(response.data);
//         return response.data.list;  // list配列を返す
//     } catch (e) {
//         console.error(e);
//         return [];  // エラー時は空配列を返す
//     }
// };
const Post_Get = { getLastestPost };
export default Post_Get;
