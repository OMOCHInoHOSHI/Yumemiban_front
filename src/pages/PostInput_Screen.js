import React, { useState } from 'react';
import './PostInput_Screen.css';
import Components from '../components/conponent';
import textpush from '../models/PushText';
import Novel from '../models/Novel';
import { IconButton } from '@mui/material';
import { SendIcon } from 'lucide-react';
import ja_text from '../resous_ja.json';
const PostInput_Screen = () => {
    // 初期値を空文字列に設定
    const [nickname, setNickname] = useState(''); // ニックネーム
    const [content, setContent] = useState(''); // 夢の内容
    const [novelText, setNovelText] = useState(''); // 生成された短編小説のテキスト
    const handleSubmit = () => {
        // ニックネームと内容とノベルテキストを textpush 関数に渡す
        textpush.pushText(nickname, content, novelText);
    };
    // 小説の生成、セット
    const sendcreateNovle = () => {
        console.log('createNovle');
        Novel.createNovel(nickname, content);
        const generatedText = Novel.getNovel();
        setNovelText(generatedText);
    };
    return (React.createElement("div", null,
        React.createElement("h2", null, "\u4F5C\u6210"),
        React.createElement(Components.RoundedBox, { width: "300px", height: "200px", color: "#f0f0f0", borderRadius: "15px" },
            React.createElement("p", null, ja_text.nickname_input_label),
            React.createElement(Components.InputForm, { input: nickname, required: true, maxLength: 20, onChange: setNickname }),
            React.createElement("p", null,
                ja_text.dream_content_label,
                "...(=o=;)"),
            React.createElement(Components.InputForm, { input: content, required: true, maxLength: 50, onChange: setContent })),
        React.createElement(Components.RoundedBox, { width: "300px", height: "200px", color: "#f0f0f0", borderRadius: "15px" },
            React.createElement("p", null, ja_text.generated_novel_label),
            React.createElement("button", { onClick: sendcreateNovle }, ja_text.generate_button_label),
            React.createElement("div", { className: "novel-text-field" },
                React.createElement(Components.NovelTextFild, { novelText: novelText }))),
        React.createElement(IconButton, { onClick: handleSubmit },
            React.createElement(SendIcon, null))));
};
export default PostInput_Screen;
