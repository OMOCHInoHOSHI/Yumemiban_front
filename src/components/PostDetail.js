import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
const PostDetail = ({ posts }) => {
    const { id } = useParams();
    const post = posts.find((p) => p.id === Number(id));
    const [isNovelExpanded, setIsNovelExpanded] = useState(false);
    useEffect(() => {
        console.log("postCard");
        console.log("Post:", post);
        console.log("Posts:", posts); // 追加: postsプロパティのコンソール出力
    }, [id, post, posts]);
    if (!post) {
        return React.createElement("div", null, "\u6295\u7A3F\u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093\u3067\u3057\u305F\u3002");
    }
    return (React.createElement("div", null,
        React.createElement("h2", null, post.title),
        React.createElement("p", null, post.content),
        React.createElement("hr", null),
        React.createElement("div", { onClick: () => setIsNovelExpanded(!isNovelExpanded), style: {
                position: isNovelExpanded ? "fixed" : "static",
                top: isNovelExpanded ? 0 : "auto",
                left: 0,
                width: isNovelExpanded ? "100%" : "auto",
                height: isNovelExpanded ? "100vh" : "auto",
                backgroundColor: isNovelExpanded ? "white" : "transparent",
                zIndex: isNovelExpanded ? 10 : "auto",
                overflow: isNovelExpanded ? "auto" : "visible",
            } },
            React.createElement("h3", null, "\u5C0F\u8AAC"),
            React.createElement("p", null, post.novel))));
};
export default PostDetail;
