import { useState } from "react";
import { UserInfo, ErrorState } from "../types/user";

export default function useSignupForm() {
    const [userInfo, setUserInfo] = useState<UserInfo>({
        nickname: "",
        phone: "",
        verificationCode: "",
        birthDate: "",
    });

    const [errors, setErrors] = useState<ErrorState>({});

    const handleInputChange = (field: keyof UserInfo) => (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserInfo((prev) => ({
            ...prev,
            [field]: e.target.value,
        }));

        setErrors((prev) => ({
            ...prev,
            [field]: "",
        }));
    };

    const validate = () => {
        const newErrors: ErrorState = {};
        if (userInfo.nickname.length < 2 || userInfo.nickname.length > 8) {
            newErrors.nickname = "닉네임은 2~8자 사이여야 해요.";
        }
        if (!userInfo.phone) {
            newErrors.phone = "전화번호를 입력해 주세요.";
        }
        if (!userInfo.verificationCode) {
            newErrors.verificationCode = "인증번호를 입력해 주세요.";
        }
        if (!/^\d{8}$/.test(userInfo.birthDate)) {
            newErrors.birthDate = "생년월일은 8자리 숫자 (YYYYMMDD)로 입력해 주세요.";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    return {
        userInfo,
        errors,
        handleInputChange,
        validate,
    };
}
