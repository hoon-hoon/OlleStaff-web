import Input from "@/components/Input";
import Textarea from "@/components/Textarea";
import { useEffect } from "react";
import styled from "@emotion/styled";
import { Wrapper } from "@/styles/Wrapper";
import theme from "@/styles/theme";

type Precaution = {
    precautionsTitle: string;
    precautionsContent: string;
};

interface PrecautionListEditorProps {
    values: Precaution[];
    onChange: (updated: Precaution[]) => void;
}

export default function PrecautionItem({ values, onChange }: PrecautionListEditorProps) {
    const handleAddPrecaution = () => {
        if (values.length >= 5) return;
        onChange([...values, { precautionsTitle: "", precautionsContent: "" }]);
    };

    const handleChangePrecaution = (newItem: Precaution, index: number) => {
        const updated = [...values];
        updated[index] = newItem;
        onChange(updated);
    };

    const handleRemovePrecaution = (index: number) => {
        const updated = values.filter((_, i) => i !== index);
        onChange(updated.length === 0 ? [{ precautionsTitle: "", precautionsContent: "" }] : updated);
    };

    useEffect(() => {
        if (values.length === 0) {
            onChange([{ precautionsTitle: "", precautionsContent: "" }]);
        }
    }, [values, onChange]);

    return (
        <>
            {values.map((item, index) => (
                <Style.InputGroup key={index}>
                    <Input
                        inputTitle="제목"
                        placeholder="ex) 일과 재미, 균형 잡기! ⚖️"
                        variant="default"
                        value={item.precautionsTitle}
                        onChange={e => handleChangePrecaution({ ...item, precautionsTitle: e.target.value }, index)}
                    />
                    <Textarea
                        textareaTitle="내용"
                        placeholder="ex) 즐길 때는 확실히! 하지만 업무 시간엔 프로페셔널하게 행동해 주세요."
                        variant="flat-sm"
                        value={item.precautionsContent}
                        onChange={e => handleChangePrecaution({ ...item, precautionsContent: e.target.value }, index)}
                    />
                    {values.length > 1 && (
                        <Style.DeleteBoxButton
                            src="/DeleteTag.svg"
                            alt="삭제"
                            onClick={() => handleRemovePrecaution(index)}
                        />
                    )}
                </Style.InputGroup>
            ))}
            {values.length < 5 && (
                <Wrapper.FlexBox justifyContent="center" margin="15px 0 0 0">
                    <Style.AddPrecaution
                        src="/Icon/addMainColor.svg"
                        alt="복리후생 추가 버튼"
                        onClick={handleAddPrecaution}
                    />
                </Wrapper.FlexBox>
            )}
        </>
    );
}

const Style = {
    InputGroup: styled.div`
        position: relative;
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 8px;
        padding: 15px;
        border-radius: 8px;
        transition:
            background-color 0.2s ease,
            box-shadow 0.2s ease;
        &:hover {
            background-color: ${theme.color.Gray1};
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
        }
    `,
    DeleteBoxButton: styled.img`
        position: absolute;
        top: 12px;
        right: 12px;
        width: 20px;
        height: 20px;
        background: #ccc;
        border-radius: 50%;

        cursor: pointer;
    `,
    AddPrecaution: styled.img`
        cursor: pointer;
    `,
};
