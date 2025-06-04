import { useQuery } from "@tanstack/react-query";
import { EmploymentApi } from "@/apis/employment";

export const useEmploymentDetail = (employmentId: number) =>
    useQuery({
        queryKey: ["employment", employmentId],
        queryFn: () => EmploymentApi.getDetail(employmentId!),
        enabled: !!employmentId, // undefined일 때 요청 막기
    });
