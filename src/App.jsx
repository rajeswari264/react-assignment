import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import LandingScreen from "./components/LandingScreen";
import SigninScreen from "./components/SigninScreen";
import SignupScreen from "./components/SignupScreen";
import Profile from "./components/Profile";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div className="flex items-center justify-center h-full">
        <div className="w-[275px] h-[540px] overflow-hidden">
          <Routes>
            <Route path="/" element={<LandingScreen />} />
            <Route path="/signin" element={<SigninScreen />} />
            <Route path="/signup" element={<SignupScreen />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
