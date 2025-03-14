import BackAPI from "./BackPIA";

interface Post {
    "content": "string",
    "createdAt": "string",
    "id": "string",
    "likes": 0,
    "nickname": "string",
    "novel": "string",
    "title": "string",
    "updatedAt": "string",
    "userId": "string"
  }
const getLastestPost = (): Promise<Post[]> => {
    return BackAPI
      .getdiscoverApi()
      .discoverLatestGet()
      .then((response: any) => { // responseの型をanyから適切な型に変更することを推奨
        console.log(response.data);
        return response.data.list as Post[];
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

const Post_Get = {getLastestPost};
export default Post_Get;