import { Button } from "@/components/Button";
import Header from "@/components/Header";
import Input from "@/components/Input";
import PageWrapper from "@/components/PageWrapper";
import { Wrapper } from "@/styles/Wrapper";
import { useEffect, useState } from "react";
import BusinessFileUploader from "./components/BusinessFileUploader";
import AgreementCheck from "./components/AgreementCheck";
import useBusinessVerification from "@/hooks/auth/useBusinessVerification";

export default function BusinessVerificationPage() {
    const { businessName, setBusinessName, selectedFile, setSelectedFile, isAgreed, setIsAgreed, clearDraft } =
        useBusinessVerification();

    const [isComplete, setIsComplete] = useState(false);

    const handleSubmitForm = () => {
        clearDraft();
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
                            onChange={e => setBusinessName(e.target.value)}
                            placeholder="사업자명을 입력하세요."
                            value={businessName}
                            variant="default"
                        />
                        <BusinessFileUploader selectedFile={selectedFile} onFileChange={setSelectedFile} />
                    </Wrapper.FlexBox>
                    <Wrapper.FlexBox direction="column" gap="24px">
                        <AgreementCheck
                            isChecked={isAgreed}
                            onToggle={() => setIsAgreed(!isAgreed)}
                            label="개인정보 수집 및 이용 동의"
                            requirementType="필수"
                            termsLink="/auth/business-verification/term"
                        />
                        <Button
                            label="인증 완료 버튼"
                            width="large"
                            height="medium"
                            onClick={handleSubmitForm}
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
