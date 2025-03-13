import { request } from "http";
import BackAPI from "./BackPIA";


interface CreatePostRequest {
    content: string;
    nickname: string;
    novel: string;
    title: string;
}

// ニックネームに対する処理を行う関数
export const pushNickname = (nickname: string) => {
    console.log('Nickname:', nickname);
};

// 夢の内容に対する処理を行う関数
export const pushDreamtext = (dreamtext: string) => {
    console.log('Dream Content:', dreamtext);
};

// 短編小説を送信する関数
export const pushNoveltext = (dreamtext: string) => {
    console.log('Dream Content:', dreamtext);
};

const createPost= (request: CreatePostRequest) => {
    // signupのAPIを実行
    BackAPI.getpostApi()
    .postsPost(react)
    // then ... 成功時
    .then((response) => {
        console.log(response.data);
    })
    // catch ... 失敗時
    .catch((e) => {
        console.log(e);
    });
}

// 複数の入力を管理する関数
export const pushText = (nickname: string, dreamtext: string, novelText: string) => {
    pushNickname(nickname);
    pushDreamtext(dreamtext);
    pushNoveltext(novelText);
}

// ニックネームを取得する関数
export const getNickname = () => {
    return 'nickname';
}

export default  pushText;