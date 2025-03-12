// useStateを使って、入力フォームの値を管理する
// useState..関数コンポーネントで状態（state）を管理するために使用
import React, { useState } from 'react';
import './PostInput_Screen.css';
import Components from '../components/conponent';
import textpush from '../models/PushText';
const PostInput_Screen = () => {
    // 初期値を空文字列に設定
    const [nickname, setNickname] = useState(''); // ニックネーム
    const [content, setContent] = useState(''); // 夢の内容
    const handleSubmit = () => {
        // ニックネームと文章を textpush 関数に渡す
        textpush(nickname, content);
    };
    return (React.createElement("div", null,
        React.createElement("h1", null, "\u4F5C\u6210"),
        React.createElement(Components.RoundedBox, { width: "300px", height: "200px", color: "#f0f0f0", borderRadius: "15px" },
            React.createElement("p", null, "\u30CB\u30C3\u30AF\u30CD\u30FC\u30E0\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044"),
            React.createElement(Components.InputForm, { input: nickname, required: true, maxLength: 20, onChange: setNickname }),
            React.createElement("p", null, "\u5922\u306E\u5185\u5BB9\u3092\u66F8\u3044\u3066\u307F\u3066\u304F\u3060\u3055\u3044...(=o=;)"),
            React.createElement(Components.InputForm, { input: content, required: true, maxLength: 50, onChange: setContent })),
        React.createElement("button", { onClick: handleSubmit }, "\u9001\u4FE1")));
};
export default PostInput_Screen;
