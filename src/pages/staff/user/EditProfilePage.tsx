import Header from "@/components/Header";
import PageWrapper from "@/components/PageWrapper";
import { useUserStore } from "@/store/useUserStore";
import { Wrapper } from "@/styles/Wrapper";
import Input from "@/components/Input";

export default function EditProfilePage() {
    const nickname = useUserStore(state => state.nickname);
    const profileImage = useUserStore(state => state.profileImage);
    const birth = "19981211";
    const phone = "01012345678";

    return (
        <>
            <Header showBackButton title="개인정보 수정" rightIconSrc="/icons/pencil.svg" onRightClick={() => {}} />
            <PageWrapper hasHeader>
                <Wrapper.FlexBox direction="column" alignItems="center" gap="12px">
                    <img src={profileImage} alt="프로필이미지" style={{ width: "94px", height: "94px" }} />
                </Wrapper.FlexBox>

                <Wrapper.FlexBox direction="column" gap="12px"></Wrapper.FlexBox>
                <Input readOnly inputTitle="닉네임" value={nickname} onChange={() => {}}></Input>
                <Input readOnly inputTitle="생년월일" value={birth} onChange={() => {}}></Input>
                <Input readOnly inputTitle="전화번호" value={phone} onChange={() => {}}></Input>
            </PageWrapper>
        </>
    );
}
