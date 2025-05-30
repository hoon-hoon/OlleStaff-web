import { useState, useMemo } from "react";
import { OwnerTabTypes, TAB_LABELS } from "@/constants/tabs";
import TabSelector from "@/components/TabSelector";
import ReviewListItem from "./ReviewListItem";
import { ReviewListItemProps } from "@/types/reviews";
import { Text } from "@/styles/Text";

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

    return (
        <>
            <TabSelector
                variant="bold"
                labels={[...TAB_LABELS.OWNER.REVIEW_MANAGE]}
                selected={sort}
                onChange={value => setSort(value as ReviewTab)}
            />

            {filteredReviews.length > 0 ? (
                filteredReviews.map(item => <ReviewListItem key={item.reviewId} review={item} />)
            ) : (
                <Text.Body2_1>표시할 리뷰가 없습니다.</Text.Body2_1>
            )}
        </>
    );
}
