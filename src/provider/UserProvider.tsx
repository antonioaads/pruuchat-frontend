/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";
import PropTypes from "prop-types";

export interface IUser {
  id: number;
  email: string;
  name: string;
  token: string;
  active: boolean;
  picture: string;
}

const UserContext = createContext({
  user: null as IUser | null,
  setUser: ((user: IUser | null) => {}) as Dispatch<
    SetStateAction<IUser | null>
  >,
});

const UserProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<IUser | null>(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

UserProvider.propTypes = {
  children: PropTypes.node,
};

export const useUser = () => useContext(UserContext);

export default UserProvider;
