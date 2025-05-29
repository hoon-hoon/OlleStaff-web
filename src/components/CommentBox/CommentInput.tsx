import { useState } from "react";
import Input from "@/components/Input";
import styled from "@emotion/styled";

interface CommentInputProps {
    onSubmit: (text: string) => void;
    placeholder?: string;
    disabled?: boolean;
}

export default function CommentInput({ onSubmit, placeholder = "댓글을 입력하세요.", disabled }: CommentInputProps) {
    const [text, setText] = useState("");

    const handleSubmit = () => {
        if (!text.trim()) return;
        onSubmit(text);
        setText("");
    };

    return (
        <Input
            variant="comment"
            value={text}
            onChange={e => setText(e.target.value)}
            placeholder={placeholder}
            rightIcon={<SendImage src="/Icon/send.svg" />}
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
