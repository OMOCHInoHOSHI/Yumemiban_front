// ニックネームに対する処理を行う関数
export const pushNickname = (nickname: string) => {
    console.log('Nickname:', nickname);
};

// 夢の内容に対する処理を行う関数
export const pushDreamtext = (dreamtext: string) => {
    console.log('Dream Content:', dreamtext);
};

// 複数の入力を管理する関数
export const pushText = (nickname: string, dreamtext: string) => {
    pushNickname(nickname);
    pushDreamtext(dreamtext);
}

// ニックネームを取得する関数
export const getNickname = () => {
    return 'nickname';
}