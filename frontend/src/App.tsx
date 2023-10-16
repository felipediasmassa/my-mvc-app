import React from "react";

import "./App.css";

import logo from "./assets/logo/logo.svg";

import UsersListContainer from "./components/users-list/UsersListContainer";

// import { useGoogleAnalytics } from "./analytics/analytics";

const App = () => {
  // useGoogleAnalytics();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <UsersListContainer />
      </header>
    </div>
  );
};

export default App;
