import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "@mui/material";

import { UserContext } from "../../contexts/user-context/UserContext";

import {
  UserContextType,
  LoggedUser,
} from "../../contexts/user-context/interfaces/UserContextType";

const LoggedUserForm = () => {
  // State for user data (from context)
  const { loggedUser, setLoggedUser } = useContext(
    UserContext
  ) as UserContextType;

  // State for input field
  const [enteredUser, setEnteredUser] = useState<LoggedUser>({
    name: "",
    email: "",
  });

  // Hook to enable navigating between screens:
  const navigate = useNavigate();

  const handleChangeLoggedUser = () => {
    setLoggedUser(enteredUser);
    console.log(enteredUser);
  };

  const handleChangeEnteredUserName = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setEnteredUser((prevState) => {
      return { ...prevState, name: event.target.value };
    });
  };

  const handleChangeEnteredUserEmail = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setEnteredUser((prevState) => {
      return { ...prevState, email: event.target.value };
    });
  };

  const handleNavigateUsersPage = () => {
    navigate("/users");
  };

  return (
    <div>
      <p>Logged user: {loggedUser.email}</p>
      <p>Change logged user:</p>
      <label>User Name:</label>
      <input value={enteredUser.name} onChange={handleChangeEnteredUserName} />
      <label>User Email:</label>
      <input
        value={enteredUser.email}
        onChange={handleChangeEnteredUserEmail}
      />
      <Button variant="contained" onClick={handleChangeLoggedUser}>
        Change
      </Button>
      <Button variant="contained" onClick={handleNavigateUsersPage}>
        To Users Page
      </Button>
    </div>
  );
};

export default LoggedUserForm;
