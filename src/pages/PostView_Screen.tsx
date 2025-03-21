import React, { useState , useEffect } from "react";
import { data, useNavigate } from "react-router-dom";
import "./PostView_Screen.css";
import { PostCard } from "../components/PostCard"; // 名前付きエクスポートとしてインポート
import { IconButton } from '@mui/material'; 
import EditIcon from '@mui/icons-material/Edit';
import ja_text from "../resous_ja.json";


// interface Post {
//   id: number;
//   title: string;
//   content: string;
//   novel?: string;
// }


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
        console.error(ja_text.create, error);
        // console.error(`${ja_text.create}`, error);
        // エラー処理（例：エラーメッセージの表示）
      });
  }, []);



  return (
    <div className="post-view">
      <h1>{ja_text.postView_label}</h1>
      <IconButton onClick={handleEditClick} color="primary" size="large"> {/* 変更 */}
        <EditIcon />{" "}
      {/* 変更 */}
      </IconButton>
      {posts.map((post) => (
        <PostCard key={post.id} posts={[post]} /> // 各投稿をPostCardに渡す
      ))}
    </div>
  );
};

export default PostView_Screen;
