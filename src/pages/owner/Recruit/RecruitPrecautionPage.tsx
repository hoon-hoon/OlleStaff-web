import { Button } from "@/components/Button";
import Header from "@/components/Header";
import PageWrapper from "@/components/PageWrapper";
import { Text } from "@/styles/Text";
import { Wrapper } from "@/styles/Wrapper";
import Precaution from "../components/Precaution";

interface Props {
    onSubmit: () => void;
}

export default function RecruitPrecautionPage({ onSubmit }: Props) {
    return (
        <>
            <Header title="주의사항 작성" showBackButton />
            <PageWrapper hasHeader>
                <Wrapper.FlexBox direction="column" padding="30px" gap="20px">
                    <Wrapper.FlexBox height="50px" direction="column" alignItems="center">
                        <Text.Body3_1 color="Gray4">스탭에게 전달하고 싶은 주의사항을 작성해주세요.</Text.Body3_1>
                        <Text.Body3_1 color="Gray4">스탭 합격시 메세지를 통하여 보여지게 됩니다.</Text.Body3_1>
                    </Wrapper.FlexBox>

                    {/* 제목 & 소개글 컴포넌트 */}

                    <Precaution />

                    <Button label="작성 완료" width="large" onClick={onSubmit}>
                        작성 완료
                    </Button>
                </Wrapper.FlexBox>
            </PageWrapper>
        </>
    );
}
