import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { CommentType, ReplyType } from "@/types/comment";

const API = import.meta.env.VITE_API_BASE_URL;

export const useCommentList = (accompanyId: number) => {
    return useQuery<CommentType[]>({
        queryKey: ["comments", accompanyId],
        queryFn: async () => {
            const res = await axios.get(`${API}/accompanies/${accompanyId}/comments`, {
                params: { cursor: null, size: 20 },
                withCredentials: true,
            });
            return res.data.data.comments;
        },
        enabled: !!accompanyId,
    });
};

export const useReplyList = (accompanyId: number, commentId: number, enabled: boolean) => {
    return useQuery<ReplyType[]>({
        queryKey: ["replies", accompanyId, commentId],
        queryFn: async () => {
            const res = await axios.get(`${API}/accompanies/${accompanyId}/comments/${commentId}/replies`, {
                params: { cursor: null, size: 20 },
                withCredentials: true,
            });
            return res.data.data.replies;
        },
        enabled,
    });
};
