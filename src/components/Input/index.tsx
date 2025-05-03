import styled from "@emotion/styled";
import { ReactNode } from "react";
import theme from "@/styles/theme";
import { Text } from "@/styles/Text";

type InputVariant = "default" | "message" | "comment";

type InputProps = {
    type?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    disabled?: boolean;
    variant?: InputVariant;
    onRightIconClick?: () => void;
    rightIcon?: ReactNode;
    leftIcon?: ReactNode;
    onLeftIconClick?: () => void;
    bottomMessage?: string;
    messageColor?: keyof typeof theme.color;
};

export default function Input(props: InputProps) {
    const {
        type,
        value,
        onChange,
        placeholder,
        disabled,
        variant = "default",
        rightIcon,
        onRightIconClick,
        leftIcon,
        onLeftIconClick,
        bottomMessage,
        messageColor = "Red1",
    } = props;

    const hasBottomMessage = "bottomMessage" in props;

    return (
        <InputContainer>
            <Wrapper variant={variant}>
                {variant === "message" && leftIcon && <LeftIconArea onClick={onLeftIconClick}>{leftIcon}</LeftIconArea>}
                <StyledInput
                    type={type}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    disabled={disabled}
                />
                {rightIcon && <RightIconArea onClick={onRightIconClick}>{rightIcon}</RightIconArea>}
            </Wrapper>
            {hasBottomMessage && (
                <BottomMessage visible={!!bottomMessage} color={messageColor}>
                    {bottomMessage || "\u00A0"}
                </BottomMessage>
            )}
        </InputContainer>
    );
}

const InputContainer = styled.div`
    width: 100%;
    /* max-width: 333px; */
`;

const Wrapper = styled.div<{ variant: InputVariant }>`
    display: flex;
    align-items: center;
    padding: 0 12px;
    background-color: ${theme.color.White};
    border: 1px solid ${theme.color.Gray2};
    border-radius: ${({ variant }) => (variant === "default" ? "8px" : "40px")};
    height: 40px;
    width: 100%;
    /* max-width: 333px; */
`;

const StyledInput = styled.input`
    flex: 1;
    background: transparent;
    border: none;
    outline: none;
    font-size: 16px;
    font-weight: 400;
    color: ${theme.color.Black};

    &::placeholder {
        color: ${theme.color.Gray3};
    }
`;

const RightIconArea = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
`;

const LeftIconArea = styled.div`
    padding-right: 8px;
    display: flex;
    align-items: center;
`;

const BottomMessage = styled(Text.Body3_1)<{
    color: keyof typeof theme.color;
    visible: boolean;
}>`
    margin-top: 6px;
    padding-left: 4px;
    min-height: 18px;
    white-space: pre-wrap;
    color: ${({ visible, color, theme }) => (visible ? theme.color[color] : "transparent")};
    visibility: ${({ visible }) => (visible ? "visible" : "hidden")};
`;
