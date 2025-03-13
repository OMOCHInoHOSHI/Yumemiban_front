import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Routes, Route } from "react-router-dom";
import PostView_Screen from "./pages/PostView_Screen";
import PostInput_Screen from "./pages/PostInput_Screen";
var AppRoutes = function () {
    return (_jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(PostView_Screen, {}) }), _jsx(Route, { path: "/PostInput_Screen", element: _jsx(PostInput_Screen, {}) })] }));
};
export default AppRoutes;
