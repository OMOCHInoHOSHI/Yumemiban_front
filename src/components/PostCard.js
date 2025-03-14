import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Heart } from "lucide-react";
import './PostCard.css'; // CSSファイルをインポート
// PostCardコンポーネントを定義
export function PostCard({ posts }) {
    // likedステートを定義し、初期値をfalseに設定
    // const [liked, setLiked] = useState(false);
    const [likedPosts, setLikedPosts] = useState({}); // いいねしたポストのIDを管理するステート
    const navigate = useNavigate();
    const handleCardClick = (id) => {
        navigate(`/PostDetail/${id}`);
    };
    const handleLikeClick = (e, id) => {
        e.stopPropagation(); // クリックイベントが親要素に伝播するのを防ぐ
        setLikedPosts((prev) => (Object.assign(Object.assign({}, prev), { [id]: !prev[id] })));
        console.log(`Liked post ID: ${id}`); // IDをコンソールに出力
    };
    return (React.createElement("div", null, posts.map((post) => (React.createElement("div", { key: post.id, className: "post-card w-full max-w-md mx-auto p-6 rounded", onClick: () => handleCardClick(post.id) },
        React.createElement("div", { className: "header-container flex justify-between items-center mb-2" },
            React.createElement("div", { className: "font-medium text-lg" }, post.title),
            React.createElement("button", { 
                // onClick={(e) => {
                //   e.stopPropagation(); // クリックイベントが親要素に伝播するのを防ぐ
                //   setLiked(!liked); // ボタンがクリックされたときにlikedステートをトグル
                // }}
                onClick: (e) => {
                    handleLikeClick(e, post.id);
                }, className: "heart-button focus:outline-none", "aria-label": likedPosts[post.id] ? "Unlike" : "Like" },
                React.createElement(Heart, { className: `heart-icon h-6 w-6 transition-all ${likedPosts[post.id] ? "liked" : ""}` }))),
        React.createElement("div", { className: "content-container flex justify-between items-start" },
            React.createElement("p", { className: "text-base mb-0 content" }, post.content.split('\n').map((line, index) => (React.createElement(React.Fragment, { key: index },
                line,
                React.createElement("br", null)))))))))));
}
