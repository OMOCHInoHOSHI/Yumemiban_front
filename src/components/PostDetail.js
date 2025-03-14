import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ja_text from '../resous_ja.json';
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
        return React.createElement("div", null, ja_text.SelectPost_Nothing);
    }
    return (React.createElement("div", { style: { width: '80%', margin: '0 auto' } },
        React.createElement("h2", { style: { textAlign: 'center' } },
            post.nickname,
            ja_text.SelectPost_honor,
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
            React.createElement("h2", { style: { textAlign: 'center' } }, ja_text.SelectPost_label),
            " ",
            React.createElement("p", { style: { textAlign: 'left' } }, post.novel),
            " ")));
};
export default PostDetail;
