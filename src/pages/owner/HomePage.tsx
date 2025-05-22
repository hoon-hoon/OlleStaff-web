import SectionTitle from "@/components/SectionTitle";
import { fetchMinimumUserInfo } from "@/hooks/user/useFetchMinumumUserInfo";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PartnerRecruitmentCard from "./components/PartnerRecruitmentCard";
import { Wrapper } from "@/styles/Wrapper";
import { GuesthouseList } from "@/components/GuesthouseList";
import { GuesthouseListItemProps } from "@/types/guesthouse";

const mockData: GuesthouseListItemProps[] = [
    {
        id: 1,
        title: "결 게스트하우스 스탭모집",
        imageUrl: "/images/guesthouse3.png",
        tags: ["활기찬", "힐링", "자연", "바다"],
        description: "바다 근처 힙한 게스트 하우스",
        location: "함덕해수욕장",
        personnel: "남자 2명 모집",
    },
    {
        id: 2,
        title: "오션뷰 게스트하우스",
        imageUrl: "/images/guesthouse3.png",
        tags: ["뷰맛집", "바다", "프라이빗"],
        description: "바다가 보이는 오션뷰 숙소",
        location: "협재",
        personnel: "여자 1명 모집",
        closed: true,
    },
    {
        id: 3,
        title: "소소한 쉼터",
        imageUrl: "/images/guesthouse3.png",
        tags: ["힐링", "자연"],
        description: "마음이 편안해지는 조용한 숙소",
        location: "성산읍",
        personnel: "남자 2명 모집",
    },
    {
        id: 4,
        title: "오션뷰 게스트하우스",
        imageUrl: "/images/guesthouse3.png",
        tags: ["뷰맛집", "바다", "프라이빗"],
        description: "바다가 보이는 오션뷰 숙소",
        location: "협재",
        personnel: "여자 1명 모집",
        closed: true,
    },
    {
        id: 5,
        title: "소소한 쉼터",
        imageUrl: "/images/guesthouse3.png",
        tags: ["힐링", "자연"],
        description: "마음이 편안해지는 조용한 숙소",
        location: "성산읍",
        personnel: "남자 2명 모집",
    },
    {
        id: 6,
        title: "오션뷰 게스트하우스",
        imageUrl: "/images/guesthouse3.png",
        tags: ["뷰맛집", "바다", "프라이빗"],
        description: "바다가 보이는 오션뷰 숙소",
        location: "협재",
        personnel: "여자 1명 모집",
        closed: true,
    },
    {
        id: 7,
        title: "소소한 쉼터",
        imageUrl: "/images/guesthouse3.png",
        tags: ["힐링", "자연"],
        description: "마음이 편안해지는 조용한 숙소",
        location: "성산읍",
        personnel: "남자 2명 모집",
    },
    {
        id: 8,
        title: "오션뷰 게스트하우스",
        imageUrl: "/images/guesthouse3.png",
        tags: ["뷰맛집", "바다", "프라이빗"],
        description: "바다가 보이는 오션뷰 숙소",
        location: "협재",
        personnel: "여자 1명 모집",
        closed: true,
    },
];

export default function HomePage() {
    const navigate = useNavigate();

    const [data, setData] = useState<GuesthouseListItemProps[]>([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                setData(mockData);
            } catch (error) {
                console.error("카테고리 불러오기 실패", error);
                setData([]);
            }
        };

        fetchData();
    }, []);

    // 사업자인증 지워보기위한 함수
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
                <SectionTitle title="진행 중인 나의 공고" link="/owner/recruitments-ongoing" />
                <GuesthouseList data={data.filter(item => !item.closed).slice(0, 2)} />

                <SectionTitle title="작성된 후기" link="/owner/userinfo/review" />
            </Wrapper.FlexBox>
            {/* <button onClick={handleDeleteVerify}>삭제</button> */}
        </>
    );
}
