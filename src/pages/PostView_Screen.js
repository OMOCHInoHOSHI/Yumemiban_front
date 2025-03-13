import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PostView_Screen.css';
import { PostCard } from '../components/PostCard'; // 名前付きエクスポートとしてインポート
const PostView_Screen = ({ posts }) => {
    const navigate = useNavigate();
    const handleEditClick = () => {
        navigate('/PostInput_Screen'); // ナビゲーション
    };
    return (React.createElement("div", { className: "post-view" },
        React.createElement("h1", null, "\u30DD\u30B9\u30C8\u4E00\u89A7"),
        React.createElement("button", { onClick: handleEditClick }, "\u6295\u7A3F\u753B\u9762\u3078"),
        " ",
        posts.map((post) => (React.createElement(PostCard, { key: post.id, post: post }) // 各投稿をPostCardに渡す
        ))));
};
export default PostView_Screen;
