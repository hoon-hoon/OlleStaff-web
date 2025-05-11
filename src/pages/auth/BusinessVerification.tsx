import { Button } from "@/components/Button";
import Header from "@/components/Header";
import Input from "@/components/Input";
import PageWrapper from "@/components/PageWrapper";
import { Text } from "@/styles/Text";
import theme from "@/styles/theme";
import { Wrapper } from "@/styles/Wrapper";
import styled from "@emotion/styled";
import { useEffect, useRef, useState } from "react";

export default function BusinessVerificationPage() {
    const imageInput = useRef<HTMLInputElement | null>(null);

    const [businessName, setBusinessName] = useState("");
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [isComplete, setIsComplete] = useState(false);
    const [isAgreed, setIsAgreed] = useState(false);

    const handleChangeBusinessName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setBusinessName(e.target.value);
    };

    const handleClickImageUpload = (): void => {
        imageInput.current?.click();
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0] || null;
        setSelectedFile(file);
    };

    const handleClearFile = () => {
        setSelectedFile(null);
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
                <Wrapper.FlexBox width="100%" height="100%" direction="column" justifyContent="space-between">
                    <Wrapper.FlexBox direction="column" gap="20px">
                        <Input
                            inputTitle="사업자명"
                            onChange={handleChangeBusinessName}
                            placeholder="사업자명을 입력하세요."
                            value={businessName}
                            variant="default"
                        />

                        <Style.AttachFileGroup>
                            <Text.Body1_1>사업자등록증</Text.Body1_1>
                            <Style.AttachFileWrapper>
                                <Style.InputBox>
                                    <input
                                        type="file"
                                        style={{ display: "none" }}
                                        ref={imageInput}
                                        onChange={handleFileChange}
                                    />

                                    {selectedFile ? (
                                        <Style.FilledBox>
                                            <Text.Body1>{selectedFile.name}</Text.Body1>
                                            <img
                                                src="/XButton.svg"
                                                alt="X"
                                                onClick={handleClearFile}
                                                style={{ cursor: "pointer" }}
                                            />
                                        </Style.FilledBox>
                                    ) : (
                                        <Text.Body1 color="Gray3">파일을 선택하세요.</Text.Body1>
                                    )}
                                </Style.InputBox>

                                <Button label="" width="small" height="small" onClick={handleClickImageUpload} isActive>
                                    파일 선택
                                </Button>
                            </Style.AttachFileWrapper>
                            {selectedFile && (
                                <Text.Body2 color="Gray3">{(selectedFile.size / 1024).toFixed(2)} KB</Text.Body2>
                            )}
                        </Style.AttachFileGroup>
                    </Wrapper.FlexBox>
                    <Wrapper.FlexBox direction="column" gap="24px">
                        <Style.AgreeGroup>
                            <Style.AgreeTextWrapper>
                                <Text.Body1_1 style={{ textDecoration: "underline" }}>
                                    개인정보 수집 및 이용 동의
                                </Text.Body1_1>
                                <Text.Body1_1 color="Main">(필수)</Text.Body1_1>
                            </Style.AgreeTextWrapper>

                            <Style.CheckBox
                                src={`/${isAgreed ? "Checked" : "UnChecked"}.svg`}
                                alt="체크박스"
                                onClick={handleToggleCheckButton}
                            />
                        </Style.AgreeGroup>
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

const Style = {
    AttachFileWrapper: styled.div`
        display: flex;
        gap: 4px;
        align-items: center;
    `,
    InputBox: styled.div`
        display: flex;
        align-items: center;
        padding: 0 12px;
        background-color: ${theme.color.White};
        border: 1px solid ${theme.color.Gray2};
        border-radius: 8px;
        height: 40px;
        width: 100%;
    `,
    FilledBox: styled.div`
        width: 100%;
        display: flex;
        justify-content: space-between;
    `,
    AttachFileGroup: styled.div`
        display: flex;
        flex-direction: column;
        gap: 6px;
    `,
    AgreeGroup: styled.div`
        display: flex;
        align-items: center;
        justify-content: space-between;
    `,
    AgreeTextWrapper: styled.div`
        gap: 4px;
        cursor: pointer;
        display: flex;
        justify-content: space-between;
    `,
    CheckBox: styled.img`
        cursor: pointer;
    `,
};
