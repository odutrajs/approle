import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { IAuthenticatedUser } from "../types";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface IUserGlobalStore {
  user: IAuthenticatedUser | null;
  updatedUser: (user: IAuthenticatedUser | null) => void;
  clearUser: () => void;
}

const useUserGlobalStore = create<IUserGlobalStore>()(
  persist(
    (set, get) => ({
      user: null,
      updatedUser: (user) => {
        set({
          user,
        });
      },
      clearUser: async () => {
        set({ user: null });
        await AsyncStorage.removeItem("orole-app-user-store");
      },
    }),
    {
      name: "orole-app-user-store",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
export default useUserGlobalStore;
