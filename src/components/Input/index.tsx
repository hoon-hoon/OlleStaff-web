import styled from "styled-components";
import { ReactNode } from "react";
import theme from "../../styles/theme";
import { Text } from "../../styles/Text";

type InputVariant = "default" | "message" | "comment";

type InputProps = {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    disabled?: boolean;
    variant?: InputVariant;
    onRightIconClick?: () => void;
    rightIcon?: ReactNode;
    leftIcon?: ReactNode;
    onLeftIconClick?: () => void;
    errorMessage?: string;
};

export default function Input({
    value,
    onChange,
    placeholder,
    disabled,
    variant = "default",
    rightIcon,
    onRightIconClick,
    leftIcon,
    onLeftIconClick,
    errorMessage,
}: InputProps) {
    return (
        <div>
            <Wrapper variant={variant}>
                {variant === "message" && leftIcon && <LeftIconArea onClick={onLeftIconClick}>{leftIcon}</LeftIconArea>}
                <StyledInput
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    disabled={disabled}
                    variant={variant}
                />
                {rightIcon && <RightIconArea onClick={onRightIconClick}>{rightIcon}</RightIconArea>}
            </Wrapper>
            {errorMessage && <ErrorMessage color="Red1">{errorMessage}</ErrorMessage>}
        </div>
    );
}

const Wrapper = styled.div<{ variant: InputVariant }>`
    display: flex;
    align-items: center;
    padding: 0 12px;
    background-color: ${theme.color.White};
    border: 1px solid ${theme.color.Gray2};
    border-radius: ${({ variant }) => (variant === "default" ? "8px" : "40px")};
    height: 40px;
    width: 100%;
    max-width: 333px;
`;

const StyledInput = styled.input<{ variant: InputVariant }>`
    flex: 1;
    background: transparent;
    border: none;
    outline: none;
    font-size: 16px;
    font-weight: 400;
    color: ${theme.color.Gray3};

    &::placeholder {
        color: ${theme.color.Gray3};
    }
`;

const RightIconArea = styled.button`
    background: none;
    border: none;
    padding-left: 8px;
    display: flex;
    align-items: center;
`;

const LeftIconArea = styled.button`
    background: none;
    border: none;
    padding-right: 8px;
    display: flex;
    align-items: center;
`;

const ErrorMessage = styled(Text.Body3_1)`
    margin-top: 6px;
    padding-left: 4px;
`;
