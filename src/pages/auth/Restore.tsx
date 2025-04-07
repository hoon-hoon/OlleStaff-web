import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function RestorePage() {
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const isLocal = location.hostname === "localhost";
                const res = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/users/me/minimum`, {
                    withCredentials: !isLocal,

                    headers: isLocal
                        ? {
                              Authorization: `Bearer ${import.meta.env.VITE_DEV_ACCESS_TOKEN}`,
                          }
                        : {},
                });

                const { type } = res.data.data;

                if (type === "OWNER") {
                    navigate("/owner");
                } else if (type === "STAFF") {
                    navigate("/staff");
                } else {
                    navigate("/signup");
                }
            } catch (err) {
                console.error("로그인 상태 확인 실패", err);
                navigate("/login");
            }
        };

        fetchUser();
    }, [navigate]);

    return <div>로그인 상태 확인 중</div>;
}
