import Input from "@/components/Input";
import Textarea from "@/components/Textarea";
import { useEffect } from "react";
import styled from "@emotion/styled";
import { Wrapper } from "@/styles/Wrapper";

type Precaution = {
    title: string;
    content: string;
};

interface PrecautionListEditorProps {
    values: Precaution[];
    onChange: (updated: Precaution[]) => void;
}

export default function Precaution({ values, onChange }: PrecautionListEditorProps) {
    const handleAddPrecaution = () => {
        if (values.length >= 5) return;
        onChange([...values, { title: "", content: "" }]);
    };

    const handleChangePrecaution = (newItem: Precaution, index: number) => {
        const updated = [...values];
        updated[index] = newItem;
        onChange(updated);
    };

    const handleRemovePrecaution = (index: number) => {
        const updated = values.filter((_, i) => i !== index);
        onChange(updated.length === 0 ? [{ title: "", content: "" }] : updated);
    };

    useEffect(() => {
        if (values.length === 0) {
            onChange([{ title: "", content: "" }]);
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
                        value={item.title}
                        onChange={e => handleChangePrecaution({ ...item, title: e.target.value }, index)}
                    />
                    <Textarea
                        textareaTitle="내용"
                        placeholder="ex) 즐길 때는 확실히! 하지만 업무 시간엔 프로페셔널하게 행동해 주세요."
                        variant="flat-sm"
                        value={item.content}
                        onChange={e => handleChangePrecaution({ ...item, content: e.target.value }, index)}
                    />
                    {item.title !== "" && item.content !== "" && (
                        <Style.DeleteBoxButton
                            src="/DeleteTag.svg"
                            alt="삭제"
                            onClick={() => handleRemovePrecaution(index)}
                        />
                    )}
                </Style.InputGroup>
            ))}
            {values.length < 5 && (
                <Wrapper.FlexBox justifyContent="center">
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
        margin-bottom: 12px;
    `,
    DeleteBoxButton: styled.img``,
    AddPrecaution: styled.img`
        cursor: pointer;
    `,
};
