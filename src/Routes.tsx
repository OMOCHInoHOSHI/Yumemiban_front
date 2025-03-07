// src/Routes.tsx
import React from 'react';
import { Routes, Route } from "react-router-dom";
import PostView_Screen from "./pages/PostView_Screen";
import PostInput_Screen from "./pages/PostInput_Screen";

const AppRoutes: React.FC = () => {
    return (
      <Routes>
        <Route path="/" element={<PostView_Screen />} />
        <Route path="/edit" element={<PostInput_Screen />} />
      </Routes>
    );
  };
  
  export default AppRoutes;