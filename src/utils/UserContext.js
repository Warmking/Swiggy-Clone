import { createContext } from "react";

const UserContext = createContext({
  logInUser: "Default User",
});

export default UserContext;
