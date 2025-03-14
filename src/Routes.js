import React, { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import PostView_Screen from "./pages/PostView_Screen";
import PostInput_Screen from "./pages/PostInput_Screen";
import PostDetail from "./components/PostDetail";
import BackAPI from './models/BackPIA';
import Post_Get from "./models/Post_Get";
const AppRoutes = () => {
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState(null);
    useEffect(() => {
        BackAPI.createUser();
    }, []);
    useEffect(() => {
        Post_Get.getLastestPost()
            .then((data) => {
            setPosts(data);
        })
            .catch((error) => {
            console.error("API呼び出しエラー:", error);
            setError("投稿の取得に失敗しました。");
        });
    }, []);
    return (React.createElement("div", null,
        error && React.createElement("p", { style: { color: 'red' } }, error),
        React.createElement(Routes, null,
            React.createElement(Route, { path: "/", element: React.createElement(PostView_Screen, null) }),
            React.createElement(Route, { path: "/PostInput_Screen", element: React.createElement(PostInput_Screen, null) }),
            React.createElement(Route, { path: "/PostDetail/:id", element: React.createElement(PostDetail, { posts: posts }) }))));
};
export default AppRoutes;
