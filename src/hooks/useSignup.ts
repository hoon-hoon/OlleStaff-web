import { useMutation } from "@tanstack/react-query";
import axios from "axios";

export interface SignupRequest {
    nickname: string;
    phone: string;
    phoneVerificationCode: string;
    birthDate: number;
    image?: File | null;
    agreements: string[];
}

export const useSignup = () => {
    return useMutation({
        mutationFn: async (data: SignupRequest) => {
            const formData = new FormData();
            formData.append("nickname", data.nickname);
            formData.append("phone", data.phone);
            formData.append("phoneVerificationCode", data.phoneVerificationCode);
            formData.append("birthDate", data.birthDate.toString());

            if (data.image) {
                formData.append("image", data.image);
            }

            data.agreements.forEach(agreement => {
                formData.append("agreements", agreement);
            });

            const res = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/users`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
                withCredentials: true,
            });

            return res.data;
        },

        onSuccess: () => {
            console.log("✅ 회원가입 성공");
            // 타입선택 페이지로 navigate
        },

        onError: err => {
            console.error("❌ 회원가입 실패", err);
        },
    });
};
