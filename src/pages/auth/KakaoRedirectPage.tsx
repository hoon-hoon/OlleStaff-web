import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function KakaoRedirectPage() {
    const navigate = useNavigate();

    useEffect(() => {
        const code = new URL(window.location.href).searchParams.get("code");
        const alreadySent = sessionStorage.getItem("kakao_login_sent");

        if (code && !alreadySent) {
            sessionStorage.setItem("kakao_login_sent", "true");

            axios
                .post(`${import.meta.env.VITE_API_BASE_URL}/login/kakao`, { code }, { withCredentials: true })
                .then(res => {
                    const { status } = res.data;
                    if (status === "USER_NEED_SIGNUP") {
                        navigate("/signup");
                    } else {
                        navigate("/");
                    }
                })
                .catch(err => {
                    console.error("로그인 실패", err);
                });
        }
    }, []);

    return <div>로그인 처리 중입니다...</div>;
}
