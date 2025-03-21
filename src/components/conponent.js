// ユーザー名のコンポーネント
// import React from 'react';
import React, { useState } from 'react';
// コンポーネントの定義 Functional Component
// nameは入力フィールドの初期値、requiredはその入力フィールドが必須であるかどうかを示す真偽値
const InputForm = ({ width, height, input, required, maxLength, onChange }) => {
    // const { input, required, maxLength } = props;
    // valueは入力フィールドの値、setValueはvalueの値を変更するための関数
    const [value, setValues] = useState(input);
    const handleChange = (event) => {
        setValues(event.target.value); // InputForm内の状態更新
        onChange(event.target.value); // 親コンポーネントに値を伝える
    };
    return (React.createElement("div", null, height ? (React.createElement("textarea", { style: { width, height, resize: 'none' }, value: value, required: required, maxLength: maxLength, onChange: handleChange })) : (React.createElement("input", { style: { width }, value: value, required: required, maxLength: maxLength, onChange: handleChange }))));
};
// 角が丸い四角形のボックスを描画し、その中に任意の子要素（テキストや他のコンポーネント）を表示することができます
const RoundedBox = ({ width, height, color, borderRadius, justifyContent, alignItems, margin, children }) => {
    const style = {
        width,
        height,
        backgroundColor: color,
        borderRadius,
        justifyContent,
        alignItems,
        margin, // 中央に配置
    };
    return React.createElement("div", { style: style }, children);
};
const NovelTextFild = ({ novelText }) => {
    return (React.createElement("div", null,
        React.createElement("h4", null, novelText)));
};
// 複数エクスポート
// 名前付きエクスポート
// export default { InputForm, RoundedBox };
const Components = { InputForm, RoundedBox, NovelTextFild };
export default Components;
