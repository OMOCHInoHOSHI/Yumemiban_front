// src/Routes.tsx
import React from 'react';
import { Routes, Route } from "react-router-dom";
import PostView_Screen from "./pages/PostView_Screen";
import PostInput_Screen from "./pages/PostInput_Screen";
const AppRoutes = () => {
    return (React.createElement(Routes, null,
        React.createElement(Route, { path: "/", element: React.createElement(PostView_Screen, null) }),
        React.createElement(Route, { path: "/edit", element: React.createElement(PostInput_Screen, null) })));
};
export default AppRoutes;
