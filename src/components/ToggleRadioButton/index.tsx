import { useState, ReactNode } from "react";
import styled from "styled-components";
import { Wrapper } from "../../styles/Wrapper";
import theme from "../../styles/theme";
import { Text } from "../../styles/Text";

export interface ToggleRadioButtonItem {
    icon?: ReactNode;
    label: string;
}

export interface ToggleRadioButtonProps {
    items: ToggleRadioButtonItem[];
    selectedIndex: number;
    onSelect?: (index: number) => void;
}

export default function ToggleRadioButton({ items = [], selectedIndex, onSelect }: ToggleRadioButtonProps) {
    const [selected, setSelected] = useState<number>(selectedIndex);

    const handleSelect = (index: number) => {
        // 이미 선택된 버튼을 클릭하면 선택 해제(-1)
        const newIndex = selected === index ? -1 : index;
        setSelected(newIndex);
        onSelect?.(newIndex);
    };

    return (
        <Wrapper.FlexBox gap="12px">
            {items.map((item, index) => (
                <Styled.ToggleRadioButton
                    key={index}
                    isSelected={selected === index}
                    onClick={() => handleSelect(index)}
                >
                    {item.icon && <Styled.IconWrapper>{item.icon}</Styled.IconWrapper>}
                    <Text.Body1_1>{item.label}</Text.Body1_1>
                </Styled.ToggleRadioButton>
            ))}
        </Wrapper.FlexBox>
    );
}

const Styled = {
    ToggleRadioButton: styled.div<{ isSelected: boolean }>`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        min-width: 100px;
        padding: 16px 12px;
        gap: 8px;
        cursor: pointer;
        border-radius: 12px;
        border: 2px solid ${({ isSelected }) => (isSelected ? theme.color.Main : theme.color.Gray1)};
        background-color: ${({ isSelected }) => (isSelected ? theme.color.Sub2 : theme.color.White)};
        transition: all 0.2s ease-in-out;

        &:hover {
            background-color: ${({ isSelected }) => (isSelected ? theme.color.Sub2 : theme.color.Gray0)};
        }
    `,

    IconWrapper: styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
        width: 162px;
        height: 209px;
    `,
};
