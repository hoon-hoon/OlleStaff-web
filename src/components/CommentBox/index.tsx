import styled from "@emotion/styled";
import { useCommentState } from "./useCommentState";
import CommentList from "./CommentList";
import { mockComments } from "./mock";
import CommentInput from "./CommentInput";

export const CommentBox = () => {
    const { openReplies, loadedReplies, toggleReplies, startReplyTo, activeReply, cancelReply } = useCommentState();

    const handleSubmit = (text: string) => {
        if (activeReply) {
            console.log(`답글 → ${activeReply.nickname}:`, text);
            cancelReply();
        } else {
            console.log("댓글:", text);
        }
    };

    return (
        <>
            <ScrollableArea>
                <CommentList
                    comments={mockComments}
                    openReplies={openReplies}
                    loadedReplies={loadedReplies}
                    onToggleReplies={toggleReplies}
                    onReplyClick={startReplyTo}
                />
            </ScrollableArea>

            <FixedInputArea>
                <CommentInput onSubmit={handleSubmit} />
            </FixedInputArea>
        </>
    );
};

const ScrollableArea = styled.div`
    padding-bottom: 30px;
    overflow-y: auto;
`;

const FixedInputArea = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 4px 16px 12px 16px;
    background-color: ${({ theme }) => theme.color.White};
    z-index: 999;
`;
