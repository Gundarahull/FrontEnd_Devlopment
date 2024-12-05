import { useState } from "react";
import userContext from "./userContext";

const UserContextProvider = ({ children }) => {
  //children means what are the compionents are between the provider
  const [user, setUser] = useState("");
  return (
    <userContext.Provider value={{ user, setUser }}>
      {children}
    </userContext.Provider>
  );
};

export default UserContextProvider;
