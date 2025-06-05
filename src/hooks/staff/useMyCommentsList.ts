import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useMyCommentsList = () => {
    return useQuery({
        queryKey: ["myCommentsList"],
        queryFn: async () => {
            const { data } = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/accompanies/comment-reply`, {
                params: {
                    cursor: null,
                    size: 20,
                },
                withCredentials: true,
            });
            return data.data.accompanies;
        },
    });
};
