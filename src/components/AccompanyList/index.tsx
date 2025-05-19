import styled from "@emotion/styled";
import { AccompanyListItem } from "./AccompanyListItem";
import { AccompanyListItemProps } from "@/types/accompany";

interface AccompanyListProps {
    data: AccompanyListItemProps[];
}

export const AccompanyList = ({ data }: AccompanyListProps) => {
    return (
        <Wrapper>
            {data.map((item, index) => (
                <AccompanyListItem key={index} {...item} />
            ))}
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
`;
