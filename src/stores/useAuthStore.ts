
import AsyncStorage from "@react-native-async-storage/async-storage";
import { signOut, User } from "firebase/auth";
import { auth } from "firebaseConfig";
import { create } from 'zustand';

interface AuthStoreType {
    user: User | null,
    authenticate: (user: User) => void
    logout: () => Promise<void>;
}

const useAuthStore = create <AuthStoreType>((set, get) => ({
    user: null,
    authenticate: async (user: User) => {
          set((state) => ({
            user
          }));

          if (user) {
            await AsyncStorage.setItem("user", JSON.stringify(user));
          } else {
            await AsyncStorage.removeItem("user");
          }
        },
    logout: async () => {
        await signOut(auth);
        await AsyncStorage.removeItem("user");
        set((state) => ({
            user: null
        }));
    },
}));

// Restore user on app launch
(async () => {
    const storedUser = await AsyncStorage.getItem("user");
    if (storedUser) {
        useAuthStore.setState({ user: JSON.parse(storedUser) });
    } 
})();

export default useAuthStore;
