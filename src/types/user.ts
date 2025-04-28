export interface UserInfo {
    nickname: string;
    phone: string;
    verificationCode: string;
    birthDate: string;
}

export interface ErrorState {
    nickname?: string;
    phone?: string;
    verificationCode?: string;
    birthDate?: string;
}
