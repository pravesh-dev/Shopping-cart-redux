import React from "react";
import Layout from "./Components/Layout";
import Home from "./Pages/Home";
import Detail from "./Pages/Detail";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="/:slug" element={<Detail />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
