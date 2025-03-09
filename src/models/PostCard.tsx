"use client"

import React, { useState } from "react"
import { Heart } from "lucide-react"
import './PostCard.css'; // CSSファイルをインポート

interface PostCardProps {
  name: string
  content: string
}

export function PostCard({ name, content }: PostCardProps) {
  const [liked, setLiked] = useState(false)

  return (
    <div className="post-card w-full max-w-md mx-auto p-6 rounded">
      <div className="font-medium text-lg mb-2">{name}</div>
      <div className="flex justify-between items-start">
        <p className="text-base mb-0">{content}</p>
        <button
          onClick={() => setLiked(!liked)} // ボタンがクリックされたときにlikedステートをトグル
          className="heart-button focus:outline-none"
          aria-label={liked ? "Unlike" : "Like"} // アクセシビリティのためのラベル
        >
          <Heart className={`heart-icon h-6 w-6 transition-all ${liked ? "liked" : ""}`} />
        </button>
      </div>
    </div>
  )
}