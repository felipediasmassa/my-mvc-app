export interface LoggedUser {
  email: string;
  name: string;
}

export interface UserContextType {
  loggedUser: LoggedUser;
  setLoggedUser: React.Dispatch<React.SetStateAction<LoggedUser>>;
}
