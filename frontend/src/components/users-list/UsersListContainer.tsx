import React, { useState, useEffect } from "react";

import UsersList from "./UsersList";
import User from "./interfaces/User";

import useHttp from "../../hooks/use-http";

import { config } from "../../utils/config";

const urlFetchUsers = `${config.apiUrl}/users/sum-value`;

const UsersListContainer: React.FC = () => {
  // State definition
  const [users, setUsers] = useState<User[]>([]);

  // Custom hook utilization
  const httpData = useHttp({ url: urlFetchUsers }, setUsers);
  const { isLoading, error, sendRequest: fetchUsers } = httpData;

  // Effect definition
  useEffect(() => {
    fetchUsers();
  }, []);

  // Lifting the state up to refetch users based on click in button in child component
  const getUsers = () => {
    fetchUsers();
  };

  return (
    <UsersList
      users={users}
      isLoading={isLoading}
      error={error}
      getUsers={getUsers}
    />
  );
};

export default UsersListContainer;
