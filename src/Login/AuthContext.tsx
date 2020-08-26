import React from "react";

type ContexAuthtProps = {
  currentUser: firebase.User | null;
};

export const AuthContext = React.createContext<Partial<ContexAuthtProps>>({});
