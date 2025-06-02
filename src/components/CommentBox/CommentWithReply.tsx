import { useEffect } from "react";
import { CommentType, ReplyType } from "@/types/comment";
import CommentItem from "./CommentItem";
import { useReplyList } from "./useReplyList";

interface CommentWithRepliesProps {
    comment: CommentType;
    accompanyId: number;
    onReplyClick: (commentId: number, nickname: string) => void;
    onToggleReplies: (commentId: number) => void;
    setLoadedReplies: (updater: (prev: Record<number, ReplyType[]>) => Record<number, ReplyType[]>) => void;
    loadedReplies: Record<number, ReplyType[]>;
}

export default function CommentWithReply({
    comment,
    accompanyId,
    onReplyClick,
    onToggleReplies,
    setLoadedReplies,
    loadedReplies,
}: CommentWithRepliesProps) {
    const { data: replies = [], isSuccess } = useReplyList(accompanyId, comment.id, true); // ✅ 무조건 호출

    useEffect(() => {
        if (isSuccess && !loadedReplies[comment.id]) {
            setLoadedReplies(prev => ({
                ...prev,
                [comment.id]: replies,
            }));
        }
    }, [isSuccess]);

    return (
        <>
            <CommentItem
                comment={comment}
                onReplyClick={onReplyClick}
                onToggleReplies={onToggleReplies}
                areRepliesOpen
                accompanyId={accompanyId}
            />
            {loadedReplies[comment.id]?.map(reply => (
                <CommentItem
                    key={reply.id}
                    comment={reply as CommentType}
                    isReply
                    accompanyId={accompanyId}
                />
            ))}
        </>
    );
}
