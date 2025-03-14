import BackAPI from "./BackPIA";
// ニックネームに対する処理を行う関数
const pushNickname = (nickname) => {
    console.log('Nickname:', nickname);
};
// 夢の内容に対する処理を行う関数
const pushDreamtext = (dreamtext) => {
    console.log('Dream Content:', dreamtext);
};
// 短編小説を送信する関数
const pushNoveltext = (dreamtext) => {
    console.log('Dream Content:', dreamtext);
};
// 投稿する関数
const createPost = (request) => {
    // signupのAPIを実行
    BackAPI.getpostApi()
        .postsPost(request)
        // then ... 成功時
        .then((response) => {
        console.log(response.data);
    })
        // catch ... 失敗時
        .catch((e) => {
        console.log(e);
    });
};
// 複数の入力を管理する関数
const pushText = (nickname, dreamtext, novelText) => {
    pushNickname(nickname);
    pushDreamtext(dreamtext);
    pushNoveltext(novelText);
    createPost({ content: dreamtext, nickname: nickname, novel: novelText, title: 'こんな夢を見ました...' });
};
// ニックネームを取得する関数
const getNickname = () => {
    return 'nickname';
};
const PushText = { createPost, pushText, getNickname };
export default PushText;
