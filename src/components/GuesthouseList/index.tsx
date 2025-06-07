import styled from "@emotion/styled";
import { GuesthouseListItem } from "./GuesthouseListItem";
import { GuesthouseListItemProps } from "@/types/guesthouse";

interface GuesthouseListProps {
    data: GuesthouseListItemProps[];
    isTrashIconClicked?: boolean;
    checkedIds?: number[];
    onToggleCheck?: (id: number) => void;
}

export const GuesthouseList = ({ data, isTrashIconClicked, checkedIds, onToggleCheck }: GuesthouseListProps) => {
    return (
        <Wrapper>
            {data.map(item => (
                <GuesthouseListItem
                    key={item.employmentId}
                    {...item}
                    isTrashIconActive={isTrashIconClicked}
                    isChecked={checkedIds?.includes(item.employmentId)}
                    onCheckToggle={onToggleCheck}
                />
            ))}
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`;
