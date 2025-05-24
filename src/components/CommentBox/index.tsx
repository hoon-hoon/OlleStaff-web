import { useCommentState } from "./useCommentState";
import CommentList from "./CommentList";
import { mockComments } from "./mock";

export const CommentBox = () => {
    const { openReplies, loadedReplies, toggleReplies, startReplyTo } = useCommentState();

    return (
        <>
            <CommentList
                comments={mockComments}
                openReplies={openReplies}
                loadedReplies={loadedReplies}
                onToggleReplies={toggleReplies}
                onReplyClick={startReplyTo}
            />
        </>
    );
};
