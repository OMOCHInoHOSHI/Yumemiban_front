import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
const PostDetail = ({ posts }) => {
    const { id } = useParams();
    const post = posts.find((p) => p.id === (id));
    const [isNovelExpanded, setIsNovelExpanded] = useState(false);
    useEffect(() => {
        console.log("postCard");
        console.log("Post:", post);
        console.log("Posts:", posts); // 追加: postsプロパティのコンソール出力
    }, [id, post, posts]);
    if (!post) {
        return React.createElement("div", null, "\u6295\u7A3F\u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093\u3067\u3057\u305F\u3002");
    }
    return (React.createElement("div", { style: { width: '80%', margin: '0 auto' } },
        React.createElement("h2", { style: { textAlign: 'center' } },
            post.nickname,
            "\u3055\u3093\u306F",
            post.title),
        " ",
        React.createElement("p", { style: { textAlign: 'left' } }, post.content),
        " ",
        React.createElement("hr", null),
        React.createElement("div", { onClick: () => setIsNovelExpanded(!isNovelExpanded), style: {
                position: isNovelExpanded ? 'fixed' : 'static',
                top: isNovelExpanded ? 0 : 'auto',
                width: isNovelExpanded ? '80%' : 'auto',
                height: isNovelExpanded ? '100vh' : '0',
                backgroundColor: isNovelExpanded ? 'white' : 'transparent',
                zIndex: isNovelExpanded ? 10 : 'auto',
                overflow: isNovelExpanded ? 'auto' : 'visible',
                margin: '0 auto',
            } },
            React.createElement("h2", { style: { textAlign: 'center' } }, "\u77ED\u7DE8\u5C0F\u8AAC"),
            " ",
            React.createElement("p", { style: { textAlign: 'left' } }, post.novel),
            " ")));
};
export default PostDetail;
