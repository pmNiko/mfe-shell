import { useEffect, useState } from "react";
import { auth } from "../auth/fb-auth";
import { onAuthStateChanged } from "firebase/auth";

export const useAuthorize = () => {
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    const listener = onAuthStateChanged(auth, (user) => {
      setIsLogged(!!user);
    });

    return () => listener();
  }, [auth]);

  return {
    isLogged,
  };
};
