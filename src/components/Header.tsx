import { Text } from "@/styles/Text";
import styled from "@emotion/styled";

type HeaderProps = {
    title: string;
    showBackButton?: boolean;
    onBackClick?: () => void;
    rightIcon?: React.ReactNode;
    onRightClick?: () => void;
};

export default function Header({ title, showBackButton, onBackClick, rightIcon, onRightClick }: HeaderProps) {
    return (
        <Wrapper>
            <Side>
                {showBackButton && (
                    <BackButton onClick={onBackClick}>
                        <img src="BackButton.svg" />
                    </BackButton>
                )}
            </Side>
            <Text.Title3_1>{title}</Text.Title3_1>
            <Side>{rightIcon && <IconButton onClick={onRightClick}>{rightIcon}</IconButton>}</Side>
        </Wrapper>
    );
}

const Wrapper = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`;

const Side = styled.div`
    width: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const BackButton = styled.button`
    background: none;
    border: none;
    cursor: pointer;
`;

const IconButton = styled.button`
    background: none;
    border: none;
    cursor: pointer;
`;
