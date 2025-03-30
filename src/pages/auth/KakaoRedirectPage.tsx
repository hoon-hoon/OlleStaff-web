import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import useUserStore from "@/store/user";

export default function KakaoRedirectPage() {
    // const navigate = useNavigate();
    // const setUser = useUserStore((state) => state.setUser);

    useEffect(() => {
        const code = new URL(window.location.href).searchParams.get("code");
        console.log(code);

        // if (code) {
        //   axios
        //     .post(`${import.meta.env.VITE_API_BASE_URL}/login/kakao`, { code })
        //     .then((res) => {
        //       const { status, data } = res.data;
        //
        //       if (status === "USER_NEED_SIGNUP") {
        //         navigate("/signup");
        //       }
        //       // 회원 상태 저장 여기서
        //       // setUser({
        //       //   id: data.userId,
        //       //   nickname: data.nickname,
        //       //   type: data.type,
        //       // });
        //
        //     })
        //     .catch((err) => {
        //       console.error("로그인 실패", err);
        //     });
        // }
    }, []);

    return <div>로그인 처리 중입니다...</div>;
}
