import { useQuery } from "@tanstack/react-query";
import axios from "axios";

// 진행중 공고
export const useMyLikeRecruitOpen = () => {
    return useQuery({
        queryKey: ["myLikeRecruit", "open"],
        queryFn: async () => {
            const { data } = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/recruits/like`, {
                params: {
                    type: "IN_PROGRESS",
                    cursor: null,
                    size: 20,
                },
                withCredentials: true,
            });
            return data.data.recruits;
        },
        staleTime: 180000,
        enabled: false,
    });
};

// 마감 공고
export const useMyLikeRecruitClosed = () => {
    return useQuery({
        queryKey: ["myLikeRecruit", "closed"],
        queryFn: async () => {
            const { data } = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/recruits/like`, {
                params: {
                    type: "END",
                    cursor: null,
                    size: 20,
                },
                withCredentials: true,
            });
            return data.data.recruits;
        },
        staleTime: 180000,
        enabled: false,
    });
};
