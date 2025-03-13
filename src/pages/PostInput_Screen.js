import React, { useState } from 'react';
import './PostInput_Screen.css';
import Components from '../components/conponent';
import textpush from '../models/PushText';
const PostInput_Screen = () => {
    // 初期値を空文字列に設定
    const [nickname, setNickname] = useState(''); // ニックネーム
    const [content, setContent] = useState(''); // 夢の内容
    const [novelText, setNovelText] = useState(''); // 生成された短編小説のテキスト
    const handleSubmit = () => {
        // ニックネームと文章を textpush 関数に渡す
        textpush(nickname, content);
    };
    const sendcreateNovle = () => {
        console.log('createNovle');
        const generatedText = getNoveltext();
        setNovelText(generatedText);
    };
    const getNoveltext = () => {
        console.log('getNoveltext');
        return 'noveltext';
    };
    return (React.createElement("div", null,
        React.createElement("h2", null, "\u4F5C\u6210"),
        React.createElement(Components.RoundedBox, { width: "300px", height: "200px", color: "#f0f0f0", borderRadius: "15px" },
            React.createElement("p", null, "\u30CB\u30C3\u30AF\u30CD\u30FC\u30E0\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044"),
            React.createElement(Components.InputForm, { input: nickname, required: true, maxLength: 20, onChange: setNickname }),
            React.createElement("p", null, "\u5922\u306E\u5185\u5BB9\u3092\u66F8\u3044\u3066\u307F\u3066\u304F\u3060\u3055\u3044...(=o=;)"),
            React.createElement(Components.InputForm, { input: content, required: true, maxLength: 50, onChange: setContent })),
        React.createElement(Components.RoundedBox, { width: "300px", height: "200px", color: "#f0f0f0", borderRadius: "15px" },
            React.createElement("p", null, "\u751F\u6210\u3055\u308C\u305F\u77ED\u7DE8\u5C0F\u8AAC"),
            React.createElement("button", { onClick: sendcreateNovle }, "\u751F\u6210"),
            React.createElement("div", null,
                React.createElement(Components.NovelTextFild, { novelText: novelText }))),
        React.createElement("button", { onClick: handleSubmit }, "\u9001\u4FE1")));
};
export default PostInput_Screen;
