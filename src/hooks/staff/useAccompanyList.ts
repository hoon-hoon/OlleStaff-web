import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useAccompanyList = () => {
    return useQuery({
        queryKey: ["accompanyList"],
        queryFn: async () => {
            const { data } = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/accompanies`, {
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
