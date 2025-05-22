import { useState } from "react";
import Input from "@/components/Input";
import { Text } from "@/styles/Text";
import { Wrapper } from "@/styles/Wrapper";
import styled from "@emotion/styled";

export default function BenefitListEditor() {
    const [benefits, setBenefits] = useState<string[]>([""]);

    const handleAddBenefit = () => {
        if (benefits.length >= 5) return;
        setBenefits(prev => [...prev, ""]);
    };

    const handleChangeBenefit = (value: string, index: number) => {
        const newBenefits = [...benefits];
        newBenefits[index] = value;
        setBenefits(newBenefits);
    };
    const handleRemoveBenefit = (index: number) => {
        const newBenefits = benefits.filter((_, i) => i !== index);
        if (newBenefits.length === 0) {
            setBenefits([""]);
        } else {
            setBenefits(newBenefits);
        }
    };

    return (
        <>
            <Wrapper.FlexBox alignItems="flex-start" justifyContent="space-between">
                <Text.Body1_1>복리후생</Text.Body1_1>
                <Text.Body3_1 color="Gray4">* 최대 5개의 복리후생 조건을 작성할 수 있습니다.</Text.Body3_1>
            </Wrapper.FlexBox>

            {benefits.map((benefit, index) => (
                <Style.InputWrapper key={index}>
                    <Input
                        placeholder="ex) 매주 흥이나는 파티🔥"
                        variant="default"
                        value={benefit}
                        onChange={e => handleChangeBenefit(e.target.value, index)}
                    />

                    {benefit !== "" && (
                        <Style.CloseButton src="/DeleteTag.svg" alt="삭제" onClick={() => handleRemoveBenefit(index)} />
                    )}
                </Style.InputWrapper>
            ))}

            {benefits.length < 5 && (
                <Wrapper.FlexBox justifyContent="center">
                    <Style.AddBenefit src="/AddBenefit.svg" alt="복리후생 추가 버튼" onClick={handleAddBenefit} />
                </Wrapper.FlexBox>
            )}
        </>
    );
}

const Style = {
    AddBenefit: styled.img`
        cursor: pointer;
    `,
    InputWrapper: styled.div`
        position: relative;
        width: 100%;
    `,
    CloseButton: styled.img`
        position: absolute;
        right: 12px;
        top: 50%;
        transform: translateY(-50%);
        background: #ccc;
        border-radius: 50%;
        border: none;
        width: 20px;
        height: 20px;
        font-size: 12px;
        cursor: pointer;
    `,
};
