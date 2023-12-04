import { create } from "zustand";

const initialState = {
  isLogged: false,
};

type State = {
  isLogged: boolean;
};

type Actions = {
  login: () => void;
  signOut: () => void;
};

export const useGlobalStore = create<State & Actions>((set) => ({
  ...initialState,

  login: () => set(() => ({ isLogged: true })),

  signOut: () => set(() => ({ isLogged: false })),
}));
