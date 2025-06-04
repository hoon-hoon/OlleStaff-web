import axios from "axios";

export const EmploymentApi = {
    // GET: 공고 상세 조회
    getDetail: async (employmentId: number) =>
        await axios
            .get(`${import.meta.env.VITE_API_BASE_URL}/employments/${employmentId}`, {
                withCredentials: true,
            })
            .then(res => res.data),
};
