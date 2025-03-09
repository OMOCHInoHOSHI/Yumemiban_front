// PostCard.tsx

import React, { useState } from "react"
import { Heart } from "lucide-react"
import './PostCard.css'; // CSSファイルをインポート

// PostCardコンポーネントのプロパティの型を定義
interface PostCardProps {
  name: string
  content: string
}

// PostCardコンポーネントを定義
export function PostCard({ name, content }: PostCardProps) {
  // likedステートを定義し、初期値をfalseに設定
  const [liked, setLiked] = useState(false)

  return (
    <div className="post-card w-full max-w-md mx-auto p-6 rounded">
      
      {/* 投稿者の名前を表示 */}
      <div className="header-container flex justify-between items-center mb-2">
        <div className="font-medium text-lg">{name}</div>
        {/* いいねボタン */}
        <button
          onClick={() => setLiked(!liked)} // ボタンがクリックされたときにlikedステートをトグル
          className="heart-button focus:outline-none"
          aria-label={liked ? "Unlike" : "Like"} // アクセシビリティのためのラベル
        >
          <Heart className={`heart-icon h-6 w-6 transition-all ${liked ? "liked" : ""}`} />
        </button>
      </div>
      <div className="content-container flex justify-between items-start">
        {/* 投稿内容を表示 */}
        <p className="text-base mb-0 content">
          {content.split('\n').map((line, index) => (
            <React.Fragment key={index}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </p>
      </div>
    </div>
  )
}