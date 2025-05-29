import { useState } from "react";
import { OwnerTabTypes, TAB_LABELS } from "@/constants/tabs";
import TabSelector from "@/components/TabSelector";
import ReviewListItem from "./ReviewListItem";

type ReviewTab = OwnerTabTypes["REVIEW_MANAGE"]; // "전체" | "완료됨"
export default function ReviewList() {
    const [sort, setSort] = useState<ReviewTab>("전체");
    return (
        <>
            <TabSelector
                variant="bold"
                labels={[...TAB_LABELS.OWNER.REVIEW_MANAGE]} // readonly → mutable
                selected={sort}
                onChange={value => setSort(value as ReviewTab)}
            />

            <ReviewListItem />
        </>
    );
}
