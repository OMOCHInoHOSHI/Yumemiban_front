import React from 'react';
import './PostInput_Screen.css';
import Components from '../components/conponent';
const PostInput_Screen = () => {
    return (React.createElement("div", null,
        React.createElement("h1", null, "\u4F5C\u6210aa"),
        React.createElement(Components.RoundedBox, { width: "300px", height: "200px", color: "#f0f0f0", borderRadius: "15px" },
            React.createElement("p", null, "\u3053\u308C\u306F\u89D2\u304C\u4E38\u3044\u30DC\u30C3\u30AF\u30B9\u306E\u4E2D\u306E\u30C6\u30AD\u30B9\u30C8\u3067\u3059\u3002")),
        React.createElement(Components.InputForm, { input: "\u521D\u671F\u5024", required: true, maxLength: 50 })));
};
export default PostInput_Screen;
