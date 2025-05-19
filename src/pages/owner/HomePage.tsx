import SectionTitle from "@/components/SectionTitle";
import { fetchMinimumUserInfo } from "@/hooks/user/useFetchMinumumUserInfo";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PartnerRecruitmentCard from "./components/PartnerRecruitmentCard";
import { Wrapper } from "@/styles/Wrapper";

export default function HomePage() {
    const navigate = useNavigate();

    // const handleDeleteVerify = async () => {
    //     // https://dev.ollestaff.com/users/guesthouse/business-registration
    //     const res = await axios.delete(`${import.meta.env.VITE_API_BASE_URL}/users/guesthouse/business-registration`, {
    //         withCredentials: true,
    //     });
    //     console.log(res);
    // };

    useEffect(() => {
        const checkApplicationStatus = async () => {
            try {
                const user = await fetchMinimumUserInfo();

                if (!user || !user.nickname) {
                    navigate("/"); // 로그인 안 된 경우
                } else if (!user.userType) {
                    navigate("/type-select");
                } else if (!user.onboarded) {
                    navigate("/business-verification");
                }
            } catch (err) {
                console.error("사용자 정보 확인 실패", err);
                navigate("/"); // catch된 경우도 안전하게 리디렉션
            }
        };

        checkApplicationStatus();
    }, []);

    return (
        <>
            <Wrapper.FlexBox direction="column" gap="32px">
                <PartnerRecruitmentCard />
                <SectionTitle title="진행 중인 나의 공고" link="/owner/recruit" />
                <SectionTitle title="작성된 후기" link="/owner/userinfo/review" />
            </Wrapper.FlexBox>
            {/* <button onClick={handleDeleteVerify}>삭제</button> */}
        </>
    );
}
