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

    return (
        <>
            <Wrapper.FlexBox alignItems="flex-start" justifyContent="space-between">
                <Text.Body1_1>복리후생</Text.Body1_1>
                <Text.Body3_1 color="Gray4">* 최대 5개의 복리후생 조건을 작성할 수 있습니다.</Text.Body3_1>
            </Wrapper.FlexBox>

            {benefits.map((benefit, index) => (
                <Input
                    key={index}
                    placeholder="ex) 매주 흥이나는 파티🔥"
                    variant="default"
                    value={benefit}
                    onChange={e => handleChangeBenefit(e.target.value, index)}
                />
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
};
