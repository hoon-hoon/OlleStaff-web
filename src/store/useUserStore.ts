import { create } from "zustand";
import { persist } from "zustand/middleware";

type UserType = "STAFF" | "GUESTHOUSE" | null;

interface UserState {
    nickname: string;
    type: UserType;
    profileImage: string;
    setUser: (nickname: string, type: UserType, profileImage: string) => void;
    resetUser: () => void;
}

export const useUserStore = create<UserState>()(
    persist(
        set => ({
            nickname: "",
            type: null,
            profileImage: "",
            setUser: (nickname, type, profileImage) => set({ nickname, type, profileImage }),
            resetUser: () => set({ nickname: "", type: null, profileImage: "" }),
        }),
        {
            name: "user-store",
        }
    )
);
