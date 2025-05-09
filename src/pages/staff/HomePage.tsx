import { fetchMinimumUserInfo } from "@/hooks/useFetchMinumumUserInfo";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
    const navigate = useNavigate();
    useEffect(() => {
        const checkApplicationStatus = async () => {
            try {
                const skipped = sessionStorage.getItem("applicationSkipped");

                const user = await fetchMinimumUserInfo();
                if (!user.onboarded && !skipped) {
                    navigate("/staff/application/write");
                }
            } catch (err) {
                console.error("사용자 정보 확인 실패", err);
            }
        };

        checkApplicationStatus();
    }, []);

    return (
        <div>
            <h1>Staff Home</h1>
        </div>
    );
}
