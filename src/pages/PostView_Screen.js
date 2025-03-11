import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PostView_Screen.css';
const PostView_Screen = () => {
    const navigate = useNavigate();
    const handleEditClick = () => {
        navigate('/PostInput_Screen'); // ナビゲーション
    };
    return (React.createElement("div", { className: "post-view" },
        React.createElement("h1", null, "\u30DD\u30B9\u30C8\u4E00\u89A7"),
        React.createElement("button", { onClick: handleEditClick }, "\u6295\u7A3F\u753B\u9762\u3078"),
        " "));
};
export default PostView_Screen;
