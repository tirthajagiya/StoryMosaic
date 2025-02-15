import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Story from "./components/Story";
import StoryDetail from "./components/StoryDetail";
import Write from "./components/Write";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {/* <Route path="/login" element={<Login />} /> */}
          {/* <Route path="signup" element={<Signup />} /> */}
          <Route path="story" element={<Story />} />
          <Route path="story/:id" element={<StoryDetail />} />
          {/* <Route path="write-story" element={<Write />} /> */}
        </Route>
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="write-story" element={<Write />} />
      </Routes>
    </BrowserRouter>
  </>
);
