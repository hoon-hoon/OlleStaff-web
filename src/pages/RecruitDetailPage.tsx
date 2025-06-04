import { useParams } from "react-router-dom";
import { Text } from "@/styles/Text";
import { useEmploymentDetail } from "@/hooks/owner/employment/useEmploymentDetail";

export default function RecruitDetailPage() {
    const { employmentId } = useParams<{ employmentId: string }>();
    const { data: detail, isLoading, error } = useEmploymentDetail(Number(employmentId));

    if (!detail?.data || isLoading) return <p>불러오는 중...</p>;
    if (error) return <p>불러오기 실패</p>;

    const {
        instarUrl,
        personNum,
        sex,
        startedAt,
        endedAt,
        recruitmentEnd,
        title,
        content,
        category,
        latitude,
        longitude,
        locationName,
        hashtagName,
        images,
        benefitsContent,
        precautions,
    } = detail.data;

    return (
        <div>
            <Text.Title2_1>{title}</Text.Title2_1>
            <Text.Body1>{content}</Text.Body1>
            <Text.Body2>인스타: {instarUrl}</Text.Body2>
            <Text.Body2>모집 인원: {personNum}명</Text.Body2>
            <Text.Body2>성별: {sex === "female" ? "여성" : sex === "male" ? "남성" : "무관"}</Text.Body2>
            <Text.Body2>시작일: {startedAt}</Text.Body2>
            <Text.Body2>종료일: {endedAt}</Text.Body2>
            <Text.Body2>모집 마감일: {recruitmentEnd}</Text.Body2>
            <Text.Body2>카테고리: {category}</Text.Body2>
            <Text.Body2>
                위치: {locationName} ({latitude}, {longitude})
            </Text.Body2>

            <Text.Body2>해시태그:</Text.Body2>
            <ul>{Array.isArray(hashtagName) && hashtagName.map((tag, idx) => <li key={idx}>#{tag}</li>)}</ul>

            <Text.Body2>복리후생:</Text.Body2>
            <ul>
                {Array.isArray(benefitsContent) && benefitsContent.map((benefit, idx) => <li key={idx}>{benefit}</li>)}
            </ul>

            <Text.Body2>주의사항:</Text.Body2>
            <ul>
                {Array.isArray(precautions) &&
                    precautions.map((item, idx) => (
                        <li key={idx}>
                            <strong>{item.precautionsTitle}</strong>: {item.precautionsContent}
                        </li>
                    ))}
            </ul>

            {Array.isArray(images) && images.map((item, idx) => <img src={item} key={idx} alt={`이미지 ${idx + 1}`} />)}
        </div>
    );
}
