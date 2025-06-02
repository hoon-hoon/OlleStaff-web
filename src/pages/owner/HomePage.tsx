import SectionTitle from "@/components/SectionTitle";
import { fetchMinimumUserInfo } from "@/hooks/user/useFetchMinumumUserInfo";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PartnerRecruitmentCard from "./components/PartnerRecruitmentCard";
import { Wrapper } from "@/styles/Wrapper";
import { GuesthouseList } from "@/components/GuesthouseList";
import { GuesthouseListItemProps } from "@/types/guesthouse";
import ReviewList from "@/components/ReviewList";
import { ReviewListItemProps } from "@/types/reviews";

const recruitMockData: GuesthouseListItemProps[] = [
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
];

const reviewMockData: ReviewListItemProps[] = [
    {
        hasNext: false,
        countReview: 1,
        averageRating: 4.5,
        allReviewInfoDTOS: [
            {
                reviewId: 1,
                rating: 4.8,
                title: "올레 게스트하우스",
                nickName: "테스트유저111",
                images: [],
                review: "깔끔하고 친절했어요!",
                disclosure: true,
                reviewComment: "또 오세요 :)",
                reviewDate: 1747900000,
                reviewCommentDate: 1747900000,
                hostNickName: "호스트",
            },
        ],
    },
];

export default function HomePage() {
    const navigate = useNavigate();
    const [recruitData, setRecruitData] = useState<GuesthouseListItemProps[]>([]);
    const [reviewData, setReviewData] = useState<ReviewListItemProps[]>([]);

    useEffect(() => {
        setRecruitData(recruitMockData);
        setReviewData(reviewMockData);
    }, []);

    useEffect(() => {
        const checkApplicationStatus = async () => {
            try {
                const user = await fetchMinimumUserInfo();

                if (!user || !user.nickname) {
                    navigate("/");
                } else if (!user.userType) {
                    navigate("/type-select");
                } else if (!user.onboarded) {
                    navigate("/business-verification");
                }
            } catch (err) {
                console.error("사용자 정보 확인 실패", err);
                navigate("/");
            }
        };

        checkApplicationStatus();
    }, []);

    return (
        <Wrapper.FlexBox direction="column" gap="32px">
            <PartnerRecruitmentCard />

            <Wrapper.FlexBox direction="column" gap="16px">
                {recruitData.length > 0 ? (
                    <>
                        <SectionTitle title="진행 중인 나의 공고" link="/owner/recruitments-ongoing" />
                        <GuesthouseList data={recruitData.filter(item => !item.closed).slice(0, 2)} />
                    </>
                ) : (
                    <>아직 진행 중인 공고가 없어요.</>
                )}
            </Wrapper.FlexBox>

            <Wrapper.FlexBox direction="column" gap="16px">
                {reviewData.length > 0 ? (
                    <>
                        <SectionTitle title="작성된 후기" link="/owner/userinfo/reviews" />
                        <ReviewList
                            data={{
                                ...reviewData[0],
                                allReviewInfoDTOS: reviewData[0].allReviewInfoDTOS.slice(0, 1),
                            }}
                        />
                    </>
                ) : (
                    <>아직 작성된 후기가 없어요.</>
                )}
            </Wrapper.FlexBox>
        </Wrapper.FlexBox>
    );
}
