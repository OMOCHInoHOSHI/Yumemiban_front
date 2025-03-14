import BackAPI from "./BackPIA";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
const getLastestPost = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield BackAPI.getdiscoverApi().discoverLatestGet();
        return response.data.list; // list配列を返す
    }
    catch (e) {
        console.error(e);
        return []; // エラー時は空配列を返す
    }
});
const Post_Get = { getLastestPost };
export default Post_Get;
