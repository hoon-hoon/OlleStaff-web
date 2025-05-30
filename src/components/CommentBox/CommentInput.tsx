import { useState } from "react";
import Input from "@/components/Input";
import styled from "@emotion/styled";
import { useCreateComment } from "./useCommentMutation";

interface CommentInputProps {
    placeholder?: string;
    disabled?: boolean;
    accompanyId: number;
}

export default function CommentInput({ placeholder = "댓글을 입력하세요.", disabled, accompanyId }: CommentInputProps) {
    const [text, setText] = useState("");
    const { mutate: createComment } = useCreateComment();

    const handleSubmit = () => {
        if (!text.trim()) return;

        createComment(
            {
                accompanyId,
                content: text,
            },
            {
                onSuccess: () => {
                    console.log("댓글 작성 완료");
                    setText("");
                },
                onError: err => {
                    console.error("댓글 작성 실패", err);
                },
            }
        );
    };

    return (
        <Input
            variant="comment"
            value={text}
            onChange={e => setText(e.target.value)}
            placeholder={placeholder}
            rightIcon={<SendImage src="/icons/send.svg" />}
            onRightIconClick={handleSubmit}
            disabled={disabled}
        />
    );
}

const SendImage = styled.img`
    width: 20px;
    height: 20px;
    cursor: pointer;
`;
