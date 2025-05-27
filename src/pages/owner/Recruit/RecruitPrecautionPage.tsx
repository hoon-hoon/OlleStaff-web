import { Button } from "@/components/Button";
import Header from "@/components/Header";
import PageWrapper from "@/components/PageWrapper";
import { Wrapper } from "@/styles/Wrapper";

interface Props {
    onSubmit: () => void;
}

export default function RecruitPrecautionPage({ onSubmit }: Props) {
    return (
        <>
            <Header title="주의사항 작성" showBackButton />
            <PageWrapper hasHeader>
                <Wrapper.FlexBox direction="column" padding="30px" gap="20px">
                    주의사항
                    <Button label="작성 완료" width="large" onClick={onSubmit}>
                        작성 완료
                    </Button>
                </Wrapper.FlexBox>
            </PageWrapper>
        </>
    );
}
