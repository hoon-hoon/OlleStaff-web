import styled from "@emotion/styled";
import { Text } from "@/styles/Text";
import { useNavigate } from "react-router-dom";

const categories = [
    { label: "대규모", icon: "/Icon/group.svg" },
    { label: "소규모", icon: "/Icon/small.svg" },
    { label: "뷰맛집", icon: "/Icon/view.svg" },
    { label: "힐링", icon: "/Icon/healing.svg" },
    { label: "체험", icon: "/Icon/experience.svg" },
];

export default function CategoryList() {
    const navigate = useNavigate();

    const handleClick = (label: string) => {
        navigate(`/staff/guesthouse/category?label=${encodeURIComponent(label)}`);
    };

    return (
        <Wrapper>
            {categories.map(({ label, icon }) => (
                <Category key={label} onClick={() => handleClick(label)}>
                    <img src={icon} width="38" height="38" alt={label} />
                    <Text.Body2_1>{label}</Text.Body2_1>
                </Category>
            ))}
        </Wrapper>
    );
}

const Category = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
`;

const Wrapper = styled.div`
    margin-top: 16px;
    display: flex;
    gap: 36px;
    padding-bottom: 8px;
`;
