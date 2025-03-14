import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Heart } from "lucide-react";
import './PostCard.css'; // CSSファイルをインポート

// PostCardコンポーネントのプロパティの型を定義
// interface PostCardProps {
//   posts: { id: number; title: string; content: string }[];
// }
interface PostCardProps {
  posts: {
    content: string;
    createdAt: string;
    id: string;
    likes: number;
    nickname: string;
    novel: string;
    title: string;
    updatedAt: string;
    userId: string;
  }[];
}

// PostCardコンポーネントを定義
export function PostCard({ posts }: PostCardProps) {
  // likedステートを定義し、初期値をfalseに設定
  // const [liked, setLiked] = useState(false);
  const [likedPosts, setLikedPosts] = useState<{ [key: number]: boolean }>({}); // いいねしたポストのIDを管理するステート
  const navigate = useNavigate();

  const handleCardClick = (id: string) => {
    navigate(`/PostDetail/${id}`);
  };

  const handleLikeClick = (e: React.MouseEvent, id: string) => {
    e.stopPropagation(); // クリックイベントが親要素に伝播するのを防ぐ
    setLikedPosts((prev) => ({
      ...prev,
      [id]: !prev[id], // 各ポストごとにいいねをトグル
    }));
    console.log(`Liked post ID: ${id}`); // IDをコンソールに出力
  };

  return (
    <div>
      {posts.map((post) => (
        <div 
          key={post.id}
          className="post-card w-full max-w-md mx-auto p-6 rounded"
          onClick={() => handleCardClick(post.id)} // カードクリック時にナビゲート
        >
          {/* 投稿者の名前を表示 */}
          <div className="header-container flex justify-between items-center mb-2">
            <div className="font-medium text-lg">{post.title}</div>
            {/* いいねボタン */}
            <button
              // onClick={(e) => {
              //   e.stopPropagation(); // クリックイベントが親要素に伝播するのを防ぐ
              //   setLiked(!liked); // ボタンがクリックされたときにlikedステートをトグル
              // }}
              onClick={(e) => {
                handleLikeClick(e, post.id);
              }} // 修正: post.id を渡す
              className="heart-button focus:outline-none"
              aria-label={likedPosts[post.id]  ? "Unlike" : "Like"} // アクセシビリティのためのラベル
            >
              <Heart className={`heart-icon h-6 w-6 transition-all ${likedPosts[post.id]  ? "liked" : ""}`} />
            </button>
          </div>
          <div className="content-container flex justify-between items-start">
            {/* 投稿内容を表示 */}
            <p className="text-base mb-0 content">
              {post.content.split('\n').map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}