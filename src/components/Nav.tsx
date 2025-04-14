import { Text } from "@/styles/Text";
import { Wrapper } from "@/styles/Wrapper";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";

type MenuProps = {
    version: "owner" | "staff";
};

const menuItems = {
    owner: [
        { src: "/MenuHome.svg", alt: "홈", label: "홈", path: "/owner" },
        { src: "/MenuRecruit.svg", alt: "나의 공고", label: "나의 공고", path: "/my-notes" },
        { src: "/MenuChat.svg", alt: "채팅", label: "채팅", path: "/chat" },
        { src: "/MenuUser.svg", alt: "내 정보", label: "내 정보", path: "/ownerinfo" },
    ],
    staff: [
        { src: "/MenuHome.svg", alt: "홈", label: "홈", path: "/staff" },
        { src: "/MenuCompanion.svg", alt: "동행", label: "동행", path: "/companion" },
        { src: "/MenuChat.svg", alt: "채팅", label: "채팅", path: "/chat" },
        { src: "/MenuUser.svg", alt: "내 정보", label: "내 정보", path: "/staffinfo" },
    ],
};

export default function Menu({ version }: MenuProps) {
    const navigate = useNavigate();
    const menu = menuItems[version];

    const handleClick = (path: string) => {
        navigate(path);
    };

    return (
        <>
            <MenuWrapper>
                <Wrapper.FlexBox justifyContent="space-between" alignItems="flex-end">
                    {menu.map((item, index) => (
                        <Wrapper.FlexBox
                            width="70px"
                            height="50px"
                            direction="column"
                            justifyContent="space-between"
                            alignItems="center"
                            gap="14px"
                            key={index}
                            pointer
                            onClick={() => handleClick(item.path)}
                        >
                            <img src={item.src} alt={item.alt} />
                            <Text.Body1_1>{item.label}</Text.Body1_1>
                        </Wrapper.FlexBox>
                    ))}
                </Wrapper.FlexBox>
            </MenuWrapper>
        </>
    );
}

const MenuWrapper = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 393px;
    height: 78px;
    z-index: 10;
    box-shadow: 0px -2px 6px 0px rgba(0, 0, 0, 0.05);
    display: flex;
    align-items: center;
    padding: 0 30px;
    background-color: white;
`;
