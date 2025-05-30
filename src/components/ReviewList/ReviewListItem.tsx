import styled from "@emotion/styled";

import { Text } from "@/styles/Text";
import theme from "@/styles/theme";
import { Wrapper } from "@/styles/Wrapper";
import { ReviewInfo } from "@/types/reviews";
import { useState } from "react";
import { timeAgo } from "@/utils/date";
interface ReviewListItemProps {
    review: ReviewInfo;
}

export default function ReviewListItem({ review }: ReviewListItemProps) {
    const [isReviewExpanded, setIsReviewExpanded] = useState(false);
    const [isCommentExpanded, setIsCommentExpanded] = useState(false);

    const toggleExpand = (key: "review" | "comment") => {
        if (key === "review") setIsReviewExpanded(prev => !prev);
        if (key === "comment") setIsCommentExpanded(prev => !prev);
    };

    return (
        <Card>
            <Wrapper.FlexBox justifyContent="space-between" alignItems="center">
                <Text.Body1_1>{review.title}</Text.Body1_1>
                <img src="/icons/more.svg" alt="더보기" />
            </Wrapper.FlexBox>

            <ContentWrapper>
                <UserWrapper>
                    <Text.Body2_1>{review.nickName}님</Text.Body2_1>
                    <img src="/icons/fullStar.svg" alt="별" />
                    <Text.Body2_1>{review.rating}</Text.Body2_1>
                </UserWrapper>

                <ImageList>
                    {review.images.length > 0 && (
                        <>
                            {review.images.map((imgUrl, idx) => (
                                <img key={idx} src={imgUrl} alt={`리뷰이미지${idx + 1}`} />
                            ))}
                        </>
                    )}
                </ImageList>

                <Text.Body2>
                    {review.review.length > 70 && !isReviewExpanded ? (
                        <Text.Body2_1>
                            {review.review.slice(0, 70)} ...{" "}
                            <Text.Body2_1 color="Gray3" onClick={() => toggleExpand("review")}>
                                더보기
                            </Text.Body2_1>
                        </Text.Body2_1>
                    ) : (
                        <Text.Body2_1>{review.review}</Text.Body2_1>
                    )}
                </Text.Body2>

                <Wrapper.FlexBox justifyContent="space-between">
                    <Text.Body3_1 color="Gray3">
                        {review.disclosure
                            ? `게스트하우스에게만 공개 | ${timeAgo(review.reviewDate)}`
                            : `${timeAgo(review.reviewDate)}`}
                    </Text.Body3_1>
                    {!review.reviewComment && <img src="/icons/comment_gray.svg" alt="댓글 버튼" />}
                </Wrapper.FlexBox>
            </ContentWrapper>

            {review.reviewComment && (
                <CommentWrapper>
                    <Wrapper.FlexBox justifyContent="space-between" alignItems="center">
                        <Text.Body1_1>{review.hostNickName}</Text.Body1_1> <img src="/icons/more.svg" alt="더보기" />
                    </Wrapper.FlexBox>
                    <Text.Body2>
                        {review.reviewComment.length > 70 && !isCommentExpanded ? (
                            <Text.Body2_1>
                                {review.reviewComment.slice(0, 70)} ...{" "}
                                <Text.Body2_1 color="Gray3" onClick={() => toggleExpand("comment")}>
                                    더보기
                                </Text.Body2_1>
                            </Text.Body2_1>
                        ) : (
                            <Text.Body2_1>{review.reviewComment}</Text.Body2_1>
                        )}
                    </Text.Body2>
                    <Wrapper.FlexBox justifyContent="flex-end">
                        <Text.Body3 color="Gray4">{timeAgo(review.reviewCommentDate)}</Text.Body3>
                    </Wrapper.FlexBox>
                </CommentWrapper>
            )}
        </Card>
    );
}

const Card = styled.div`
    border: 1px solid ${theme.color.Gray1};
    border-radius: 12px;
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    background: ${theme.color.White};
`;

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    border-top: 1px solid #e4e4e4;
    padding-top: 10px;
`;

const CommentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 12px;
    padding: 12px;
    background: #f8f8f8;
    border-radius: 8px;
    gap: 5px;
`;

const UserWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 6px;
`;

const ImageList = styled.div`
    display: flex;
    gap: 6px;
    img {
        width: 80px;
        height: 80px;
        border-radius: 8px;
        object-fit: cover;
    }
`;
