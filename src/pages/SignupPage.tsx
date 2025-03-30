import React, { useState } from "react";
import Input from "../components/Input";
import ProfileAdd from "../components/ProfileAdd";
import { Text } from "../styles/Text";
import { Wrapper } from "../styles/Wrapper";
import { SubmitButton } from "../components/SubmitButton";

interface UserInfo {
    nickname: string;
    phone: string;
    verificationCode: string;
    birthDate: string;
}

export default function SignupPage() {
    const [userInfo, setUserInfo] = useState<UserInfo>({
        nickname: "",
        phone: "",
        verificationCode: "",
        birthDate: "",
    });

    const handleInputChange = (field: keyof UserInfo) => (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserInfo({
            ...userInfo,
            [field]: e.target.value,
        });
    };

    return (
        <Wrapper.FlexBox direction="column" gap="20px">
            <ProfileAdd />
            <div>
                <Text.Body1>닉네임</Text.Body1>
                <Input
                    value={userInfo.nickname}
                    onChange={handleInputChange("nickname")}
                    placeholder="닉네임을 입력하세요."
                />
            </div>
            <div>
                <Text.Body1>전화번호</Text.Body1>
                <div>
                    <Input
                        value={userInfo.phone}
                        onChange={handleInputChange("phone")}
                        placeholder="전화번호를 입력하세요."
                    />

                    <SubmitButton label="인증 요청 버튼">인증 요청</SubmitButton>
                </div>
            </div>
            <div>
                <Text.Body1>전화번호 인증</Text.Body1>
                <Input
                    value={userInfo.verificationCode}
                    onChange={handleInputChange("verificationCode")}
                    placeholder="인증번호를 입력하세요."
                />
            </div>
            <div>
                <Text.Body1>생년월일</Text.Body1>
                <Input
                    value={userInfo.birthDate}
                    onChange={handleInputChange("birthDate")}
                    placeholder="YYYYMMDD를 입력하세요."
                />
            </div>
            <SubmitButton label="가입 완료 버튼" width="large">
                가입 완료
            </SubmitButton>
        </Wrapper.FlexBox>
    );
}
