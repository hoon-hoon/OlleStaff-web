import styled from "@emotion/styled";
import { Text } from "@/styles/Text";

export interface TypeButtonProps {
    emoji: string;
    label: string;
    subLabel: string;
    isActive?: boolean;
    onClick?: () => void;
}

export const TypeButton = ({ emoji, label, subLabel, isActive = false, onClick }: TypeButtonProps) => {
    return (
        <Wrapper $isActive={isActive} onClick={onClick}>
            <Emoji role="img" aria-label={label}>
                {emoji}
            </Emoji>
            <Text.Body1>
                {label} <br />
                {subLabel}
            </Text.Body1>
        </Wrapper>
    );
};

const Wrapper = styled.button<{ $isActive: boolean }>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 162px;
    min-height: 209px;
    border-radius: 12px;
    background-color: ${({ $isActive, theme }) => ($isActive ? theme.color.Sub2 : theme.color.White)};
    color: ${({ $isActive }) => ($isActive ? "white" : "black")};
    border: ${({ $isActive, theme }) => ($isActive ? `2px solid ${theme.color.Main}` : "1px solid #D9D9D9")};
    cursor: pointer;
    transition: all 0.2s ease;
`;

const Emoji = styled.span`
    font-size: 48px;
    margin-bottom: 32px;
`;
