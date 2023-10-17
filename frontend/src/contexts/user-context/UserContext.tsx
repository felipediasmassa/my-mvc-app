import React, { useState, createContext } from "react";

import { UserContextType, LoggedUser } from "./interfaces/UserContextType";

export const defaultContext = {
  loggedUser: {
    email: "",
    name: "",
  },
  setLoggedUser: () => {},
};

export const UserContext = createContext<UserContextType>(defaultContext);

export const UserContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [loggedUser, setLoggedUser] = useState<LoggedUser>({
    email: "felipe.massa@technipfmc.com",
    name: "Felipe Massa",
  });

  return (
    <UserContext.Provider value={{ loggedUser, setLoggedUser }}>
      {children}
    </UserContext.Provider>
  );
};
