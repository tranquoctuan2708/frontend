import "./App.css";
import React, { createContext, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/pages/Dashboard";
import Login from "./components/pages/login";

function App() {
  const UserContext = createContext();
  const [data, setData] = useState();
  return (
    // Page Wrapper
    <UserContext.Provider value={data}>
      <Routes>
        <Route index element={<Login setData={setData} />} />
        <Route
          path="/dashboard"
          element={
            <Dashboard
              user={data?.user}
              taskData={data?.taskData}
              processData={data?.processData}
              doneData={data?.doneData}
              setData={setData}
              totalIssue={data?.totalIssue}
            />
          }
        />
      </Routes>
    </UserContext.Provider>
  );
}

export default App;
