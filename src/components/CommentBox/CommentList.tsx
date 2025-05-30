import CommentItem from "./CommentItem";
import { CommentType, ReplyType } from "@/types/comment";

interface CommentListProps {
    comments: CommentType[];
    openReplies: Record<number, boolean>;
    loadedReplies: Record<number, ReplyType[]>;
    onReplyClick: (commentId: number, nickname: string) => void;
    onToggleReplies: (commentId: number) => void;
    accompanyId: number;
}

export default function CommentList({
    comments,
    openReplies,
    loadedReplies,
    onReplyClick,
    onToggleReplies,
    accompanyId,
}: CommentListProps) {
    return (
        <div>
            {comments.map(comment => (
                <div key={comment.id}>
                    <CommentItem
                        comment={comment}
                        onReplyClick={onReplyClick}
                        onToggleReplies={onToggleReplies}
                        areRepliesOpen={openReplies[comment.id]}
                        accompanyId={accompanyId}
                    />

                    {openReplies[comment.id] &&
                        loadedReplies[comment.id]?.map(reply => (
                            <CommentItem
                                key={reply.id}
                                comment={reply as CommentType}
                                isReply
                                accompanyId={accompanyId}
                            />
                        ))}
                </div>
            ))}
        </div>
    );
}
