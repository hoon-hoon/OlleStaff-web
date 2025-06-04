import { useParams } from "react-router-dom";
import { Text } from "@/styles/Text";
import { useEmploymentDetail } from "@/hooks/owner/employment/useEmploymentDetail";

export default function RecruitDetailPage() {
    const { employmentId } = useParams<{ employmentId: string }>();
    const { data: detail, isLoading, error } = useEmploymentDetail(Number(employmentId));

    if (isLoading) return <p>불러오는 중...</p>;
    if (error) return <p>불러오기 실패</p>;

    return (
        <>
            {detail && (
                <div>
                    <Text.Title2_1>{detail.instarUrl}</Text.Title2_1>
                    <Text.Title2_1>{detail.title}</Text.Title2_1>
                    <Text.Body1>{detail.content}</Text.Body1>
                    <Text.Body2> {detail.personNum}</Text.Body2>
                    <Text.Body2>
                        성별: {detail.sex === "female" ? "여성" : detail.sex === "male" ? "남성" : "무관"}
                    </Text.Body2>
                    <Text.Body2>모집 마감일: {detail.recruitmentEnd}</Text.Body2>
                    <Text.Body2>근무 종료일: {detail.endedAt}</Text.Body2>
                    {/* images, hashtagName, benefitsContent  */}
                </div>
            )}
        </>
    );
}
