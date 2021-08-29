import React, { createContext,useContext, useState } from "react";

const UserContext = createContext({
  token: null,
  setToken: () => {},
});


const UserProvider = ({ children }) => {
  const [token, setToken] = useState(null);

  return (
    <UserContext.Provider value={{ token, setToken }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);

export default UserProvider;
