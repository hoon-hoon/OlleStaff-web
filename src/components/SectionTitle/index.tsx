import { Text } from "@/styles/Text";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";

interface SectionTitleProps {
    title: string;
    link?: string;
}

export default function SectionTitle({ title, link }: SectionTitleProps) {
    const navigate = useNavigate();

    return (
        <Wrapper>
            <Text.Title2_1>{title}</Text.Title2_1>
            {link && (
                <MoreButton onClick={() => navigate(link, { relative: "path" })}>
                    <MoreText>더보기</MoreText>
                    <RotatedIcon src="/icons/backbtn.svg" alt="더보기 아이콘" />
                </MoreButton>
            )}
        </Wrapper>
    );
}

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const MoreButton = styled.button`
    display: flex;
    align-items: center;
    background-color: transparent;
    border: none;
    padding: 0;
    cursor: pointer;
`;

const MoreText = styled(Text.Body3_1)`
    color: ${({ theme }) => theme.color.Gray4};
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 0.24px;
    margin-top: 2px;
`;

const RotatedIcon = styled.img`
    width: 17px;
    height: 17px;
`;
