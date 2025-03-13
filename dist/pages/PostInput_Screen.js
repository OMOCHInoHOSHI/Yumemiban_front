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
// useStateを使って、入力フォームの値を管理する
// useState..関数コンポーネントで状態（state）を管理するために使用
import { useState } from 'react';
import './PostInput_Screen.css';
import Components from '../components/conponent';
import textpush from '../models/PushText';
var PostInput_Screen = function () {
    // 初期値を空文字列に設定
    var _a = useState(''), nickname = _a[0], setNickname = _a[1]; // ニックネーム
    var _b = useState(''), content = _b[0], setContent = _b[1]; // 夢の内容
    var handleSubmit = function () {
        // ニックネームと文章を textpush 関数に渡す
        textpush(nickname, content);
    };
    var sendcreateNovle = function () {
        console.log('createNovle');
    };
    return (_jsxs("div", { children: [_jsx("h2", { children: "\u4F5C\u6210" }), _jsxs(Components.RoundedBox, __assign({ width: "300px", height: "200px", color: "#f0f0f0", borderRadius: "0px" }, { children: [_jsx("p", { children: "\u751F\u6210\u3055\u308C\u305F\u77ED\u7DE8\u5C0F\u8AAC" }), _jsx("button", __assign({ onClick: sendcreateNovle }, { children: "\u751F\u6210" }))] })), _jsx("button", __assign({ onClick: handleSubmit }, { children: "\u9001\u4FE1" }))] }));
};
export default PostInput_Screen;
