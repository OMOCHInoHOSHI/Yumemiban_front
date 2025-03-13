// ニックネームに対する処理を行う関数
export const pushNickname = (nickname) => {
    console.log('Nickname:', nickname);
};
// 夢の内容に対する処理を行う関数
export const pushDreamtext = (dreamtext) => {
    console.log('Dream Content:', dreamtext);
};
// 短編小説を送信する関数
export const pushNoveltext = (dreamtext) => {
    console.log('Dream Content:', dreamtext);
};
// 複数の入力を管理する関数
export const pushText = (nickname, dreamtext, novelText) => {
    pushNickname(nickname);
    pushDreamtext(dreamtext);
    pushNoveltext(novelText);
};
// ニックネームを取得する関数
export const getNickname = () => {
    return 'nickname';
};
export default pushText;
