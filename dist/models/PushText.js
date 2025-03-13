// ニックネームに対する処理を行う関数
export var pushNickname = function (nickname) {
    console.log('Nickname:', nickname);
};
// 夢の内容に対する処理を行う関数
export var pushDreamtext = function (dreamtext) {
    console.log('Dream Content:', dreamtext);
};
// 複数の入力を管理する関数
export var pushText = function (nickname, dreamtext) {
    pushNickname(nickname);
    pushDreamtext(dreamtext);
};
// ニックネームを取得する関数
export var getNickname = function () {
    return 'nickname';
};
export default pushText;
