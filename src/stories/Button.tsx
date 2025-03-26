import styled from "styled-components";

export interface ButtonProps {
    /** Is this the principal call to action on the page? */
    primary?: boolean;
    /** What background color to use */
    backgroundColor?: string;
    /** How large should the button be? */
    size?: "small" | "medium" | "large";
    /** Button contents */
    label: string;
    /** Optional click handler */
    onClick?: () => void;
}

/** Primary UI component for user interaction */
export const Button = ({ primary = false, size = "medium", backgroundColor, label, ...props }: ButtonProps) => {
    return (
        <StyledButton primary={primary} size={size} backgroundColor={backgroundColor} {...props}>
            {label}
        </StyledButton>
    );
};

const StyledButton = styled.button<{ primary: boolean; size: "small" | "medium" | "large"; backgroundColor?: string }>`
    display: inline-block;
    cursor: pointer;
    border: 0;
    border-radius: 3em;
    font-weight: 700;
    line-height: 1;
    font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    background-color: ${({ primary }) => (primary ? "#555ab9" : "transparent")};
    color: ${({ primary }) => (primary ? "white" : "#333")};
    box-shadow: ${({ primary }) => (primary ? "none" : "rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset")};
    padding: ${({ size }) => (size === "small" ? "10px 16px" : size === "medium" ? "11px 20px" : "12px 24px")};
    font-size: ${({ size }) => (size === "small" ? "12px" : size === "medium" ? "14px" : "16px")};
    ${({ backgroundColor }) => backgroundColor && `background-color: ${backgroundColor};`}
`;
