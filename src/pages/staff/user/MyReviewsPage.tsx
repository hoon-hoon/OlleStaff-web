import Header from "@/components/Header";
import PageWrapper from "@/components/PageWrapper";
import { Wrapper } from "@/styles/Wrapper";
import { Text } from "@/styles/Text";
import { Button } from "@/components/Button";
import ReviewList from "@/components/ReviewList";
import Oops from "@/components/Oops";
import { useMyReviewList } from "@/hooks/staff/useMyReviewList";
import { StaffTabTypes, TAB_LABELS } from "@/constants/tabs";
import { useState } from "react";
import TabSelector from "@/components/TabSelector";

export default function MyReviewsPage() {
    const [filter, setFilter] = useState<StaffTabTypes["MY_REVIEW"]>("1주일");
    const { data, isLoading } = useMyReviewList(filter);

    return (
        <>
            <Header showBackButton title="내가 작성한 후기" />
            <PageWrapper hasHeader>
                <Wrapper.FlexBox
                    direction="column"
                    padding="16px 20px"
                    border="1px solid #E4E4E4"
                    borderRadius="8px"
                    gap="20px"
                    bgColor="white"
                    margin="0px 0px 16px 0px"
                >
                    <Wrapper.FlexBox direction="column">
                        <Text.Body2_1 color="Gray4">2025.01.28 -2025.02.26</Text.Body2_1>
                        <Text.Title2_1>
                            결 게스트하우스의
                            <br />
                            스탭 일은 어떠셨나요?
                        </Text.Title2_1>
                    </Wrapper.FlexBox>
                    <Button label="작성 버튼" isActive width="large" onClick={() => {}}>
                        글 등록하기
                    </Button>
                </Wrapper.FlexBox>
                <TabSelector
                    labels={[...TAB_LABELS.STAFF.MY_REVIEW]}
                    selected={filter}
                    onChange={label => setFilter(label as StaffTabTypes["MY_REVIEW"])}
                    variant="bold"
                />

                <Wrapper.FlexBox margin="20px 0">
                    {isLoading ? (
                        <Text.Body1_1>로딩 중...</Text.Body1_1>
                    ) : data?.allReviewInfoDTOS?.length > 0 ? (
                        <ReviewList data={data} />
                    ) : (
                        <Oops message="작성된 나의 후기가 없어요." description="후기가 올라올 때까지 기다려주세요!" />
                    )}
                </Wrapper.FlexBox>
            </PageWrapper>
        </>
    );
}
