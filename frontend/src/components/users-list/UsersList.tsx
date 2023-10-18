import React from "react";

import { Button, Backdrop, CircularProgress } from "@mui/material";

import User from "./interfaces/User";

interface UsersListProps {
  users: User[];
  isLoading: boolean;
  error: string | null;
  getUsers: () => void;
}

const UsersList: React.FC<UsersListProps> = (props) => {
  const handleButtonClick = () => {
    props.getUsers();
  };

  let userList = <h2>No users found</h2>;

  if (props.users.length > 0) {
    userList = (
      <>
        <ul>
          {props.users.map((user) => (
            <li key={user.id}>
              <p>
                {user.username} | {user.email} | {user.sum}
              </p>
            </li>
          ))}
        </ul>
        <Button variant="contained" onClick={handleButtonClick}>
          Get Users
        </Button>
      </>
    );
  }

  let content = userList;

  if (props.error) {
    content = (
      <Button variant="contained" onClick={handleButtonClick}>
        Try Again
      </Button>
    );
  }

  if (props.isLoading) {
    content = (
      <Backdrop open={props.isLoading}>
        <CircularProgress color="inherit" />
      </Backdrop>
    );
  }

  return <div>{content}</div>;
};

export default UsersList;
