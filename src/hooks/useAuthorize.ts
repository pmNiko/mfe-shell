import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { auth } from "../auth/fb-auth";
import { useGlobalStore } from "../store/useGlobalStore";

export const useAuthorize = () => {
  const login = useGlobalStore((state) => state.login);
  const signOut = useGlobalStore((state) => state.signOut);

  useEffect(() => {
    const listener = onAuthStateChanged(auth, (user) => {
      if (!user) {
        signOut();
      } else {
        login({
          name: auth.currentUser?.displayName,
          email: auth.currentUser?.email,
          photo: auth.currentUser?.photoURL,
        });
      }
    });

    return () => listener();
  }, [auth]);

  return {};
};
