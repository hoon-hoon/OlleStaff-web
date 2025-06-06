import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useMyAccompanyList = () => {
    return useQuery({
        queryKey: ["myAccompanyList"],
        queryFn: async () => {
            const { data } = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/accompanies/my`, {
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
