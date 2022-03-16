import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialog from "./components/Dialog/Dialog";
import { BrowserRouter, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <div className="container">
          <Navbar />
          <Route path={"/profile"}>
            <Profile />
          </Route>
          <Route path={"/dialogs"}>
            <Dialog />
          </Route>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
