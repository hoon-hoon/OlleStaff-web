import styled from "@emotion/styled";
import { GuesthouseListItem } from "./GuesthouseListItem";

import { GuesthouseListItemProps } from "@/types/guesthouse";

interface GuesthouseListProps {
    data: GuesthouseListItemProps[];
}

export const GuesthouseList = ({ data }: GuesthouseListProps) => {
    return (
        <Wrapper>
            {data.map(item => (
                <GuesthouseListItem key={item.employmentId} {...item} />
            ))}
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`;
