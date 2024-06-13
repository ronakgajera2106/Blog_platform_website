import { create } from "zustand";
import { persist } from "zustand/middleware";
import { AuthState } from "../types";

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      token: null,
      setUser: (user) => set(() => ({ user: user })),
      setToken: (token) => set(() => ({ token: token })),
    }),
    {
      name: "auth-storage",
    }
  )
);

export default useAuthStore;
