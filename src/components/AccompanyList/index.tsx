import styled from "@emotion/styled";
import { AccompanyListItem, AccompanyListItemProps } from "./AccompanyListItem";

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
