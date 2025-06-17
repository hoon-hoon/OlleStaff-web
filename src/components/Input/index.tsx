import styled from "@emotion/styled";
import { ReactNode } from "react";
import theme from "@/styles/theme";
import { Text } from "@/styles/Text";

type InputVariant = "default" | "message" | "comment";

type InputProps = {
    inputTitle?: string;
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
    readOnly?: boolean;
};

export default function Input(props: InputProps) {
    const {
        inputTitle = "",
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
        readOnly,
    } = props;

    const hasBottomMessage = "bottomMessage" in props;

    return (
        <InputContainer>
            {inputTitle !== "" && <Text.Body1_1>{inputTitle}</Text.Body1_1>}

            <section>
                <Wrapper variant={variant}>
                    {variant === "message" && leftIcon && (
                        <LeftIconArea onClick={onLeftIconClick}>{leftIcon}</LeftIconArea>
                    )}
                    <StyledInput
                        type={type}
                        value={value}
                        onChange={onChange}
                        placeholder={placeholder}
                        disabled={disabled}
                        readOnly={readOnly}
                    />
                    {rightIcon && <RightIconArea onClick={onRightIconClick}>{rightIcon}</RightIconArea>}
                </Wrapper>
                {hasBottomMessage && (
                    <BottomMessage visible={!!bottomMessage} color={messageColor}>
                        {bottomMessage || "\u00A0"}
                    </BottomMessage>
                )}
            </section>
        </InputContainer>
    );
}

const InputContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 12px;
    /* max-width: 333px; */
`;

const Wrapper = styled.div<{ variant: InputVariant }>`
    display: flex;
    align-items: center;
    padding: 0 12px;
    border-radius: ${({ variant }) => (variant === "default" ? "8px" : "40px")};
    height: 40px;
    width: 100%;
    background-color: ${theme.color.Gray0};
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
