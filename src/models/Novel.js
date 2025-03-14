import BackAPI from "./BackPIA";
// 生成した小説のテキストを保存する
let novelText = "";
// 小説を作成する関数
const createNovel = (contents, setNovel) => {
    BackAPI.getnovelApi()
        .novelsGeneratePost({
        content: contents,
    })
        .then((response) => {
        setNovel(response.data.novel);
    })
        .catch((e) => {
        console.log(e);
        setNovel(contents);
    });
};
// 小説を取得する関数
const getNovel = () => {
    return novelText;
};
const Components = { getNovel, createNovel };
export default Components;
