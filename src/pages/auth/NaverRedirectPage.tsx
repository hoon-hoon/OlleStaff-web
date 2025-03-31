import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// import useUserStore from "@/store/user";

export default function NaverRedirectPage() {
    const navigate = useNavigate();
    // const setUser = useUserStore((state) => state.setUser);

    useEffect(() => {
        const code = new URL(window.location.href).searchParams.get("code");
        const state = new URL(window.location.href).searchParams.get("state");

        console.log(code);

        if (code) {
            axios
                .get(`${import.meta.env.VITE_API_BASE_URL}/login/oauth/naver?code=${code}&state=${state}`, {
                    withCredentials: true,
                })
                .then((res) => {
                    console.log(res);

                    const { status, data } = res.data;

                    if (status === "USER_NEED_SIGNUP") {
                        navigate("/signup");
                    } else {
                        // setUser({ id: data.id, nickname: data.nickname, type: data.type });
                        navigate("/");
                    }
                })
                .catch((err) => {
                    console.error("네이버 로그인 실패", err);
                });
        }
    }, []);

    return <div>로그인 처리 중입니다...</div>;
}
