import { create } from "zustand";
import { persist } from "zustand/middleware";

type UserType = "STAFF" | "GUESTHOUSE" | null;

interface UserState {
    nickname: string;
    type: UserType;
    setUser: (nickname: string, type: UserType) => void;
    resetUser: () => void;
}

export const useUserStore = create<UserState>()(
    persist(
        set => ({
            nickname: "",
            type: null,
            setUser: (nickname, type) => set({ nickname, type }),
            resetUser: () => set({ nickname: "", type: null }),
        }),
        {
            name: "user-store",
        }
    )
);
