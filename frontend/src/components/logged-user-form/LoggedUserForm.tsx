import React, { useState, useContext } from "react";

import UserContext from "../../contexts/user-context/UserContext";
import UserContextType, {
  LoggedUserType,
} from "../../contexts/user-context/interfaces/UserContextType";

const LoggedUserForm = () => {
  // State for user data (from context)
  const { loggedUser, setLoggedUser } = useContext(
    UserContext
  ) as UserContextType;

  // State for input field
  const [enteredUser, setEnteredUser] = useState<LoggedUserType>({
    name: "",
    email: "",
  });

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
      <button onClick={handleChangeLoggedUser}>Change</button>
    </div>
  );
};

export default LoggedUserForm;
