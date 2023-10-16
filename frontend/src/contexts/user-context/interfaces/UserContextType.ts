interface LoggedUserType {
  email: string;
  name: string;
}

interface UserContextType {
  loggedUser: LoggedUserType;
}

export default UserContextType;
export type { LoggedUserType };
