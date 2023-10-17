import { createContext, useState } from "react";
import { IUser } from "../interfaces/User";

export const UserContext = createContext(
  {} as { user: IUser | undefined; setUser: (data?: IUser) => void },
);

interface UserContextProviderProps {
  children: React.ReactNode;
}

const UserContextProvider = ({ children }: UserContextProviderProps) => {
  const [user, setUser] = useState<IUser>();

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
