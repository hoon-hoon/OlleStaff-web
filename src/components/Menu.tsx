import { Text } from "@/styles/Text";
import { Wrapper } from "@/styles/Wrapper";
import { useNavigate } from "react-router-dom";

type MenuProps = {
  version: "guesthouse" | "staff";
};

const menuItems = {
  guesthouse: [
    { src: "/icons/Home.svg", alt: "홈", label: "홈", path: "/" },
    { src: "/icons/My_notes.svg", alt: "나의 공고", label: "나의 공고", path: "/my-notes" },
    { src: "/icons/chat.svg", alt: "채팅", label: "채팅", path: "/chat" },
    { src: "/icons/user.svg", alt: "내 정보", label: "내 정보", path: "/my-info" },
  ],
  staff: [
    { src: "", alt: "", label: "", path: "/" },
    { src: "", alt: "", label: "", path: "/" },
    { src: "", alt: "", label: "", path: "/" },
    { src: "", alt: "", label: "", path: "/" },
  ],
};

export default function Menu({ version }: MenuProps) {
  const navigate = useNavigate();
  const menu = menuItems[version];

  const handleClick = (path: string) => {
    navigate(path);
  };

  return (
    <Wrapper.AbsoluteBox padding="14px 30px">
      <Wrapper.FlexBox justifyContent="space-between" alignItems="flex-end">
        {menu.map((item, index) => (
          <Wrapper.FlexBox
            width="70px"
            direction="column"
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
    </Wrapper.AbsoluteBox>
  );
}
