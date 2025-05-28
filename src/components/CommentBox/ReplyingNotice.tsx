import styled from "@emotion/styled";
import { Text } from "@/styles/Text";

interface Props {
    nickname: string;
    onCancel: () => void;
}

export default function ReplyingNotice({ nickname, onCancel }: Props) {
    return (
        <Notice>
            <Text.Body3_1 color="Main" style={{ marginTop: "1px" }}>
                {nickname}님의 댓글에 답글 다는 중...
            </Text.Body3_1>
            <CancelButton onClick={onCancel}>
                <Text.Body3_1 color="Gray4" style={{ marginTop: "1px" }}>
                    취소
                </Text.Body3_1>
            </CancelButton>
        </Notice>
    );
}

const Notice = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 8px;
    padding: 4px 10px;
    background-color: ${({ theme }) => theme.color.Sub2};
    color: ${({ theme }) => theme.color.Gray5};
    border-radius: 20px;
    width: fit-content;
    max-width: 100%;
    margin: 0 auto;
`;

const CancelButton = styled.button`
    border: none;
    background: none;
    cursor: pointer;
`;
