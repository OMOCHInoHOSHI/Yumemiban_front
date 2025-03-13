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
import { useNavigate } from 'react-router-dom';
import './PostView_Screen.css';
var PostView_Screen = function () {
    var navigate = useNavigate();
    var handleEditClick = function () {
        navigate('/PostInput_Screen'); // ナビゲーション
    };
    return (_jsxs("div", __assign({ className: "post-view" }, { children: [_jsx("h1", { children: "\u30DD\u30B9\u30C8\u4E00\u89A7" }), _jsx("button", __assign({ onClick: handleEditClick }, { children: "\u6295\u7A3F\u753B\u9762\u3078" })), " "] })));
};
export default PostView_Screen;
