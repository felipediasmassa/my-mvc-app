import React from "react";
import User from "./interfaces/User";

interface UsersListProps {
  users: User[];
  isLoading: boolean;
  error: string | null;
}

const UsersList: React.FC<UsersListProps> = (props) => {
  console.log(props.isLoading);

  let userList = <h2>No users found</h2>;

  if (props.users.length > 0) {
    userList = (
      <ul>
        {props.users.map((user) => (
          <li key={user.id}></li>
        ))}
      </ul>
    );
  }

  let content = userList;

  if (props.error) {
    content = <button /*onClick={props.onFetch}*/>Try again</button>;
  }

  if (props.isLoading) {
    content = <h2>Loading users...</h2>;
  }

  return <div>{content}</div>;
};

export default UsersList;
