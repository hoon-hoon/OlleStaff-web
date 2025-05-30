import { Text } from "@/styles/Text";
import theme from "@/styles/theme";
import { Wrapper } from "@/styles/Wrapper";
import styled from "@emotion/styled";
import { useState } from "react";

export default function UserModeSwitcher() {
    const [mode, setMode] = useState<"스텝" | "게스트하우스">("스텝");
    const handleToggleMode = () => {
        const nextMode = mode === "스텝" ? "게스트하우스" : "스텝";
        setMode(nextMode);

        console.log(`"${nextMode}" 모드로 전환`);
    };

    const handleLogout = () => {
        console.log("로그아웃 처리");
    };

    const handleDeleteAccount = () => {
        console.log("회원 탈퇴 처리");
    };

    return (
        <>
            <Wrapper.FlexBox direction="column" gap="12px">
                <Style.ModeChangeButton onClick={handleToggleMode}>
                    <Text.Body1_1 color="Main">{mode} 모드로 전환</Text.Body1_1>
                </Style.ModeChangeButton>
                <Wrapper.FlexBox justifyContent="center" gap="8px">
                    <Text.Body2 color="Gray2" onClick={handleLogout}>
                        로그아웃
                    </Text.Body2>
                    <Text.Body2 color="Gray2"> | </Text.Body2>
                    <Text.Body2 color="Gray2" onClick={handleDeleteAccount}>
                        회원 탈퇴
                    </Text.Body2>
                </Wrapper.FlexBox>
            </Wrapper.FlexBox>
        </>
    );
}

const Style = {
    ModeChangeButton: styled.div`
        width: 100%;
        height: 42px;
        border: 1px solid ${theme.color.Main};
        border-radius: 8px;
        padding: 18px 0;
        display: flex;
        justify-content: center;
        align-items: center;
    `,
};
