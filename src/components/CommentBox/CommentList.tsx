import CommentItem from "./CommentItem";
import { CommentType, ReplyType } from "@/types/comment";
import CommentWithReply from "./CommentWithReply";

interface CommentListProps {
    comments: CommentType[];
    openReplies: Record<number, boolean>;
    loadedReplies: Record<number, ReplyType[]>;
    onReplyClick: (commentId: number, nickname: string) => void;
    onToggleReplies: (commentId: number) => void;
    accompanyId: number;
    setLoadedReplies: (updater: (prev: Record<number, ReplyType[]>) => Record<number, ReplyType[]>) => void;
}

export default function CommentList({
    comments,
    openReplies,
    loadedReplies,
    onReplyClick,
    onToggleReplies,
    accompanyId,
    setLoadedReplies,
}: CommentListProps) {
    return (
        <div>
            {comments.map(comment => {
                const isOpen = openReplies[comment.id];

                if (isOpen) {
                    return (
                        <CommentWithReply
                            key={comment.id}
                            comment={comment}
                            accompanyId={accompanyId}
                            onReplyClick={onReplyClick}
                            onToggleReplies={onToggleReplies}
                            setLoadedReplies={setLoadedReplies}
                            loadedReplies={loadedReplies}
                        />
                    );
                }

                return (
                    <CommentItem
                        key={comment.id}
                        comment={comment}
                        onReplyClick={onReplyClick}
                        onToggleReplies={onToggleReplies}
                        areRepliesOpen={false}
                        accompanyId={accompanyId}
                    />
                );
            })}
        </div>
    );
}
