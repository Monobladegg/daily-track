import { IUser } from "@/shared/lib/types";
import { StateCreator } from "zustand";

export const authSlice: StateCreator<
  IUser,
  [["zustand/immer", never]],
  [],
  IUser
> = (set, get) => ({
  username: "",
  email: "",
  isAuth: false,
  dashboard: [],
  setUsername: (username: string) => set({ username }),
  setEmail: (email: string) => set({ email }),
  setIsAuth: (isAuth: boolean) => set({ isAuth }),
  deleteUser: () => {
    set({
      username: "",
      email: "",
      isAuth: false,
    }),
    localStorage.removeItem("token");
  },
  setDashboard: (dashboard) => set({ dashboard })
});