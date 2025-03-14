import React, { useState } from "react";
import "./PostInput_Screen.css";
import Components from "../components/conponent";
import textpush from "../models/PushText";
import Novel from "../models/Novel";
import { IconButton } from "@mui/material";
import { SendIcon } from "lucide-react";
import ja_text from "../resous_ja.json";
const PostInput_Screen = () => {
    // 初期値を空文字列に設定
    const [nickname, setNickname] = useState(""); // ニックネーム
    const [content, setContent] = useState(""); // 夢の内容
    const [novelText, setNovelText] = useState(""); // 生成された短編小説のテキスト
    const [isNovelGenerated, setIsNovelGenerated] = useState(false); // 小説生成状態
    const handleSubmit = () => {
        // ニックネームと内容とノベルテキストを textpush 関数に渡す
        textpush.pushText(nickname, content, novelText);
    };
    // 小説の生成、セット
    const sendcreateNovle = () => {
        console.log("createNovle");
        Novel.createNovel(content, setNovelText);
        setIsNovelGenerated(true); // 小説生成状態を更新
    };
    return (React.createElement("div", null,
        React.createElement("h2", { style: { fontSize: "calc(50vh * 0.08)", marginLeft: "20px" } }, ja_text.create),
        React.createElement(Components.RoundedBox, { width: "70%", height: "calc(35vh)", color: "#f0f0f0", borderRadius: "15px", justifyContent: "center", alignItems: "center", margin: "0 auto" },
            React.createElement("div", { className: "rounded-box-content" },
                React.createElement("p", { className: "dynamic-margin" }, ja_text.nickname_input_label),
                React.createElement(Components.InputForm, { width: "100%", input: nickname, required: true, maxLength: 20, onChange: setNickname }),
                React.createElement("p", { className: "dynamic-margin" }, ja_text.dream_content_label),
                React.createElement(Components.InputForm, { width: "100%", height: "calc(9vh)", input: content, required: true, maxLength: 50, onChange: setContent }))),
        React.createElement(Components.RoundedBox, { width: "70%", height: "calc(35vh)", color: "#f0f0f0", borderRadius: "15px", justifyContent: "center", alignItems: "center", margin: "0 auto" },
            React.createElement("div", { className: "rounded-box-content" },
                React.createElement("p", { className: "dynamic-margin" }, ja_text.generated_novel_label),
                React.createElement("button", { className: "dynamic-button", onClick: sendcreateNovle }, ja_text.generate_button_label),
                React.createElement("div", { className: `novel-text-field ${isNovelGenerated ? "expanded" : ""}` },
                    React.createElement(Components.NovelTextFild, { novelText: novelText })))),
        React.createElement("div", { className: "icon-button-container" },
            React.createElement(IconButton, { onClick: handleSubmit },
                React.createElement(SendIcon, null)))));
};
export default PostInput_Screen;
