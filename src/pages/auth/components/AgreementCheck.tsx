import styled from "@emotion/styled";
import { Text } from "@/styles/Text";
import { Wrapper } from "@/styles/Wrapper";
import { useNavigate } from "react-router-dom";

interface AgreementCheckProps {
    isChecked: boolean;
    onToggle: () => void;
    label: string;
    requirementType?: "필수" | "선택";
    termsLink?: string;
}

export default function AgreementCheck({
    isChecked,
    onToggle,
    label,
    requirementType,
    termsLink,
}: AgreementCheckProps) {
    const navigate = useNavigate();

    const handleNavigateToTerms = () => {
        navigate(`${termsLink}`);
    };

    return (
        <Wrapper.FlexBox height="40px" alignItems="center" justifyContent="space-between">
            <TextWrapper onClick={handleNavigateToTerms}>
                <Text.Body1_1 style={{ textDecoration: "underline" }}>{label}</Text.Body1_1>
                <Text.Body1_1 color="Main">{requirementType}</Text.Body1_1>
            </TextWrapper>
            <CheckBox src={`/icons/${isChecked ? "checked" : "unChecked"}.svg`} alt="체크박스" onClick={onToggle} />
        </Wrapper.FlexBox>
    );
}

const TextWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 4px;
    cursor: pointer;
`;

const CheckBox = styled.img`
    cursor: pointer;
`;
