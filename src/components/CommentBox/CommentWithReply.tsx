import { CommentType } from "@/types/comment";
import CommentItem from "./CommentItem";
import { useReplyList } from "./useCommentQuery";

interface CommentWithRepliesProps {
    comment: CommentType;
    accompanyId: number;
    onReplyClick: (commentId: number, nickname: string) => void;
    onToggleReplies: (commentId: number) => void;
}

export default function CommentWithReply({
    comment,
    accompanyId,
    onReplyClick,
    onToggleReplies,
}: CommentWithRepliesProps) {
    const { data: replies = [] } = useReplyList(accompanyId, comment.id, true);

    return (
        <>
            <CommentItem
                comment={comment}
                onReplyClick={onReplyClick}
                onToggleReplies={onToggleReplies}
                areRepliesOpen
                accompanyId={accompanyId}
            />
            {replies.map(reply => (
                <CommentItem
                    key={reply.id}
                    comment={reply as CommentType}
                    isReply
                    accompanyId={accompanyId}
                    parentCommentId={comment.id}
                />
            ))}
        </>
    );
}
