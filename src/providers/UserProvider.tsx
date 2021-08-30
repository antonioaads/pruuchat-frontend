import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";

const UserContext = createContext({
  token: null as string | null,
  setToken: ((token: string | null) => {}) as Dispatch<
    SetStateAction<string | null>
  >,
});

const UserProvider: React.FC = ({ children }) => {
  const [token, setToken] = useState<string | null>(null);
  return (
    <UserContext.Provider value={{ token, setToken }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);

export default UserProvider;
