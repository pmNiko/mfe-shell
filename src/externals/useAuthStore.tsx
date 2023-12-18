type UserData = {
  name?: string | null;
  email?: string | null;
  photo?: string | null;
};

type State = {
  isLogged: boolean;
  userData: UserData;
};

type Actions = {
  login: (user: UserData) => void;
  signOut: () => void;
};

export type AuthStore = State & Actions;

import useAuthStore from "mf-auth/store";

export default useAuthStore;
