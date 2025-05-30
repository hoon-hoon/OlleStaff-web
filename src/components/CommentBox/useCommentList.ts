import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useCommentList = (accompanyId: number) => {
    return useQuery({
        queryKey: ["comments", accompanyId],
        queryFn: async () => {
            const res = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/accompanies/${accompanyId}/comments`, {
                params: {
                    cursor: null,
                    size: 20,
                },
                withCredentials: true,
            });
            return res.data.data.comments;
        },
        enabled: !!accompanyId,
    });
};
