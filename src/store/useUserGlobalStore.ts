import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { IAuthenticatedUser, IUser } from "../types";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface IUserGlobalStore {
  user: IAuthenticatedUser | null;
  updatedUser: (user: IAuthenticatedUser | null) => void;
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
    }),
    {
      name: "orole-app-user-store",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
export default useUserGlobalStore;
