import CommentItem from "./CommentItem";
import { CommentType } from "@/types/comment";

interface CommentListProps {
    comments: CommentType[];
    openReplies: Record<number, boolean>;
    onReplyClick: (commentId: number, nickname: string) => void;
    onToggleReplies: (commentId: number) => void;
    accompanyId: number;
}

export default function CommentList({
    comments,
    openReplies,
    onReplyClick,
    onToggleReplies,
    accompanyId,
}: CommentListProps) {
    return (
        <div>
            {comments.map(comment => (
                <CommentItem
                    key={comment.id}
                    comment={comment}
                    onReplyClick={onReplyClick}
                    onToggleReplies={onToggleReplies}
                    areRepliesOpen={!!openReplies[comment.id]}
                    accompanyId={accompanyId}
                />
            ))}
        </div>
    );
}
