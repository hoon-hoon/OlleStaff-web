import Header from "@/components/Header";
import PageWrapper from "@/components/PageWrapper";
import TabSelector from "@/components/TabSelector";
import { Text } from "@/styles/Text";
import { Wrapper } from "@/styles/Wrapper";
import { useState } from "react";
import { OwnerTabTypes, TAB_LABELS } from "@/constants/tabs";

type ReviewTab = OwnerTabTypes["REVIEW_MANAGE"]; // "전체" | "완료됨"

export default function Review() {
    const [sort, setSort] = useState<ReviewTab>("전체");

    return (
        <>
            <Header showBackButton title="후기관리" />
            <PageWrapper hasHeader>
                <Wrapper.FlexBox direction="column" gap="10px" padding="30px 15px">
                    <Text.Body2_1>총 123개의 후기</Text.Body2_1>
                    <Text.Body1_1>홍길동님의 평균 평점</Text.Body1_1>

                    <Wrapper.FlexBox gap="6px" alignItems="center">
                        <img src="/FullStar.svg" alt="별" />
                        <Text.Title2_1>4.5</Text.Title2_1>
                    </Wrapper.FlexBox>

                    <TabSelector
                        variant="bold"
                        labels={[...TAB_LABELS.OWNER.REVIEW_MANAGE]} // readonly → mutable
                        selected={sort}
                        onChange={value => setSort(value as ReviewTab)}
                    />
                </Wrapper.FlexBox>
            </PageWrapper>
        </>
    );
}
