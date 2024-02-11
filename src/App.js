import React from "react";

import AppHeader from "./component/AppHeader";

import "./App.css";
import AppFooter from "./component/AppFooter";
import { Route, Routes } from "react-router-dom";
import PageHome from "./Home";
import PageMaps from "./Navbar/Maps";
import PagePhoto from "./Navbar/Photo";
import PageVideo from "./Navbar/Video";
import Page404 from "./Navbar/Page404";
import PageHot from "./Hot";
import PageLogin from "./Navbar/Login";

function App() {
  return (
    <div>
      <div className="App">
        <AppHeader />

        <div className="blak"></div>

        <Routes>
          <Route path="" element={<PageHome />} />
          <Route path="Hot" element={<PageHot />} />
          <Route path="Photo" element={<PagePhoto />} />
          <Route path="Video" element={<PageVideo />} />
          <Route path="Maps" element={<PageMaps />} />
          <Route path="Login" element={<PageLogin />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </div>

      <AppFooter></AppFooter>
    </div>
  );
}

export default App;
