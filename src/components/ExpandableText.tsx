import { useState } from "react";
import styled from "@emotion/styled";
import { Text } from "@/styles/Text";

interface ExpandableTextProps {
    text: string;
    maxLength?: number;
}

export default function ExpandableText({ text, maxLength = 30 }: ExpandableTextProps) {
    const [isExpanded, setIsExpanded] = useState(false);

    if (text.length <= maxLength) return <span>{text}</span>;

    return (
        <>
            {isExpanded ? text : text.slice(0, maxLength) + "... "}
            <Toggle onClick={() => setIsExpanded(prev => !prev)}>
                <Text.Body2_1 color="Gray3">{isExpanded ? "접기" : "더보기"}</Text.Body2_1>
            </Toggle>
        </>
    );
}

const Toggle = styled.button`
    background: none;
    border: none;
    cursor: pointer;
`;
