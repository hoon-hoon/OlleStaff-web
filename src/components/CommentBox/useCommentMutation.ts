import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

interface CreateCommentParams {
    accompanyId: number;
    content: string;
}

interface DeleteCommentParams {
    accompanyId: number;
    commentId: number;
}

export const useCreateComment = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async ({ accompanyId, content }: CreateCommentParams) => {
            const res = await axios.post(
                `${import.meta.env.VITE_API_BASE_URL}/accompanies/${accompanyId}/comments`,
                { content },
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                    withCredentials: true,
                }
            );
            return res.data;
        },
        onSuccess: (_, { accompanyId }) => {
            queryClient.invalidateQueries({ queryKey: ["comments", accompanyId] });
        },
    });
};

export const useDeleteComment = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async ({ accompanyId, commentId }: DeleteCommentParams) => {
            const res = await axios.delete(
                `${import.meta.env.VITE_API_BASE_URL}/accompanies/${accompanyId}/comments/${commentId}`,
                { withCredentials: true }
            );
            return res.data;
        },
        onSuccess: (_, { accompanyId }) => {
            queryClient.invalidateQueries({ queryKey: ["comments", accompanyId] });
        },
        onError: err => {
            console.error("댓글 삭제 실패", err);
        },
    });
};
