import "./reset.css";
import "./index.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import SignIn from "./Pages/sign-in/signin.jsx";
import SignUp from "./Pages/sign-up/signup.jsx";
import ProtectedRoute from "./routing/protectedRoute.js";

function App() {
  return (
    <div className="App">
      <div style={{ maxWidth: "100%", height: "100%" }}>
        <Toaster />
        <Routes>
          <Route element={<ProtectedRoute />}>
            {/* <Route path="/" element={<Home />} /> */}
          </Route>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          {/* <Route path="/chatroom/:id" element={<ChatRoom />} /> */}
        </Routes>
      </div>
    </div>
  );
}

export default App;
