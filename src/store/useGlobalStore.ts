import { create } from "zustand";

type UserData = {
  name?: string | null;
  email?: string | null;
  photo?: string | null;
};

const initialState = {
  isLogged: false,
  userData: {} as UserData,
};

type State = {
  isLogged: boolean;
  userData: UserData;
};

type Actions = {
  login: (user: UserData) => void;
  signOut: () => void;
};

export const useGlobalStore = create<State & Actions>((set) => ({
  ...initialState,

  login: (user: UserData) => set(() => ({ isLogged: true, userData: user })),

  signOut: () =>
    set(() => ({
      isLogged: false,
      userData: { name: "", email: "", photo: "" },
    })),
}));
