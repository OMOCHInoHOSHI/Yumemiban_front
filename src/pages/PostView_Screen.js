import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PostView_Screen.css';
import { PostCard } from '../models/PostCard'; // 名前付きエクスポートとしてインポート
const PostView_Screen = () => {
    const navigate = useNavigate();
    const handleEditClick = () => {
        navigate('/PostInput_Screen'); // ナビゲーション
    };
    const posts = [
        {
            id: 1,
            name: "Red",
            content: "戦ってる夢を見た...",
        },
        {
            id: 2,
            name: "Green",
            content: "ご飯食べた～",
        },
        {
            id: 3,
            name: "Yellow",
            content: "母さんに会った...",
        },
        {
            id: 4,
            name: "Red",
            content: "戦ってる夢を見た...",
        },
        {
            id: 5,
            name: "Green",
            content: "ご飯食べた～",
        },
        {
            id: 6,
            name: "Yellow",
            content: "母さんに会った...",
        },
        {
            id: 7,
            name: "Red",
            content: "戦ってる夢を見た...あああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ",
        },
        {
            id: 8,
            name: "Green",
            content: "ご飯食べた～\naaaa\n\n",
        },
        {
            id: 9,
            name: "Yellow",
            content: "母さんに会った...\n新しい仕事を始めた...\n眠いよ～～\n悲しいよ～\n\nby蒼\n",
        },
        {
            id: 10,
            name: "Red",
            content: "戦ってる夢を見た...",
        },
        {
            id: 11,
            name: "Green",
            content: "ご飯食べた～",
        },
        {
            id: 12,
            name: "Yellow",
            content: "母さんに会った...",
        },
    ];
    return (React.createElement("div", { className: "post-view" },
        React.createElement("h1", null, "\u30DD\u30B9\u30C8\u4E00\u89A7"),
        React.createElement("button", { onClick: handleEditClick }, "\u6295\u7A3F\u753B\u9762\u3078"),
        " ",
        posts.map((post) => (React.createElement(PostCard, { key: post.id, name: post.name, content: post.content })))));
};
export default PostView_Screen;
