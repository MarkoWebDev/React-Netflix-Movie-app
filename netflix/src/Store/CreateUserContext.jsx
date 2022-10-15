import React, { createContext, useReducer, useEffect } from "react";
import { UserReducer } from "../UserReducer";

export const UserContext = createContext();

const CreateUserContext = ({ children }) => {
  const getFromLocal = () => {
    const storage = localStorage.getItem("user");
    if (!storage) {
      return {};
    }
    return JSON.parse(storage);
  };

  const [state, dispatch] = useReducer(UserReducer, getFromLocal());

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state));
  }, [state]);

  return (
    <div>
      <UserContext.Provider value={[state, dispatch]}>
        {children}
      </UserContext.Provider>
    </div>
  );
};

export default CreateUserContext;
