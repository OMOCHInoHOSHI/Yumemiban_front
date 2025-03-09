"use client";
import React, { useState } from "react";
import { Heart } from "lucide-react";
import './PostCard.css'; // CSSファイルをインポート
export function PostCard({ name, content }) {
    const [liked, setLiked] = useState(false);
    return (React.createElement("div", { className: "post-card w-full max-w-md mx-auto p-6 rounded" },
        React.createElement("div", { className: "font-medium text-lg mb-2" }, name),
        React.createElement("div", { className: "flex justify-between items-start" },
            React.createElement("p", { className: "text-base mb-0" }, content),
            React.createElement("button", { onClick: () => setLiked(!liked), className: "heart-button focus:outline-none", "aria-label": liked ? "Unlike" : "Like" },
                React.createElement(Heart, { className: `heart-icon h-6 w-6 transition-all ${liked ? "liked" : ""}` })))));
}
