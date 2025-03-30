import Input from "../components/Input";
import ProfileAdd from "../components/ProfileAdd";
import { Text } from "../styles/Text";
import { Wrapper } from "../styles/Wrapper";
import { SubmitButton } from "../components/SubmitButton";
import useSignupForm from "../hooks/useSignupForm";

export default function SignupPage() {
    const { userInfo, errors, handleInputChange, validate } = useSignupForm();

    const handleSubmit = () => {
        if (!validate()) return;

        const requestBody = {
            nickname: userInfo.nickname,
            phone: userInfo.phone,
            phoneVerificationCode: userInfo.verificationCode,
            imageUrl: " ",
            birthDate: parseInt(userInfo.birthDate),
        };
        console.log("회원가입 요청", requestBody);
    };

    return (
        <Wrapper.FlexBox direction="column" gap="20px">
            <Wrapper.FlexBox justifyContent="center">
                <ProfileAdd />
            </Wrapper.FlexBox>
            <div>
                <Text.Body1>닉네임</Text.Body1>
                <Input
                    value={userInfo.nickname}
                    onChange={handleInputChange("nickname")}
                    placeholder="닉네임을 입력하세요."
                    errorMessage={errors.nickname}
                />
            </div>
            <div>
                <Text.Body1>전화번호</Text.Body1>
                <Wrapper.FlexBox gap="1px">
                    <Input
                        value={userInfo.phone}
                        onChange={handleInputChange("phone")}
                        placeholder="전화번호를 입력하세요."
                        errorMessage={errors.phone}
                    />
                    <SubmitButton label="인증 요청 버튼">인증 요청</SubmitButton>
                </Wrapper.FlexBox>
            </div>
            <div>
                <Text.Body1>전화번호 인증</Text.Body1>
                <Input
                    value={userInfo.verificationCode}
                    onChange={handleInputChange("verificationCode")}
                    placeholder="인증번호를 입력하세요."
                    errorMessage={errors.verificationCode}
                />
            </div>
            <div>
                <Text.Body1>생년월일</Text.Body1>
                <Input
                    value={userInfo.birthDate}
                    onChange={handleInputChange("birthDate")}
                    placeholder="YYYYMMDD를 입력하세요."
                    errorMessage={errors.birthDate}
                />
            </div>
            <SubmitButton label="가입 완료 버튼" width="large" onClick={handleSubmit}>
                가입 완료
            </SubmitButton>
        </Wrapper.FlexBox>
    );
}
