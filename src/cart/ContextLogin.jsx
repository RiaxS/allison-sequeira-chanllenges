import React from "react";
import { createContext, useState } from "react";

const ContextLogin = createContext({
  isLogged: false,
  logIn: () => {},
  logOut: () => {},
});

const { Provider, Consumer } = ContextLogin;
const ContextLoginProvider = ({ children }) => {
  const [logged, setLogged] = useState(false);
  const values = {
    isLogged: logged,
    logIn: () => {
      setLogged(true);
    },
    logOut: () => {
      setLogged(false);
    },
  };
  return <Provider value={values}>{children}</Provider>;
};

export default ContextLogin;
export { Consumer, ContextLoginProvider as Provider };
