import axios from "axios";

export const useWriteAccompany = () => {
    const postAccompany = async ({
        title,
        content,
        newImages,
    }: {
        title: string;
        content: string;
        newImages: File[];
    }) => {
        const formData = new FormData();
        formData.append("title", title);
        formData.append("content", content);

        newImages.forEach(image => {
            formData.append("newImages", image);
        });

        formData.append("images", JSON.stringify([]));

        const res = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/accompanies`, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
            withCredentials: true,
        });

        return res.data;
    };

    return { postAccompany };
};
