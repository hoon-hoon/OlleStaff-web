import axios from "axios";

export const fetchMinimumUserInfo = async () => {
    const res = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/users/me/minimum`, {
        withCredentials: true,
    });

    return {
        nickname: res.data.data.nickname,
        profileImage: res.data.data.profileImage,
        userType: res.data.data.type,
        onboarded: res.data.data.onboarded,
    };
};
