import styled from "styled-components";
import theme from "../../styles/theme";

export interface SubmitButtonProps {
    children: React.ReactNode;
    primary?: boolean;
    backgroundColor?: keyof typeof theme.color;
    width?: "small" | "medium" | "large";
    height?: "small" | "medium" | "large";
    label: string;
    onClick?: () => void;
}

export const SubmitButton = ({
    children,
    primary = false,
    width = "medium",
    height = "medium",
    backgroundColor,
    ...props
}: SubmitButtonProps) => {
    return (
        <Style.SubmitButton
            primary={primary}
            width={width}
            height={height}
            backgroundColor={backgroundColor ? backgroundColor : "transparent"}
            {...props}
        >
            {children}
        </Style.SubmitButton>
    );
};

const Style = {
    SubmitButton: styled.button<{
        primary: boolean;
        width: "small" | "medium" | "large";
        height: "small" | "medium" | "large";
        backgroundColor?: string;
    }>`
        display: inline-block;
        cursor: pointer;
        border: 0;
        border-radius: 8px;
        background-color: ${({ primary }) => (primary ? `${theme.color.Main}` : `${theme.color.Gray1}`)};
        color: ${({ primary }) => (primary ? "white" : "black")};
        width: ${({ width }) => (width === "small" ? "90px" : width === "medium" ? "50%" : "100%")};
        height: ${({ height }) => (height === "small" ? "40px" : height === "medium" ? "44px" : "48px")};
    `,
};
