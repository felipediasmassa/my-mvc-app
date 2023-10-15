import React, { useState, useEffect } from "react";

import { config } from "../../utils/config";

// Improvements:
// - Clean public folder and tsx files
// - Refactor interface to dedicated module
// - Refactor http request to custom hook
// - Refactor request url to custom hook

const urlFetchUsers = `${config.apiUrl}/users/sum-value`;

// Interface for User
interface User {
  id: number;
  username: string;
  email: string;
  sum: number;
}

const UsersList: React.FC = () => {
  // State definition
  const [users, setUsers] = useState<User[]>([]);

  // Effect definition
  useEffect(() => fetchUsers(), []);

  // Function to fetch users data from backend
  const fetchUsers = () => {
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };
    console.log("fetchUsers request:", requestOptions);

    // Send request to database:
    fetch(urlFetchUsers, requestOptions)
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else {
          throw new Error("Data not fetched successfully from database");
        }
      })
      .then((data) => {
        console.log("fetchUsers response body", data);
        setUsers(data);
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      {users.map((user) => (
        <React.Fragment key={user.id}>
          <h3 key={user.id}>{user.username}</h3>
          <h5>
            Sum: {user.sum} / Email: {user.email}
          </h5>
        </React.Fragment>
      ))}
    </>
  );
};

export default UsersList;
