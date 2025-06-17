import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useMyLikeAccompany = () => {
    return useQuery({
        queryKey: ["myLikeAccompany"],
        queryFn: async () => {
            const { data } = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/accompanies/like`, {
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
