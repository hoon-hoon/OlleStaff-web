import { useRef, useEffect } from "react";
import styled from "@emotion/styled";
import theme from "@/styles/theme";

type TextareaVariant = "flat" | "outline";

type TextareaProps = {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    placeholder?: string;
    disabled?: boolean;
    variant?: TextareaVariant;
    minLength?: number;
};

export default function Textarea({
    value,
    onChange,
    placeholder,
    disabled,
    variant = "outline",
    minLength,
}: TextareaProps) {
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
        if (variant === "outline" && textareaRef.current) {
            textareaRef.current.style.height = "auto";
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
        }
    }, [value, variant]);

    const showCount = minLength !== undefined;
    const isEmpty = value.trim().length === 0;

    return (
        <TextareaContainer>
            <Wrapper variant={variant} hasCharCount={showCount}>
                <StyledTextarea
                    ref={textareaRef}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    disabled={disabled}
                    variant={variant}
                />
                {showCount && <CharCount>{isEmpty ? `최소 ${minLength}자` : `${value.length}자`}</CharCount>}
            </Wrapper>
        </TextareaContainer>
    );
}

const TextareaContainer = styled.div`
    width: 333px;
`;

const Wrapper = styled.div<{ variant: TextareaVariant; hasCharCount?: boolean }>`
    position: relative;
    display: flex;
    align-items: center;
    padding: 16px 12px;
    padding-bottom: ${({ hasCharCount }) => (hasCharCount ? "40px" : "16px")};
    background-color: ${({ variant }) => (variant === "flat" ? theme.color.Gray0 : theme.color.White)};
    border: ${({ variant }) => (variant === "flat" ? "none" : `1px solid ${theme.color.Gray2}`)};
    border-radius: 8px;
    width: 100%;
`;

const StyledTextarea = styled.textarea<{ variant: TextareaVariant }>`
    width: 100%;
    background: transparent;
    border: none;
    outline: none;
    font-size: 16px;
    font-weight: 400;
    color: ${theme.color.Black};
    resize: none;
    height: 100%;
    scrollbar-width: none;
    -ms-overflow-style: none;

    &::-webkit-scrollbar {
        display: none;
    }

    ${({ variant }) =>
        variant === "flat"
            ? `height: 300px;`
            : `
        min-height: 77px;
        max-height: 300px;
    `}

    &::placeholder {
        color: ${theme.color.Gray3};
    }
`;

const CharCount = styled.div`
    position: absolute;
    bottom: 12px;
    right: 12px;
    font-size: 14px;
    color: ${theme.color.Gray3};
`;
