import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./PostView_Screen.css";
import { PostCard } from "../components/PostCard"; // 名前付きエクスポートとしてインポート
// // API
// import { Configuration, UserApiFactory } from "../api";
import BackAPI from "../models/BackPIA";
import Post_Get from "../models/Post_Get";
const PostView_Screen = () => {
    const navigate = useNavigate();
    // const config = new Configuration({ basePath: "http://localhost:8089/api" });
    // // userApi作成
    // const userApi = UserApiFactory(config);
    // /*
    // // postApiの場合
    // const postApi = PostApiFactory(config);
    // // discoverApiの場合
    // const discoverApi = DiscoverApiFactory(config);
    // */
    // // ユーザー作成
    // const createUser = () => {
    //   // signupのAPIを実行
    //   userApi
    //     .signupPost()
    //     // then ... 成功時
    //     .then((response) => {
    //       console.log(response.data);
    //     })
    //     // catch ... 失敗時
    //     .catch((e) => {
    //       console.log(e);
    //     });
    // };
    const handleEditClick = () => {
        navigate("/PostInput_Screen"); // ナビゲーション
    };
    // 画面が読み込まれた時にユーザーを作成
    useEffect(() => {
        // キャッシュにユーザーがあるかを確認してない場合は実行しないようにしたい
        BackAPI.createUser();
    }, []);
    // 画面が読み込まれたときにポスト情報取得
    useEffect(() => {
        Post_Get.getLastestPost();
    }); // 
    // 仮投稿
    const posts = [
        {
            id: 1,
            title: "Red",
            content: "戦ってる夢を見た...",
            novel: "寝不足です。",
        },
        {
            id: 2,
            title: "Green",
            content: "ご飯食べた～",
            novel: "寝不足です。",
        },
        {
            id: 3,
            title: "Yellow",
            content: "母さんに会った...",
            novel: "寝不足です。",
        },
        {
            id: 4,
            title: "Red",
            content: "戦ってる夢を見た...",
            novel: "寝不足です。",
        },
        {
            id: 5,
            title: "Green",
            content: "ご飯食べた～",
            novel: "寝不足です。",
        },
        {
            id: 6,
            title: "Yellow",
            content: "母さんに会った...",
            novel: "寝不足です。",
        },
        {
            id: 7,
            title: "Red",
            content: "戦ってる夢を見た...あああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ",
            novel: "寝不足です。戦ってる夢を見た...あああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいい宇ううううううううううううううううううううううううううううううううううううううううううううううううううううううううううううううううううううううううううううううううううううううううううううううううううううううううううううううううううううううううううううううううえええええええええええええええええええええええええええええええええええええええええええええええええええええええええええええええええええええええええええええええええええええええええええええええええええええええええええええええええええええええええええええええええええ",
        },
        {
            id: 8,
            title: "Green",
            content: "ご飯食べた～\naaaa\n\n",
            novel: "寝不足です。",
        },
        {
            id: 9,
            title: "Yellow",
            content: "母さんに会った...\n新しい仕事を始めた...\n眠いよ～～\n悲しいよ～\n\nby蒼\n",
            novel: "寝不足です。",
        },
        {
            id: 10,
            title: "Red",
            content: "戦ってる夢を見た...",
            novel: "寝不足です。",
        },
        {
            id: 11,
            title: "Green",
            content: "ご飯食べた～",
            novel: "寝不足です。",
        },
        {
            id: 12,
            title: "Yellow",
            content: "母さんに会った...",
            novel: "寝不足です。",
        },
    ];
    return (React.createElement("div", { className: "post-view" },
        React.createElement("h1", null, "\u30DD\u30B9\u30C8\u4E00\u89A7"),
        React.createElement("button", { onClick: handleEditClick }, "\u6295\u7A3F\u753B\u9762\u3078"),
        " ",
        posts.map((post) => (React.createElement(PostCard, { key: post.id, posts: [post] }) // 各投稿をPostCardに渡す
        ))));
};
export default PostView_Screen;
