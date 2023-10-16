import React, { useContext } from "react";

import "./UserPage.css";
import UsersListContainer from "../../components/users-list/UsersListContainer";
import UserContext from "../../contexts/user-context/UserContext";
import UserContextType from "../../contexts/user-context/interfaces/UserContextType";

const UserPage = () => {
  // State for user data:
  const { loggedUser } = useContext(UserContext) as UserContextType;

  return (
    <>
      <p>Logged user: {loggedUser.email}</p>
      <UsersListContainer />
    </>
  );
};

export default UserPage;
