import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Heart } from "lucide-react";
import './PostCard.css'; // CSSファイルをインポート
// PostCardコンポーネントを定義
export function PostCard({ posts }) {
    // likedステートを定義し、初期値をfalseに設定
    const [liked, setLiked] = useState(false);
    const navigate = useNavigate();
    const handleCardClick = (id) => {
        navigate(`/PostDetail/${id}`);
    };
    return (React.createElement("div", null, posts.map((post) => (React.createElement("div", { key: post.id, className: "post-card w-full max-w-md mx-auto p-6 rounded", onClick: () => handleCardClick(post.id) },
        React.createElement("div", { className: "header-container flex justify-between items-center mb-2" },
            React.createElement("div", { className: "font-medium text-lg" }, post.title),
            React.createElement("button", { onClick: (e) => {
                    e.stopPropagation(); // クリックイベントが親要素に伝播するのを防ぐ
                    setLiked(!liked); // ボタンがクリックされたときにlikedステートをトグル
                }, className: "heart-button focus:outline-none", "aria-label": liked ? "Unlike" : "Like" },
                React.createElement(Heart, { className: `heart-icon h-6 w-6 transition-all ${liked ? "liked" : ""}` }))),
        React.createElement("div", { className: "content-container flex justify-between items-start" },
            React.createElement("p", { className: "text-base mb-0 content" }, post.content.split('\n').map((line, index) => (React.createElement(React.Fragment, { key: index },
                line,
                React.createElement("br", null)))))))))));
}
