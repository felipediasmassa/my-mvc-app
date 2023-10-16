import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

import HomePage from "./pages/home-page/HomePage";
import UserPage from "./pages/user-page/UserPage";

import UserContext from "./contexts/user-context/UserContext";
import { LoggedUserType } from "./contexts/user-context/interfaces/UserContextType";

// import { useGoogleAnalytics } from "./analytics/analytics";

const App = () => {
  // useGoogleAnalytics();

  // State to be managed by context
  const [loggedUser, setLoggedUser] = useState<LoggedUserType>({
    email: "felipe.massa@technipfmc.com",
    name: "Felipe Massa",
  });

  return (
    <Router>
      <UserContext.Provider value={{ loggedUser }}>
        <div className="App">
          <header className="App-header">
            <Routes>
              <Route path="" element={<HomePage />}></Route>
              <Route path="users/" element={<UserPage />}></Route>
            </Routes>
          </header>
        </div>
      </UserContext.Provider>
    </Router>
  );
};

export default App;
