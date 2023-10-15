import React from "react";

import "./App.css";

import logo from "./assets/logo/logo.svg";

import UsersList from "./components/users-list/UsersList";

// import { useGoogleAnalytics } from "./analytics/analytics";

const App = () => {
  // useGoogleAnalytics();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <UsersList />
      </header>
    </div>
  );
};

export default App;
