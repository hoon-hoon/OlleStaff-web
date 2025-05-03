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

    useEffect(() => {
        setIsComplete(businessName !== "" && selectedFile !== null);
    }, [businessName, selectedFile]);

    return (
        <>
            <Header showBackButton title="사업자 인증" />
            <PageWrapper hasHeader>
                <Wrapper.FlexBox direction="column" justifyContent="space-between">
                    <header>
                        <Text.Body1_1>사업자명</Text.Body1_1>
                        <Input
                            onChange={handleChangeBusinessName}
                            placeholder="사업자명을 입력하세요."
                            value={businessName}
                            variant="default"
                        />

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
                    </header>

                    <footer>
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
                    </footer>
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
};
