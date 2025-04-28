import Input from "@/components/Input";
import ProfileAdd from "@/components/ProfileAdd";
import { Text } from "@/styles/Text";
import { Wrapper } from "@/styles/Wrapper";
import { Button } from "@/components/Button";
import useSignupForm from "@/hooks/useValidation";
import { VerificationTimer } from "@/components/VerificationTimer";
import { usePhoneAuth } from "@/hooks/usePhoneAuth";
import { useEffect, useState } from "react";
import { useSignup } from "@/hooks/useSignup";
import { useLocation } from "react-router-dom";
import Header from "@/components/Header";
import PageWrapper from "@/components/PageWrapper";
import styled from "@emotion/styled";

export default function SignupPage() {
    const { userInfo, errors, handleInputChange, validate } = useSignupForm();
    const {
        timer,
        message: verificationMessage,
        isExpired,
        isStarted,
        isCooldown,
        isRequested,
        requestVerification,
    } = usePhoneAuth(userInfo.phone);

    const isAllFilled =
        !!userInfo.nickname.trim() &&
        !!userInfo.birthDate.trim() &&
        !!userInfo.phone.trim() &&
        !!userInfo.verificationCode.trim() &&
        isRequested &&
        !isExpired;

    const [selectedImage, setSelectedImage] = useState<File | null>(null);
    const location = useLocation();
    const passedAgreements: string[] = location.state?.agreements ?? [];

    const signupMutation = useSignup();

    const handleSubmit = () => {
        if (!validate()) return;

        signupMutation.mutate({
            nickname: userInfo.nickname,
            phone: userInfo.phone,
            phoneVerificationCode: userInfo.verificationCode,
            birthDate: parseInt(userInfo.birthDate),
            image: selectedImage,
            agreements: passedAgreements,
        });
    };

    useEffect(() => {
        sessionStorage.removeItem("kakao_login_sent");
    }, []);

    return (
        <>
            <Header showBackButton title={"회원가입"} />
            <PageWrapper hasHeader>
                <Wrapper.FlexBox justifyContent="center">
                    <ProfileAdd onImageChange={setSelectedImage} />
                </Wrapper.FlexBox>
                <Section>
                    <Text.Body1>닉네임</Text.Body1>
                    <Input
                        value={userInfo.nickname}
                        onChange={handleInputChange("nickname")}
                        placeholder="닉네임을 입력하세요."
                        bottomMessage={errors.nickname}
                    />
                </Section>
                <Section>
                    <Text.Body1>생년월일</Text.Body1>
                    <Input
                        value={userInfo.birthDate}
                        onChange={handleInputChange("birthDate")}
                        placeholder="YYYYMMDD를 입력하세요."
                        bottomMessage={errors.birthDate}
                    />
                </Section>
                <Section>
                    <Text.Body1>전화번호</Text.Body1>
                    <Wrapper.FlexBox gap="4px" width="100%">
                        <Input
                            value={userInfo.phone}
                            onChange={handleInputChange("phone")}
                            placeholder="전화번호를 입력하세요."
                            bottomMessage={errors.phone || verificationMessage}
                            messageColor={errors.phone ? "Red1" : "Gray4"}
                        />
                        <Button
                            width="small"
                            height="small"
                            label="인증 요청 버튼"
                            onClick={requestVerification}
                            disabled={isCooldown || !/^010\d{8}$/.test(userInfo.phone)}
                            isActive={!isCooldown && /^010\d{8}$/.test(userInfo.phone)}
                        >
                            {isRequested ? "재전송" : "인증 요청"}
                        </Button>
                    </Wrapper.FlexBox>
                </Section>
                <Section>
                    <Text.Body1>전화번호 인증</Text.Body1>
                    <Input
                        value={userInfo.verificationCode}
                        onChange={handleInputChange("verificationCode")}
                        placeholder="인증번호를 입력하세요."
                        rightIcon={<VerificationTimer timer={timer} />}
                        bottomMessage={
                            isStarted && isExpired
                                ? "제한시간을 초과하여 인증에 실패하였습니다.\n‘재전송’ 버튼을 눌러 새로운 인증번호를 받아주세요."
                                : errors.verificationCode
                        }
                    />
                </Section>
                <ButtonWrapper>
                    <Button
                        label="가입 완료 버튼"
                        width="large"
                        onClick={handleSubmit}
                        disabled={!isAllFilled}
                        isActive={isAllFilled}
                    >
                        가입 완료
                    </Button>
                </ButtonWrapper>
            </PageWrapper>
        </>
    );
}

const Section = styled.div`
    margin-bottom: 6px;
`;

const ButtonWrapper = styled.div`
    margin-top: 40px;
`;
