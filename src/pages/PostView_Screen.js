import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PostView_Screen.css';
const PostView_Screen = () => {
    const navigate = useNavigate();
    const handleEditClick = () => {
        navigate('/edit');
    };
    return (React.createElement("div", { className: "post-view" },
        React.createElement("h1", null, "\u30DD\u30B9\u30C8\u4E00\u89A7"),
        React.createElement("button", { onClick: handleEditClick }, "Edit"),
        " "));
};
export default PostView_Screen;
