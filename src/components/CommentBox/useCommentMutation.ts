import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

interface CreateCommentParams {
    accompanyId: number;
    content: string;
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
