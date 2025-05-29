import { useState } from "react";
import { ReplyType } from "@/types/comment";
import { mockReplies } from "./mock";

export function useCommentState() {
    const [openReplies, setOpenReplies] = useState<Record<number, boolean>>({}); // 답글 펼침 여부
    const [loadedReplies, setLoadedReplies] = useState<Record<number, ReplyType[]>>({}); // 답글 목록
    const [activeReply, setActiveReply] = useState<{
        commentId: number;
        nickname: string;
    } | null>(null); // 답글 달고 있는 대상

    // 답글 토글
    const toggleReplies = async (commentId: number) => {
        if (!loadedReplies[commentId]) {
            // 임시 mockData 사용
            const replies = mockReplies[commentId] || [];
            setLoadedReplies(prev => ({ ...prev, [commentId]: replies }));
        }
        setOpenReplies(prev => ({ ...prev, [commentId]: !prev[commentId] }));
    };

    // 답글 달기 시작
    const startReplyTo = (commentId: number, nickname: string) => {
        setActiveReply({ commentId, nickname });
    };

    // 답글 입력 상태 초기화
    const cancelReply = () => {
        setActiveReply(null);
    };

    return {
        openReplies,
        loadedReplies,
        activeReply,
        toggleReplies,
        startReplyTo,
        cancelReply,
    };
}
