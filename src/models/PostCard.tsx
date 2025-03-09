"use client"

// ReactとuseStateフックをインポート
import React, { useState } from "react"
// Heartアイコンをインポート
import { Heart } from "lucide-react"
// CSSファイルをインポート
import './PostCard.css'; 

// PostCardコンポーネントのプロパティを定義
interface PostCardProps {
  name: string
  content: string
}

// PostCardコンポーネントを定義
export function PostCard({ name, content }: PostCardProps) {
  // likedステートを定義し、初期値をfalseに設定
  const [liked, setLiked] = useState(false)

  return (
    // カードのコンテナ
    <div className="post-card w-full max-w-md mx-auto p-6 rounded">
      {/* 名前を表示 */}
      <div className="font-medium text-lg mb-2">{name}</div>
      <div className="flex justify-between items-start">
        {/* コンテンツを表示 */}
        <p className="text-base mb-0">{content}</p>
        {/* ハートボタン */}
        <button
          onClick={() => setLiked(!liked)} // ボタンがクリックされたときにlikedステートをトグル
          className="heart-button ml-4 focus:outline-none"
          aria-label={liked ? "Unlike" : "Like"} // アクセシビリティのためのラベル
        >
          {/* ハートアイコン */}
          <Heart className={`heart-icon h-6 w-6 transition-all ${liked ? "liked" : ""}`} />
        </button>
      </div>
    </div>
  )
}