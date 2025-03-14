import React from 'react';
import { Routes, Route } from "react-router-dom";
import PostView_Screen from "./pages/PostView_Screen";
import PostInput_Screen from "./pages/PostInput_Screen";
import PostDetail from "./components/PostDetail";
const AppRoutes = () => {
    // 仮投稿
    const posts = [
        {
            id: 1,
            title: "Red",
            content: "戦ってる夢を見た...",
            novel: "寝不足です。",
        },
        {
            id: 2,
            title: "Green",
            content: "ご飯食べた～",
            novel: "寝不足です。",
        },
        {
            id: 3,
            title: "Yellow",
            content: "母さんに会った...",
            novel: "寝不足です。",
        },
        {
            id: 4,
            title: "Red",
            content: "戦ってる夢を見た...",
            novel: "寝不足です。",
        },
        {
            id: 5,
            title: "Green",
            content: "ご飯食べた～",
            novel: "寝不足です。",
        },
        {
            id: 6,
            title: "Yellow",
            content: "母さんに会った...",
            novel: "寝不足です。",
        },
        {
            id: 7,
            title: "Red",
            content: "戦ってる夢を見た...あああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ",
            novel: "寝不足です。戦ってる夢を見た...あああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいい宇ううううううううううううううううううううううううううううううううううううううううううううううううううううううううううううううううううううううううううううううううううううううううううううううううううううううううううううううううううううううううううううううううえええええええええええええええええええええええええええええええええええええええええええええええええええええええええええええええええええええええええええええええええええええええええええええええええええええええええええええええええええええええええええええええええええ",
        },
        {
            id: 8,
            title: "Green",
            content: "ご飯食べた～\naaaa\n\n",
            novel: "寝不足です。",
        },
        {
            id: 9,
            title: "Yellow",
            content: "母さんに会った...\n新しい仕事を始めた...\n眠いよ～～\n悲しいよ～\n\nby蒼\n",
            novel: "寝不足です。",
        },
        {
            id: 10,
            title: "Red",
            content: "戦ってる夢を見た...",
            novel: "寝不足です。",
        },
        {
            id: 11,
            title: "Green",
            content: "ご飯食べた～",
            novel: "寝不足です。",
        },
        {
            id: 12,
            title: "Yellow",
            content: "母さんに会った...",
            novel: "寝不足です。",
        },
    ];
    return (React.createElement(Routes, null,
        React.createElement(Route, { path: "/", element: React.createElement(PostView_Screen, null) }),
        React.createElement(Route, { path: "/PostInput_Screen", element: React.createElement(PostInput_Screen, null) }),
        React.createElement(Route, { path: "/PostDetail/:id", element: React.createElement(PostDetail, { posts: posts }) }),
        " "));
};
export default AppRoutes;
