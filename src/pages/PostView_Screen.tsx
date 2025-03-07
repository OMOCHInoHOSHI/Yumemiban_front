import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PostView_Screen.css';

const PostView_Screen: React.FC = () => {
  const navigate = useNavigate();

  const handleEditClick = () => {
    navigate('/PostInput_Screen'); // ナビゲーション
  };

  return (
    <div className="post-view">
      <h1>ポスト一覧</h1>
      <button onClick={handleEditClick}>投稿画面へ</button> {/* ボタンをクリックするとナビゲーション */}
    </div>
  );
};

export default PostView_Screen;