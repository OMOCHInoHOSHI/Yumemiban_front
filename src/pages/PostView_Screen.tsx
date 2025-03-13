import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PostView_Screen.css';
import { PostCard } from '../components/PostCard'; // 名前付きエクスポートとしてインポート
import { IconButton } from '@mui/material'; 
import EditIcon from '@mui/icons-material/Edit';


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
      <IconButton onClick={handleEditClick} color="primary" size="large"> {/* 変更 */}
        <EditIcon /> {/* 変更 */}
      </IconButton>

      {posts.map((post) => (
        <PostCard key={post.id} post={post} /> // 各投稿をPostCardに渡す
      ))}
    </div>
  );
};

export default PostView_Screen;