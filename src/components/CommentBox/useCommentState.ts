import { create } from "zustand";
import { ReplyType } from "@/types/comment";

interface CommentState {
    openReplies: Record<number, boolean>;
    loadedReplies: Record<number, ReplyType[]>;
    activeReply: { commentId: number; nickname: string } | null;
    toggleReplies: (commentId: number) => void;
    startReplyTo: (commentId: number, nickname: string) => void;
    cancelReply: () => void;
    setLoadedReplies: (updater: (prev: Record<number, ReplyType[]>) => Record<number, ReplyType[]>) => void;
}

export const useCommentState = create<CommentState>(set => ({
    openReplies: {},
    loadedReplies: {},
    activeReply: null,

    toggleReplies: commentId =>
        set(state => ({
            openReplies: {
                ...state.openReplies,
                [commentId]: !state.openReplies[commentId],
            },
        })),

    startReplyTo: (commentId, nickname) => set({ activeReply: { commentId, nickname } }),

    cancelReply: () => set({ activeReply: null }),

    setLoadedReplies: updater =>
        set(state => ({
            loadedReplies: updater(state.loadedReplies),
        })),
}));
