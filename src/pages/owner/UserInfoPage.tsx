import Header from "@/components/Header";
import PageWrapper from "@/components/PageWrapper";
import SettingMenuItem from "@/components/Setting/SettingMenuItem";
import { useUserStore } from "@/store/useUserStore";
import { Text } from "@/styles/Text";
import { Wrapper } from "@/styles/Wrapper";

export default function UserInfoPage() {
    const user = {
        image: "/Icon/defaultUser.svg", // 임시 프로필 이미지
        name: useUserStore(state => state.nickname),
    };

    return (
        <>
            <Header title="내 정보" />
            <PageWrapper hasHeader>
                <Wrapper.FlexBox direction="column" alignItems="center" gap="12px">
                    <img src={user.image} alt="프로필이미지" style={{ width: "94px" }} />
                    <Text.Title3_1>{user.name}</Text.Title3_1>
                </Wrapper.FlexBox>

                <Wrapper.FlexBox direction="column" gap="12px">
                    <Text.Body1_1>게시글 관리</Text.Body1_1>
                    <div>
                        <SettingMenuItem title="내가 작성한 공고" link="/owner/recruitments-ongoing" />
                        <SettingMenuItem title="주의사항 수정하기" link="/" />
                        <SettingMenuItem title="후기관리" link="/" />
                    </div>
                </Wrapper.FlexBox>
            </PageWrapper>
        </>
    );
}
