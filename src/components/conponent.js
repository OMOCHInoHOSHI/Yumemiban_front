// ユーザー名のコンポーネント
// import React from 'react';
import React, { useState } from 'react';
// コンポーネントの定義 Functional Component
// nameは入力フィールドの初期値、requiredはその入力フィールドが必須であるかどうかを示す真偽値
const InputForm = (props) => {
    const { input, required, maxLength } = props;
    // valueは入力フィールドの値、setValueはvalueの値を変更するための関数
    const [value, setValues] = useState(input);
    // 入力フィールドの値が変更されたときに呼び出される関数
    const handleChange = (event) => {
        setValues(event.target.value);
    };
    return (React.createElement("div", null,
        React.createElement("label", null, "\u5165\u529B"),
        React.createElement("input", { type: "text", value: value, required: required, maxLength: maxLength, onChange: handleChange })));
};
// 角が丸い四角形のボックスを描画し、その中に任意の子要素（テキストや他のコンポーネント）を表示することができます
const RoundedBox = ({ width, height, color, borderRadius, children }) => {
    const style = {
        width,
        height,
        backgroundColor: color,
        borderRadius,
    };
    return React.createElement("div", { style: style }, children);
};
// export default RoundedBox;
// 背景のコンポーネントE--------------------------------------------------------------------------
// 複数エクスポート
// 名前付きエクスポート
export default { InputForm, RoundedBox };
