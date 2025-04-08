import { create } from "zustand";

type UserType = "STAFF" | "OWNER" | string;

interface User {
    nickname: string;
    type: UserType;
}

interface UserStore {
    user: User | null;
    setUser: (user: User) => void;
    clearUser: () => void;
}

const useUserStore = create<UserStore>(set => ({
    user: null,
    setUser: user => set({ user }),
    clearUser: () => set({ user: null }),
}));

export default useUserStore;
