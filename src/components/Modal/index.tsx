import styled from "@emotion/styled";
import ModalWrapper from "./ModalWrapper";
import { Text } from "@/styles/Text";
import theme from "@/styles/theme";

type ModalVariant = "default" | "confirm" | "notice";

interface ModalProps {
    variant: ModalVariant;
    title?: string;
    message: string;
    handleModalClose: () => void;
    onConfirm?: () => void;
    cancelText?: string;
    confirmText?: string;
}

export default function Modal({
    variant,
    title,
    message,
    handleModalClose,
    onConfirm,
    cancelText,
    confirmText,
}: ModalProps) {
    return (
        <ModalWrapper handleModalClose={handleModalClose}>
            {variant === "default" && <img src="Check.svg" alt="아이콘" />}
            {variant === "confirm" && <Text.Title3_1>{title}</Text.Title3_1>}
            <MessageWrapper>
                <Text.Body2>{message}</Text.Body2>
            </MessageWrapper>
            <ButtonWrapper>
                {variant === "confirm" && (
                    <Button onClick={handleModalClose} variant="cancel">
                        <Text.Title3_1>{cancelText}</Text.Title3_1>
                    </Button>
                )}
                <Button onClick={onConfirm}>
                    <Text.Title3_1 color="White">{confirmText}</Text.Title3_1>
                </Button>
            </ButtonWrapper>
        </ModalWrapper>
    );
}

const ButtonWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 8px;
    margin-top: 10px;
`;

const MessageWrapper = styled.div`
    width: 100%;
    display: flex;
    text-align: center;
`;

const Button = styled.button<{ variant?: "cancel" | "okay" }>`
    padding: 8px 16px;
    background-color: ${({ variant }) => (variant === "cancel" ? `${theme.color.Gray1}` : `${theme.color.Main}`)};
    border: none;
    border-radius: 8px;
    cursor: pointer;
    width: 100%;
`;
