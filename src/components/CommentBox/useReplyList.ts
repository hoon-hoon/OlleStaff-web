import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useReplyList = (accompanyId: number, commentId: number, enabled: boolean) => {
    return useQuery({
        queryKey: ["replies", accompanyId, commentId],
        queryFn: async () => {
            const res = await axios.get(
                `${import.meta.env.VITE_API_BASE_URL}/accompanies/${accompanyId}/comments/${commentId}/replies`,
                {
                    params: {
                        cursor: null,
                        size: 20,
                    },
                    withCredentials: true,
                }
            );
            return res.data.data.replies;
        },
        enabled,
    });
};
