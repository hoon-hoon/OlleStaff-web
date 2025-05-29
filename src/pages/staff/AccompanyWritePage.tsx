import { Button } from "@/components/Button";
import Header from "@/components/Header";
import ImageUploader from "@/components/ImageUploader";
import Input from "@/components/Input";
import PageWrapper from "@/components/PageWrapper";
import Textarea from "@/components/Textarea";
import { useState } from "react";
import styled from "@emotion/styled";

export default function AccompanyWritePage() {
    const [formData, setFormData] = useState({
        title: "",
        content: "",
    });
    const [images, setImages] = useState<File[]>([]);

    const isAllFilled = Object.values(formData).every(value => value.trim() !== "");

    const handleSubmit = () => {
        if (!isAllFilled) {
            alert("모든 필드를 입력해주세요.");
            return;
        }
    };
    return (
        <>
            <Header showBackButton title="동행 게시글 작성" />
            <PageWrapper hasHeader>
                <FormWrapper>
                    <Input
                        value={formData.title}
                        inputTitle="제목"
                        placeholder="제목을 작성해주세요."
                        onChange={e => setFormData(prev => ({ ...prev, title: e.target.value }))}
                    ></Input>
                    <Textarea
                        textareaTitle="내용"
                        placeholder="동행글의 내용을 입력해 주세요."
                        value={formData.content}
                        variant="flat-lg"
                        onChange={e => setFormData(prev => ({ ...prev, content: e.target.value }))}
                    />
                    <ImageUploader maxImages={4} onChange={setImages}></ImageUploader>
                </FormWrapper>
                <ButtonWrapper>
                    <Button
                        width="large"
                        label="작성 완료 버튼"
                        backgroundColor="Main"
                        isActive={isAllFilled}
                        disabled={!isAllFilled}
                        onClick={handleSubmit}
                    >
                        작성 완료
                    </Button>
                </ButtonWrapper>
            </PageWrapper>
        </>
    );
}

const FormWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    justify-content: space-between;
`;

const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 35px;
`;
