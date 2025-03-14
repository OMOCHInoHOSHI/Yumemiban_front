import React, { useState , useEffect } from "react";
import { data, useNavigate } from "react-router-dom";
import "./PostView_Screen.css";
import { PostCard } from "../components/PostCard"; // 名前付きエクスポートとしてインポート
// // API
// import { Configuration, UserApiFactory } from "../api";
import BackAPI from "../models/BackPIA";
import Post_Get from "../models/Post_Get";

const PostView_Screen: React.FC = () => {
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

  const [posts, setPosts] = useState<any[]>([]);  // 取得した投稿データを保存

  // 画面が読み込まれた時にユーザーを作成
  useEffect(() => {
    // キャッシュにユーザーがあるかを確認してない場合は実行しないようにしたい
    BackAPI.createUser();
  }, []);

  useEffect(() => {
    Post_Get.getLastestPost()
      .then((data) => {
        setPosts(data);
      })
      .catch((error) => {
        console.error("API呼び出しエラー:", error);
        // エラー処理（例：エラーメッセージの表示）
      });
  }, []);

  // 仮投稿
  // const posts = [
  //   {
  //     id: 1,
  //     title: "Red",
  //     content: "戦ってる夢を見た...",
  //     novel: "寝不足です。",
  //   },
  //   {
  //     id: 2,
  //     title: "Green",
  //     content: "ご飯食べた～",
  //     novel: "寝不足です。",
  //   },
  //   {
  //     id: 3,
  //     title: "Yellow",
  //     content: "母さんに会った...",
  //     novel: "寝不足です。",
  //   },
  //   {
  //     id: 4,
  //     title: "Red",
  //     content: "戦ってる夢を見た...",
  //     novel: "寝不足です。",
  //   },
  //   {
  //     id: 5,
  //     title: "Green",
  //     content: "ご飯食べた～",
  //     novel: "寝不足です。",
  //   },
  //   {
  //     id: 6,
  //     title: "Yellow",
  //     content: "母さんに会った...",
  //     novel: "寝不足です。",
  //   },
  //   {
  //     id: 7,
  //     title: "Red",
  //     content:
  //       "戦ってる夢を見た...あああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ",
  //     novel:
  //       "寝不足です。戦ってる夢を見た...あああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいい宇ううううううううううううううううううううううううううううううううううううううううううううううううううううううううううううううううううううううううううううううううううううううううううううううううううううううううううううううううううううううううううううううううえええええええええええええええええええええええええええええええええええええええええええええええええええええええええええええええええええええええええええええええええええええええええええええええええええええええええええええええええええええええええええええええええええ",
  //   },
  //   {
  //     id: 8,
  //     title: "Green",
  //     content: "ご飯食べた～\naaaa\n\n",
  //     novel: "寝不足です。",
  //   },
  //   {
  //     id: 9,
  //     title: "Yellow",
  //     content:
  //       "母さんに会った...\n新しい仕事を始めた...\n眠いよ～～\n悲しいよ～\n\nby蒼\n",
  //     novel: "寝不足です。",
  //   },
  //   {
  //     id: 10,
  //     title: "Red",
  //     content: "戦ってる夢を見た...",
  //     novel: "寝不足です。",
  //   },
  //   {
  //     id: 11,
  //     title: "Green",
  //     content: "ご飯食べた～",
  //     novel: "寝不足です。",
  //   },
  //   {
  //     id: 12,
  //     title: "Yellow",
  //     content: "母さんに会った...",
  //     novel: "寝不足です。",
  //   },
  // ];

  return (
    <div className="post-view">
      <h1>ポスト一覧</h1>
      <button onClick={handleEditClick}>投稿画面へ</button>{" "}
      {/* ボタンをクリックするとナビゲーション */}
      {posts.map((post) => (
        <PostCard key={post.id} posts={[post]} /> // 各投稿をPostCardに渡す
      ))}
    </div>
  );
};

export default PostView_Screen;
