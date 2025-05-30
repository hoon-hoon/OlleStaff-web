import styled from "@emotion/styled";
import { useCommentState } from "./useCommentState";
import CommentList from "./CommentList";
import CommentInput from "./CommentInput";
import ReplyingNotice from "./ReplyingNotice";
import { useCommentList } from "./useCommentList";
import { Text } from "@/styles/Text";

export const CommentBox = ({ accompanyId, commentCount }: { accompanyId: number; commentCount: number }) => {
    const { openReplies, loadedReplies, toggleReplies, startReplyTo, activeReply, cancelReply } = useCommentState();
    const { data: comments = [], isLoading } = useCommentList(accompanyId);

    return (
        <>
            <Text.Body1_1>댓글 {commentCount}</Text.Body1_1>
            <ScrollableArea>
                {isLoading ? (
                    // TODO: 추후 스켈레톤 적용
                    <div>댓글 불러오는 중</div>
                ) : (
                    <CommentList
                        comments={comments}
                        openReplies={openReplies}
                        loadedReplies={loadedReplies}
                        onToggleReplies={toggleReplies}
                        onReplyClick={startReplyTo}
                        accompanyId={accompanyId}
                    />
                )}
            </ScrollableArea>
            <FixedInputArea>
                {activeReply && <ReplyingNotice nickname={activeReply.nickname} onCancel={cancelReply} />}
                <InputWrapper>
                    <CommentInput accompanyId={accompanyId} />
                </InputWrapper>
            </FixedInputArea>
        </>
    );
};

const ScrollableArea = styled.div`
    padding-bottom: 100px;
    overflow-y: auto;
`;

const FixedInputArea = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 999;
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

const InputWrapper = styled.div`
    padding: 4px 16px 12px 16px;
    background-color: ${({ theme }) => theme.color.White};
`;
