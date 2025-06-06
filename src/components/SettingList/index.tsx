import { Text } from "@/styles/Text";
import SettingListItem from "./SettingListItem";
import { Wrapper } from "@/styles/Wrapper";

type MenuItem = {
    title: string;
    link: string;
};

type MenuGroup = {
    id: number;
    title: string;
    content: MenuItem[];
};

interface MenuListProps {
    data: MenuGroup[];
}

export default function SettingList({ data }: MenuListProps) {
    return (
        <Wrapper.FlexBox direction="column" margin="32px 0" gap="32px">
            {data.map(group => (
                <div key={group.id}>
                    <Wrapper.FlexBox height="40px" style={{ borderBottom: "1px solid #D9D9D9" }}>
                        <Text.Title3_1>{group.title}</Text.Title3_1>
                    </Wrapper.FlexBox>

                    {group.content.map(item => (
                        <SettingListItem title={item.title} link={item.link} key={item.title} />
                    ))}
                </div>
            ))}
        </Wrapper.FlexBox>
    );
}
