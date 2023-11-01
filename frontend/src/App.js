import "./App.css";
import React, { createContext, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/pages/Dashboard";
import Login from "./components/pages/login";

function App() {
  const UserContext = createContext();
  const [user, setUser] = useState();
  return (
    // Page Wrapper
    <UserContext.Provider value={user}>
      <Routes>
        <Route index element={<Login setUser={setUser} />} />
        <Route
          path="/dashboard"
          element={<Dashboard user={user} setUser={setUser} />}
        />
      </Routes>
    </UserContext.Provider>
  );
}

export default App;
