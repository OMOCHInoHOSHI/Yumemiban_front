import React, { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import PostView_Screen from "./pages/PostView_Screen";
import PostInput_Screen from "./pages/PostInput_Screen";
import PostDetail from "./components/PostDetail";
import BackAPI from './models/BackPIA';
import Post_Get from "./models/Post_Get";

interface PostViewScreenProps {
  posts: any[];
}

const AppRoutes: React.FC = () => {
  const [posts, setPosts] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    BackAPI.createUser();
  }, []);

  useEffect(() => {
    Post_Get.getLastestPost()
      .then((data) => {
        setPosts(data);
      })
      .catch((error) => {
        console.error("API呼び出しエラー:", error);
        setError("投稿の取得に失敗しました。");
      });
  }, []);

  return (
    <div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <Routes>
        <Route path="/" element={<PostView_Screen />} />
        <Route path="/PostInput_Screen" element={<PostInput_Screen />} />
        <Route path="/PostDetail/:id" element={<PostDetail posts={posts} />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;