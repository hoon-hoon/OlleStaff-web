import { Button } from "@/components/Button";
import Header from "@/components/Header";
import Input from "@/components/Input";
import PageWrapper from "@/components/PageWrapper";
import { Wrapper } from "@/styles/Wrapper";
import { useEffect, useState } from "react";
import BusinessFileUploader from "./components/BusinessFileUploader";
import AgreementCheck from "./components/AgreementCheck";

export default function BusinessVerificationPage() {
    const [businessName, setBusinessName] = useState("");
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [isComplete, setIsComplete] = useState(false);
    const [isAgreed, setIsAgreed] = useState(false);

    const handleChangeBusinessName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setBusinessName(e.target.value);
    };

    const handleToggleCheckButton = () => {
        setIsAgreed(prev => !prev);
    };
    useEffect(() => {
        setIsComplete(businessName !== "" && selectedFile !== null && isAgreed);
    }, [businessName, selectedFile, isAgreed]);

    return (
        <>
            <Header showBackButton title="사업자 인증" />
            <PageWrapper hasHeader>
                <Wrapper.FlexBox direction="column" justifyContent="space-between" gap="520px">
                    <Wrapper.FlexBox direction="column" gap="20px">
                        <Input
                            inputTitle="사업자명"
                            onChange={handleChangeBusinessName}
                            placeholder="사업자명을 입력하세요."
                            value={businessName}
                            variant="default"
                        />
                        <BusinessFileUploader selectedFile={selectedFile} onFileChange={setSelectedFile} />
                    </Wrapper.FlexBox>
                    <Wrapper.FlexBox direction="column" gap="24px">
                        <AgreementCheck
                            isChecked={isAgreed}
                            onToggle={handleToggleCheckButton}
                            label="개인정보 수집 및 이용 동의"
                            requirementType="필수"
                            termsLink="/auth/business-verification/term"
                        />
                        <Button
                            label="인증 완료 버튼"
                            width="large"
                            height="medium"
                            onClick={() => {
                                // 인증 API 요청
                            }}
                            isActive={isComplete}
                        >
                            인증 완료
                        </Button>
                    </Wrapper.FlexBox>
                </Wrapper.FlexBox>
            </PageWrapper>
        </>
    );
}
