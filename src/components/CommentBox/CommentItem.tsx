import styled from "@emotion/styled";
import { CommentType } from "@/types/comment";
import { timeAgo } from "@/utils/date";
import { Text } from "@/styles/Text";

interface CommentItemProps {
    comment: CommentType;
    onReplyClick?: (commentId: number, nickname: string) => void;
    onToggleReplies?: (commentId: number) => void;
    isReply?: boolean;
    areRepliesOpen?: boolean;
}

export default function CommentItem({
    comment,
    onReplyClick,
    onToggleReplies,
    isReply,
    areRepliesOpen,
}: CommentItemProps) {
    const { userNickname, userImage, createdAt, content, id, replyCount } = comment;

    return (
        <>
            <Wrapper isReply={isReply}>
                <ProfileImage src={userImage} alt="profile" />
                <ContentBox>
                    <Text.Body2_1 style={{ marginBottom: "2px" }}>{userNickname}</Text.Body2_1>
                    <Text.Body2 style={{ whiteSpace: "pre-wrap" }}>{content}</Text.Body2>
                    <Meta>
                        <Text.Body3 color="Gray4">{timeAgo(createdAt)}</Text.Body3>
                        {!isReply && (
                            <ReplyButton onClick={() => onReplyClick?.(id, userNickname)}>
                                <Text.Body3 color="Gray4">답글 달기</Text.Body3>
                            </ReplyButton>
                        )}
                    </Meta>
                    {!isReply && replyCount > 0 && (
                        <ReplyToggleButton onClick={() => onToggleReplies?.(id)}>
                            <Icon src={areRepliesOpen ? "/icons/upArrow.svg" : "/icons/downArrow.svg"}></Icon>
                            <Text.Body3 color="Gray4" style={{ marginTop: "3px" }}>
                                {areRepliesOpen ? "댓글 숨기기" : `${replyCount}개의 댓글 보기`}
                            </Text.Body3>
                        </ReplyToggleButton>
                    )}
                </ContentBox>
            </Wrapper>
        </>
    );
}

const Wrapper = styled.div<{ isReply?: boolean }>`
    display: flex;
    gap: 12px;
    padding-left: ${({ isReply }) => (isReply ? "42px" : "0")};
    margin-top: 20px;
`;

const ProfileImage = styled.img`
    width: 30px;
    height: 30px;
    border-radius: 4px;
    object-fit: cover;
`;

const ContentBox = styled.div`
    display: flex;
    flex-direction: column;
`;

const Meta = styled.div`
    display: flex;
    gap: 12px;
    align-items: center;
    margin-top: 4px;
`;

const ReplyButton = styled.button`
    padding: 0;
    background: none;
    border: none;
    cursor: pointer;
    align-self: flex-start;
`;

const Icon = styled.img`
    width: 12px;
    height: 12px;
`;

const ReplyToggleButton = styled.button`
    display: flex;
    padding: 0;
    background: none;
    border: none;
    cursor: pointer;
    margin-top: 6px;
    align-items: center;
    gap: 4px;
`;
