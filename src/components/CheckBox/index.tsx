import styled from "@emotion/styled";
import { Text } from "@/styles/Text";
import React from "react";
import theme from "@/styles/theme";

export interface CheckBoxProps {
    checked: boolean;
    onChange: () => void;
    label?: React.ReactNode;
    required?: boolean;
    className?: string;
}

export const CheckBox = ({ checked, onChange, label, className }: CheckBoxProps) => {
    return (
        <Style.Label className={className} checked={checked}>
            <input type="checkbox" checked={checked} onChange={onChange} />
            <div className="checkbox-icon" />
            <Text.Body1_1>{label}</Text.Body1_1>
        </Style.Label>
    );
};

const Style = {
    Label: styled.label<{ checked: boolean }>`
        display: flex;
        align-items: center;
        gap: 8px;
        margin-bottom: 8px;

        input {
            display: none;
        }

        .checkbox-icon {
            width: 14px;
            height: 9px;
            background-color: ${({ checked }) => (checked ? theme.color.Main : theme.color.Gray2)};
            mask-image: url("/Tick.svg");
            mask-repeat: no-repeat;
            -webkit-mask-position: center;
            mask-position: center;
            -webkit-mask-size: contain;
            mask-size: contain;
            flex-shrink: 0;
        }
    `,
};
