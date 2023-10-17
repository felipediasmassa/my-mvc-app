import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

import { UserContextProvider } from "./contexts/user-context/UserContext";

// import { useGoogleAnalytics } from "./analytics/analytics";

import HomePage from "./pages/home-page/HomePage";
import UserPage from "./pages/user-page/UserPage";

const App = () => {
  // useGoogleAnalytics();

  return (
    <Router>
      <UserContextProvider>
        <div className="App">
          <header className="App-header">
            <Routes>
              <Route path="" element={<HomePage />}></Route>
              <Route path="users/" element={<UserPage />}></Route>
            </Routes>
          </header>
        </div>
      </UserContextProvider>
    </Router>
  );
};

export default App;
