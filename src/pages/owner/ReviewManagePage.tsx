import Header from "@/components/Header";
import Oops from "@/components/Oops";
import PageWrapper from "@/components/PageWrapper";
import ReviewList from "@/components/ReviewList";
import { fetchMinimumUserInfo } from "@/hooks/user/useFetchMinumumUserInfo";
import { Text } from "@/styles/Text";
import { Wrapper } from "@/styles/Wrapper";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { mockdata_reviews } from "./mock";

export default function ReviewManagePage() {
    const navigate = useNavigate();
    const [nickname, setNickname] = useState("");

    const { countReview, averageRating, allReviewInfoDTOS } = mockdata_reviews;

    const hasReview = countReview > 0 && allReviewInfoDTOS.length > 0;
    useEffect(() => {
        const getNickname = async () => {
            try {
                const { nickname } = await fetchMinimumUserInfo();
                if (!nickname) {
                    navigate("/");
                } else {
                    setNickname(nickname);
                }
            } catch (err) {
                console.error("닉네임 확인 실패", err);
                navigate("/");
            }
        };

        getNickname();
    }, []);
    return (
        <>
            <Header showBackButton title="후기 관리" />
            <PageWrapper hasHeader>
                <Wrapper.FlexBox direction="column" gap="20px" padding="30px">
                    <Wrapper.FlexBox direction="column" gap="8px">
                        <Text.Body2_1>총 {countReview}개의 후기</Text.Body2_1>
                        <Text.Body1_1>{nickname}님의 평균 평점</Text.Body1_1>
                        <Wrapper.FlexBox gap="6px" alignItems="center">
                            <img src="/icons/fullStar.svg" alt="별" />
                            <Text.Title2_2>
                                {averageRating} <Text.Title2_1>점</Text.Title2_1>
                            </Text.Title2_2>
                        </Wrapper.FlexBox>
                    </Wrapper.FlexBox>

                    {hasReview ? (
                        <ReviewList data={mockdata_reviews} />
                    ) : (
                        <Wrapper.FlexBox gap="12px" alignItems="center" direction="column" padding="50% 0">
                            <Oops
                                message="작성된 나의 후기가 없어요."
                                description="후기가 올라올 때까지 기다려주세요!"
                            />
                        </Wrapper.FlexBox>
                    )}
                </Wrapper.FlexBox>
            </PageWrapper>
        </>
    );
}
