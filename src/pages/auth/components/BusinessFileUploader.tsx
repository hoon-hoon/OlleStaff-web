import { Button } from "@/components/Button";
import { Text } from "@/styles/Text";
import styled from "@emotion/styled";
import theme from "@/styles/theme";
import { useRef } from "react";
import { Wrapper } from "@/styles/Wrapper";

interface Props {
    selectedFile: File | null;
    onFileChange: (file: File | null) => void;
}

export default function BusinessFileUploader({ selectedFile, onFileChange }: Props) {
    const fileInputRef = useRef<HTMLInputElement | null>(null);

    const handleFileClick = () => {
        fileInputRef.current?.click();
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0] || null;
        onFileChange(file);
    };

    return (
        <Wrapper.FlexBox direction="column" gap="6px">
            <Text.Body1_1>사업자등록증</Text.Body1_1>
            <Wrapper.FlexBox alignItems="flex-end" gap="6px">
                <InputBox>
                    <input type="file" ref={fileInputRef} style={{ display: "none" }} onChange={handleChange} />
                    {selectedFile ? (
                        <FileName>
                            <Text.Body1>{selectedFile.name}</Text.Body1>
                            <img
                                src="/XButton.svg"
                                alt="X"
                                onClick={() => onFileChange(null)}
                                style={{ cursor: "pointer" }}
                            />
                        </FileName>
                    ) : (
                        <Text.Body1 color="Gray3">파일을 선택하세요.</Text.Body1>
                    )}
                </InputBox>

                <Button label="" width="small" height="small" onClick={handleFileClick} isActive>
                    파일 선택
                </Button>
            </Wrapper.FlexBox>
            {selectedFile && <Text.Body2 color="Gray3">{(selectedFile.size / 1024).toFixed(2)} KB</Text.Body2>}
        </Wrapper.FlexBox>
    );
}

const InputBox = styled.div`
    display: flex;
    align-items: center;
    padding: 0 12px;
    background-color: ${theme.color.White};
    border: 1px solid ${theme.color.Gray2};
    border-radius: 8px;
    height: 40px;
    width: 100%;
`;

const FileName = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;
