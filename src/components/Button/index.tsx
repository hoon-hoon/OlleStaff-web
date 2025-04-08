import styled from "@emotion/styled";
import theme from "@/styles/theme";

export interface ButtonProps {
    children: React.ReactNode;
    isActive?: boolean;
    backgroundColor?: keyof typeof theme.color;
    width?: "small" | "medium" | "large";
    height?: "small" | "medium" | "large";
    label: string;
    onClick?: () => void;
}

export const Button = ({
    children,
    isActive = false,
    width = "medium",
    height = "medium",
    backgroundColor,
    ...props
}: ButtonProps) => {
    return (
        <Style.Button
            $isActive={isActive}
            width={width}
            height={height}
            backgroundColor={backgroundColor ? backgroundColor : "transparent"}
            {...props}
        >
            {children}
        </Style.Button>
    );
};

const Style = {
    Button: styled.button<{
        $isActive: boolean;
        width: "small" | "medium" | "large";
        height: "small" | "medium" | "large";
        backgroundColor?: string;
    }>`
        display: inline-block;
        cursor: ${({ $isActive }) => ($isActive ? "pointer" : "not-allowed")};
        border: 0;
        border-radius: 8px;
        background-color: ${({ $isActive }) => ($isActive ? theme.color.Main : theme.color.Gray2)};
        color: ${({ $isActive }) => ($isActive ? "white" : "gray")};
        opacity: ${({ $isActive }) => ($isActive ? 1 : 0.6)};
        width: ${({ width }) => (width === "small" ? "90px" : width === "medium" ? "50%" : "100%")};
        height: ${({ height }) => (height === "small" ? "40px" : height === "medium" ? "44px" : "48px")};
        transition: background-color 0.3s ease;
    `,
};
