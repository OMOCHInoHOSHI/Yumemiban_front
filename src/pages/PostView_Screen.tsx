import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PostView_Screen.css';
import { PostCard } from '../components/PostCard'; // 名前付きエクスポートとしてインポート

interface Post {
  id: number;
  title: string;
  content: string;
  novel?: string;
}

interface PostViewScreenProps {
  posts: Post[];
}

const PostView_Screen: React.FC<PostViewScreenProps> = ({ posts }) => {
  const navigate = useNavigate();

  const handleEditClick = () => {
    navigate('/PostInput_Screen'); // ナビゲーション
  };

  return (
    <div className="post-view">
      <h1>ポスト一覧</h1>
      <button onClick={handleEditClick}>投稿画面へ</button> {/* ボタンをクリックするとナビゲーション */}

      {posts.map((post) => (
        <PostCard key={post.id} post={post} /> // 各投稿をPostCardに渡す
      ))}
    </div>
  );
};

export default PostView_Screen;