import Header from "@/components/Header";
import PageWrapper from "@/components/PageWrapper";
import { Text } from "@/styles/Text";
import { Wrapper } from "@/styles/Wrapper";
import ReviewListPage from "./ReviewListPage";

export default function Review() {
    return (
        <>
            <Header showBackButton title="후기관리" />
            <PageWrapper hasHeader>
                <Wrapper.FlexBox direction="column" gap="10px" padding="30px">
                    <Text.Body2_1>총 123개의 후기</Text.Body2_1>
                    <Text.Body1_1>홍길동님의 평균 평점</Text.Body1_1>

                    <Wrapper.FlexBox gap="6px" alignItems="center">
                        <img src="/icons/fullStar.svg" alt="별" />
                        <Text.Title2_1>4.5</Text.Title2_1>
                    </Wrapper.FlexBox>

                    <ReviewListPage />
                </Wrapper.FlexBox>
            </PageWrapper>
        </>
    );
}
