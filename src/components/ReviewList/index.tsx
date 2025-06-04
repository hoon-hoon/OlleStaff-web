import { useState, useMemo } from "react";
import { OwnerTabTypes, TAB_LABELS } from "@/constants/tabs";
import TabSelector from "@/components/TabSelector";
import ReviewListItem from "./ReviewListItem";
import { ReviewListItemProps } from "@/types/reviews";
import { Text } from "@/styles/Text";
import { Wrapper } from "@/styles/Wrapper";
import { useLocation } from "react-router-dom";

type ReviewTab = OwnerTabTypes["REVIEW_MANAGE"]; // "전체" | "완료됨"

interface ReviewListProps {
    data: ReviewListItemProps;
}

export default function ReviewList({ data }: ReviewListProps) {
    const [sort, setSort] = useState<ReviewTab>("전체");

    const filteredReviews = useMemo(() => {
        if (sort === "전체") return data.allReviewInfoDTOS;
        return data.allReviewInfoDTOS.filter(item => item.reviewComment); // "완료됨" = 댓글이 달린 리뷰
    }, [sort, data]);

    const [openedReviewId, setOpenedReviewId] = useState<number | null>(null);

    const location = useLocation();
    const isOwnerRoot = location.pathname === "/owner" || "/";
    return (
        <>
            <div>
                {!isOwnerRoot && (
                    <TabSelector
                        variant="bold"
                        labels={[...TAB_LABELS.OWNER.REVIEW_MANAGE]}
                        selected={sort}
                        onChange={value => setSort(value as ReviewTab)}
                    />
                )}

                <Wrapper.FlexBox direction="column" gap="20px">
                    {filteredReviews.length > 0 ? (
                        filteredReviews.map(item => (
                            <ReviewListItem
                                key={item.reviewId}
                                data={item}
                                openedReviewId={openedReviewId}
                                setOpenedReviewId={setOpenedReviewId}
                            />
                        ))
                    ) : (
                        <Wrapper.FlexBox gap="12px" justifyContent="center">
                            <img src="/icons/oops.svg" alt="머쓱한 이모지" />
                            <Text.Body1_1>작성된 후기가 없어요.</Text.Body1_1>
                        </Wrapper.FlexBox>
                    )}
                </Wrapper.FlexBox>
            </div>
        </>
    );
}
