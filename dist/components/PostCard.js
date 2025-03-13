var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// PostCard.tsx
import React, { useState } from "react";
import { Heart } from "lucide-react";
import './PostCard.css'; // CSSファイルをインポート
// PostCardコンポーネントを定義
export function PostCard(_a) {
    var name = _a.name, content = _a.content;
    // likedステートを定義し、初期値をfalseに設定
    var _b = useState(false), liked = _b[0], setLiked = _b[1];
    // clickedステートを定義し、初期値をfalseに設定
    var _c = useState(false), clicked = _c[0], setClicked = _c[1];
    return (_jsxs("div", __assign({ className: "post-card w-full max-w-md mx-auto p-6 rounded", onClick: function () { return setClicked(true); } }, { children: [_jsxs("div", __assign({ className: "header-container flex justify-between items-center mb-2" }, { children: [_jsx("div", __assign({ className: "font-medium text-lg" }, { children: name })), _jsx("button", __assign({ onClick: function (e) {
                            e.stopPropagation(); // クリックイベントが親要素に伝播するのを防ぐ
                            setLiked(!liked); // ボタンがクリックされたときにlikedステートをトグル
                        }, className: "heart-button focus:outline-none", "aria-label": liked ? "Unlike" : "Like" }, { children: _jsx(Heart, { className: "heart-icon h-6 w-6 transition-all ".concat(liked ? "liked" : "") }) }))] })), _jsx("div", __assign({ className: "content-container flex justify-between items-start" }, { children: _jsx("p", __assign({ className: "text-base mb-0 content" }, { children: clicked ? "クリック済み" : content.split('\n').map(function (line, index) { return (_jsxs(React.Fragment, { children: [line, _jsx("br", {})] }, index)); }) })) }))] })));
}
