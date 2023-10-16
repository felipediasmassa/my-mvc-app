import React from "react";
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
        <button onClick={handleButtonClick}>Get Users</button>
      </>
    );
  }

  let content = userList;

  if (props.error) {
    content = <button onClick={handleButtonClick}>Try Again</button>;
  }

  if (props.isLoading) {
    content = <h2>Loading users...</h2>;
  }

  return <div>{content}</div>;
};

export default UsersList;
