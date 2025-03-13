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
import { jsx as _jsx } from "react/jsx-runtime";
// ユーザー名のコンポーネント
// import React from 'react';
import { useState } from 'react';
// コンポーネントの定義 Functional Component
// nameは入力フィールドの初期値、requiredはその入力フィールドが必須であるかどうかを示す真偽値
var InputForm = function (_a) {
    // const { input, required, maxLength } = props;
    var input = _a.input, required = _a.required, maxLength = _a.maxLength, onChange = _a.onChange;
    // valueは入力フィールドの値、setValueはvalueの値を変更するための関数
    var _b = useState(input), value = _b[0], setValues = _b[1];
    var handleChange = function (event) {
        setValues(event.target.value); // InputForm内の状態更新
        onChange(event.target.value); // 親コンポーネントに値を伝える
    };
    return (_jsx("div", { children: _jsx("input", { type: "text", value: value, required: required, maxLength: maxLength, onChange: handleChange }) }));
};
// 角が丸い四角形のボックスを描画し、その中に任意の子要素（テキストや他のコンポーネント）を表示することができます
var RoundedBox = function (_a) {
    var width = _a.width, height = _a.height, color = _a.color, borderRadius = _a.borderRadius, children = _a.children;
    var style = {
        width: width,
        height: height,
        backgroundColor: color,
        borderRadius: borderRadius,
    };
    return _jsx("div", __assign({ style: style }, { children: children }));
};
// export default RoundedBox;
// 背景のコンポーネントE--------------------------------------------------------------------------
// 生成ボタンのコンポーネントS--------------------------------------------------------------------------
// interface GenerateButtonProps {
//     onClick: () => void;    // ボタンがクリックされたときに呼び出される関数
// }
// const GenerateButton: FC<GenerateButtonProps> = ({ onClick }) => {
//     return (
//         <button onClick={onClick}>生成</button>
//     );
// };
// 生成ボタンのコンポーネントE--------------------------------------------------------------------------
// 複数エクスポート
// 名前付きエクスポート
// export default { InputForm, RoundedBox };
var Components = { InputForm: InputForm, RoundedBox: RoundedBox };
export default Components;
