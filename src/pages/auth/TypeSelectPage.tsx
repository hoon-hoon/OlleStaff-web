import { Button } from "@/components/Button";
import PageWrapper from "@/components/PageWrapper";
import { TypeButton } from "@/components/TypeButton";
import { Text } from "@/styles/Text";
import styled from "@emotion/styled";
import { useState } from "react";

export default function TypeSelectPage() {
    const [selected, setSelected] = useState("");

    const handleSubmit = () => {
        console.log(selected);
    };
    return (
        <>
            <PageWrapper>
                <TextGroup>
                    <Text.Title2>반갑습니다!</Text.Title2>
                    <Text.Title1_1>
                        게스트하우스 또는 스텝 중 <br />
                        하나를 선택해주세요.
                    </Text.Title1_1>
                </TextGroup>
                <ButtonGroup>
                    <TypeButton
                        emoji="🏠"
                        label="게스트하우스"
                        subLabel="(guesthouse)"
                        isActive={selected === "guesthouse"}
                        onClick={() => setSelected("guesthouse")}
                    />

                    <TypeButton
                        emoji="👤"
                        label="스텝"
                        subLabel="(staff)"
                        isActive={selected === "staff"}
                        onClick={() => setSelected("staff")}
                    />
                </ButtonGroup>
                <ButtonWrapper>
                    <Button
                        label="가입 완료 버튼"
                        width="large"
                        onClick={handleSubmit}
                        disabled={!selected}
                        isActive={!!selected}
                    >
                        선택 완료
                    </Button>
                </ButtonWrapper>
            </PageWrapper>
        </>
    );
}

const ButtonGroup = styled.div`
    display: flex;
    gap: 12px;
    justify-content: center;
    margin-top: 32px;
`;

const TextGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
`;

const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 88vh;
`;
