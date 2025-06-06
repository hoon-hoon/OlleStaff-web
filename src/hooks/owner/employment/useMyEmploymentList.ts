import { GuesthouseListItemProps } from "@/types/guesthouse";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

// owner 관점에서 사용하는 내 공고 조회 (전체 | 진행중 | 마감)
export const useMyEmploymentList = (type?: "ALL" | "IN_PROGRESS" | "END") => {
    return useQuery<GuesthouseListItemProps[]>({
        queryKey: ["guesthouseList"],
        queryFn: async () => {
            const { data } = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/employments`, {
                params: {
                    cursor: null,
                    pageSize: 20,
                    type,
                },
                withCredentials: true,
            });
            return data.data.employmentPreviewDTOS;
        },
    });
};

// staff 관점에서 사용하는 모든 공고 조회 (진행중 | 마감)
// export const useGuesthouseList = () => {
//     return useQuery<GuesthouseListItemProps[]>({
//         queryKey: ["guesthouseList"],
//         queryFn: async () => {
//             const { data } = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/employments`, {
//                 withCredentials: true,
//             });
//             return data.data.guesthouses;
//         },
//     });
// };
