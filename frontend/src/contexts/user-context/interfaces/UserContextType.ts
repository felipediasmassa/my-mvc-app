interface LoggedUserType {
  email: string;
  name: string;
}

interface UserContextType {
  loggedUser: LoggedUserType;
  setLoggedUser: React.Dispatch<React.SetStateAction<LoggedUserType>>;
}

export default UserContextType;
export type { LoggedUserType };
