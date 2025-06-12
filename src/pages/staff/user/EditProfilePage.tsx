import Header from "@/components/Header";
import PageWrapper from "@/components/PageWrapper";
import { Wrapper } from "@/styles/Wrapper";
import Input from "@/components/Input";
import { useEffect, useState } from "react";
import { Button } from "@/components/Button";
import theme from "@/styles/theme";
import { useFetchUserProfile } from "@/hooks/staff/useFetchUserProfile";
import useValidation from "@/hooks/useValidation";
import { usePhoneAuth } from "@/hooks/auth/usePhoneAuth";
import { VerificationTimer } from "@/components/VerificationTimer";
import { useUpdateUserProfile } from "@/hooks/staff/useUpdateUserProfile";
import Modal from "@/components/Modal";
import { useNavigate } from "react-router-dom";
import { Text } from "@/styles/Text";

export default function EditProfilePage() {
    const [isEditMode, setIsEditMode] = useState(false);

    const { data: user, isLoading, isError } = useFetchUserProfile();
    const updateMutation = useUpdateUserProfile();
    const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
    const [isCompleteModalOpen, setIsCompleteModalOpen] = useState(false);
    const navigate = useNavigate();

    const { userInfo, errors, handleInputChange, validate, setUserInfo } = useValidation();
    const {
        timer,
        message: verificationMessage,
        isExpired,
        isStarted,
        isCooldown,
        isRequested,
        requestVerification,
    } = usePhoneAuth(userInfo.phone);

    useEffect(() => {
        if (user) {
            setUserInfo({
                nickname: user.nickname,
                birthDate: user.birthDate,
                phone: user.phone,
                verificationCode: "",
            });
        }
    }, [user, setUserInfo]);

    const handleToggleEdit = () => {
        setIsEditMode(prev => !prev);
    };

    const handleSubmit = () => {
        if (user) {
            if (!validate({ skipBirthDateCheck: true, originalPhone: user.phone })) return;

            updateMutation.mutate(
                {
                    nickname: userInfo.nickname,
                    phone: userInfo.phone,
                    phoneVerificationCode: userInfo.verificationCode,
                    deleteImage: false,
                },
                {
                    onSuccess: () => {
                        setIsCompleteModalOpen(true);
                        setTimeout(() => {
                            setIsCompleteModalOpen(false);
                            navigate("/staff/userinfo");
                        }, 1500);
                    },
                }
            );
        }
    };

    if (isLoading) return <div>불러오는 중...</div>;
    if (isError || !user) return <div>사용자 정보를 불러오지 못했습니다.</div>;

    const isPhoneChanged = userInfo.phone !== user.phone;
    const isVerificationRequired = isEditMode && isPhoneChanged;

    const isFormModified = userInfo.nickname !== user.nickname || userInfo.phone !== user.phone;

    return (
        <>
            <Header
                showBackButton
                title="개인정보 수정"
                rightIconSrc="/icons/pencil.svg"
                onRightClick={handleToggleEdit}
            />
            <PageWrapper hasHeader>
                <Wrapper.FlexBox
                    direction="column"
                    justifyContent="space-between"
                    height={`calc(100vh - ${theme.size.HeaderHeight})`}
                >
                    <div>
                        <Wrapper.FlexBox direction="column" alignItems="center" gap="12px">
                            <img
                                src={user.profileImage || "/icons/defaultUser.svg"}
                                alt="프로필이미지"
                                style={{ width: "94px", height: "94px" }}
                            />
                        </Wrapper.FlexBox>

                        <Wrapper.FlexBox direction="column" gap="12px" margin="20px 0px 0px 0px">
                            <Input
                                readOnly={!isEditMode}
                                inputTitle="닉네임"
                                value={userInfo.nickname}
                                onChange={handleInputChange("nickname")}
                                placeholder="닉네임을 입력하세요."
                                bottomMessage={errors.nickname}
                            />
                            <Input
                                readOnly
                                inputTitle="생년월일"
                                value={userInfo.birthDate}
                                onChange={() => {}}
                                bottomMessage={""}
                            />

                            <Wrapper.FlexBox gap="4px" alignItems="center">
                                <Input
                                    readOnly={!isEditMode}
                                    inputTitle="전화번호"
                                    value={userInfo.phone}
                                    onChange={handleInputChange("phone")}
                                    placeholder="전화번호를 입력하세요."
                                    bottomMessage={errors.phone || (isVerificationRequired ? verificationMessage : "")}
                                    messageColor={errors.phone ? "Red1" : "Gray4"}
                                />
                                {isVerificationRequired && (
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
                                )}
                            </Wrapper.FlexBox>

                            {isVerificationRequired && (
                                <Input
                                    inputTitle="전화번호 인증"
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
                            )}
                        </Wrapper.FlexBox>
                    </div>

                    {isEditMode && (
                        <Wrapper.FlexBox padding="0px 0px 40px 0px" justifyContent="center">
                            <Button
                                label="수정 완료"
                                width="large"
                                onClick={() => setIsConfirmModalOpen(true)}
                                isActive={isFormModified}
                                disabled={!isFormModified}
                            >
                                수정 완료
                            </Button>
                        </Wrapper.FlexBox>
                    )}
                </Wrapper.FlexBox>
                {isConfirmModalOpen && (
                    <Modal
                        variant="confirm"
                        title="개인정보 수정"
                        message="개인정보 수정을 완료 하시겠습니까?"
                        cancelText="취소"
                        confirmText="확인"
                        handleModalClose={() => setIsConfirmModalOpen(false)}
                        onConfirm={() => {
                            setIsConfirmModalOpen(false);
                            handleSubmit();
                        }}
                    />
                )}
                {isCompleteModalOpen && (
                    <Modal variant="page" handleModalClose={() => setIsCompleteModalOpen(false)}>
                        <Wrapper.FlexBox direction="column" justifyContent="center" alignItems="center" gap="12px">
                            <img src="/icons/checked.svg" alt="완료 아이콘" />
                            <Text.Title3_1>개인정보 수정 완료</Text.Title3_1>
                        </Wrapper.FlexBox>
                    </Modal>
                )}
            </PageWrapper>
        </>
    );
}
