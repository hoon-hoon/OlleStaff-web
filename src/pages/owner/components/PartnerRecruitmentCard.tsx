import { Button } from "@/components/Button";
import { Text } from "@/styles/Text";
import { Wrapper } from "@/styles/Wrapper";
import { useNavigate } from "react-router-dom";

export default function PartnerRecruitmentCard() {
    const navigate = useNavigate();

    const handleWriteRecruitPost = () => {
        navigate("/owner/recruit/write/step1");
    };
    return (
        <>
            <Wrapper.FlexBox
                direction="column"
                padding="16px 20px"
                border="1px solid #E4E4E4"
                borderRadius="12px"
                gap="20px"
            >
                <Wrapper.FlexBox direction="column">
                    <Text.Title2_1>같이 일할 사람을 찾고 있다면?</Text.Title2_1>
                    <Text.Body1 color="Gray4">지금 바로 글을 작성해 보세요 ✍🏻</Text.Body1>
                </Wrapper.FlexBox>
                <Button label="작성 버튼" isActive width="large" onClick={handleWriteRecruitPost}>
                    게시글 작성하기
                </Button>
            </Wrapper.FlexBox>
        </>
    );
}
