import React, { useEffect } from "react";
import { AuthContext } from "./AuthContext";
import { auth } from "../shared/firebase";

export const AuthProvider: React.FC = ({ children }) => {
  const [currentUser, setCurrentUser] = React.useState<firebase.User | null>(
    null
  );

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(
      (user: firebase.User | null) => {
        if (user) setCurrentUser(user);
        else setCurrentUser(null);
      }
    );
    return () => {
      return unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider
      value={{
        currentUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
