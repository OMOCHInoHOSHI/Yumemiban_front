// PostCard.tsx
import React, { useState } from "react";
import { Heart } from "lucide-react";
import './PostCard.css'; // CSSファイルをインポート
// PostCardコンポーネントを定義
export function PostCard({ name, content }) {
    // likedステートを定義し、初期値をfalseに設定
    const [liked, setLiked] = useState(false);
    return (React.createElement("div", { className: "post-card w-full max-w-md mx-auto p-6 rounded" },
        React.createElement("div", { className: "header-container flex justify-between items-center mb-2" },
            React.createElement("div", { className: "font-medium text-lg" }, name),
            React.createElement("button", { onClick: () => setLiked(!liked), className: "heart-button focus:outline-none", "aria-label": liked ? "Unlike" : "Like" },
                React.createElement(Heart, { className: `heart-icon h-6 w-6 transition-all ${liked ? "liked" : ""}` }))),
        React.createElement("div", { className: "content-container flex justify-between items-start" },
            React.createElement("p", { className: "text-base mb-0 content" }, content.split('\n').map((line, index) => (React.createElement(React.Fragment, { key: index },
                line,
                React.createElement("br", null))))))));
}
