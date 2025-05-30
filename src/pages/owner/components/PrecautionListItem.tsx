import Input from "@/components/Input";
import Textarea from "@/components/Textarea";
import { useEffect } from "react";
import styled from "@emotion/styled";
import { Wrapper } from "@/styles/Wrapper";
import theme from "@/styles/theme";
import { Text } from "@/styles/Text";

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
        if (values.length <= 2) return;
        const updated = values.filter((_, i) => i !== index);
        onChange(updated);
    };

    useEffect(() => {
        if (values.length < 2) {
            const toAdd = 2 - values.length;
            const newItems = Array(toAdd).fill({ precautionsTitle: "", precautionsContent: "" });
            onChange([...values, ...newItems]);
        }
    }, [values, onChange]);

    return (
        <>
            {values.map((item, index) => {
                const isDeletable = values.length > 2;
                const isLastItem = index === values.length - 1;
                return (
                    <Style.InputGroup key={index} isLast={isLastItem}>
                        <Style.HeaderRow>
                            <Text.Title3_1>
                                주의사항 {index + 1}
                                {index < 2 && <Style.Required>*</Style.Required>}
                            </Text.Title3_1>

                            {isDeletable && (
                                <Style.DeleteBoxButton
                                    src="/icons/deleteTag.svg"
                                    alt="삭제"
                                    onClick={() => handleRemovePrecaution(index)}
                                />
                            )}
                        </Style.HeaderRow>

                        <Input
                            inputTitle="제목"
                            placeholder="ex) 일과 재미, 균형 잡기! ⚖️"
                            variant="default"
                            value={item.precautionsTitle}
                            onChange={e => handleChangePrecaution({ ...item, precautionsTitle: e.target.value }, index)}
                        />
                        <Textarea
                            textareaTitle="소개글"
                            placeholder="ex) 즐길 때는 확실히! 하지만 업무 시간엔 프로페셔널하게 행동해 주세요."
                            variant="flat-sm"
                            value={item.precautionsContent}
                            onChange={e =>
                                handleChangePrecaution({ ...item, precautionsContent: e.target.value }, index)
                            }
                        />
                    </Style.InputGroup>
                );
            })}

            {values.length < 5 && (
                <Wrapper.FlexBox justifyContent="center">
                    <Style.AddPrecaution
                        src="/icons/addMainColor.svg"
                        alt="주의사항 추가 버튼"
                        onClick={handleAddPrecaution}
                    />
                </Wrapper.FlexBox>
            )}
        </>
    );
}

const Style = {
    InputGroup: styled.div<{ isLast: boolean }>`
        position: relative;
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 12px;
        padding-bottom: 20px;
        border-bottom: ${({ isLast }) => (isLast ? "none" : `1px solid ${theme.color.Gray1}`)};
    `,

    HeaderRow: styled.div`
        display: flex;
        justify-content: space-between;
        align-items: center;
    `,

    Required: styled.span`
        color: ${theme.color.Main};
        margin-left: 4px;
    `,

    DeleteBoxButton: styled.img`
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
