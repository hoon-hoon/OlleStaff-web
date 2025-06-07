import Header from "@/components/Header";
import Oops from "@/components/Oops";
import PageWrapper from "@/components/PageWrapper";
import TabSelector from "@/components/TabSelector";
import { OwnerTabTypes, TAB_LABELS } from "@/constants/tabs";
import { Wrapper } from "@/styles/Wrapper";
import { useMemo, useState } from "react";
import { useMyEmploymentList } from "@/hooks/owner/employment/useMyEmploymentList";
import styled from "@emotion/styled";
import { Text } from "@/styles/Text";
import { GuesthouseListItem } from "@/components/GuesthouseList/GuesthouseListItem";

export default function RecruitListPage() {
    const [sort, setSort] = useState<OwnerTabTypes["MY_RECRUIT"]>("전체");
    const [isTrashIconClicked, setIsTrashIconClicked] = useState(false);

    const { data } = useMyEmploymentList();

    const filteredRecruits = useMemo(() => {
        if (!data) return [];
        if (sort === "전체") return data;
        if (sort === "진행중인 공고") return data.filter(item => !item.closed);
        if (sort === "마감공고") return data.filter(item => item.closed);
        return data;
    }, [sort, data]);
    const [checkedIds, setCheckedIds] = useState<number[]>([]);

    const toggleTrashMode = () => {
        setIsTrashIconClicked(prev => !prev);
        setCheckedIds([]);
    };

    const handleToggleCheck = (id: number) => {
        setCheckedIds(prev => (prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]));
    };

    return (
        <>
            <Header title="나의 공고" />
            <PageWrapper hasHeader>
                <Wrapper.FlexBox>
                    <TabSelector
                        labels={[...TAB_LABELS.OWNER.MY_RECRUIT]}
                        selected={sort}
                        onChange={value => setSort(value as OwnerTabTypes["MY_RECRUIT"])}
                        variant="bold"
                    />
                    <TrashIcon
                        src={isTrashIconClicked ? "/icons/trashActive.svg" : "/icons/trash.svg"}
                        alt="휴지통"
                        onClick={toggleTrashMode}
                    />
                </Wrapper.FlexBox>

                {isTrashIconClicked && filteredRecruits.length > 0 && (
                    <SelectAllWrapper
                        onClick={() => {
                            const allIds = filteredRecruits.map(item => item.employmentId);
                            const isAllSelected = allIds.every(id => checkedIds.includes(id));
                            setCheckedIds(isAllSelected ? [] : allIds);
                        }}
                    >
                        <Text.Body1 color={checkedIds.length === filteredRecruits.length ? "Black" : "Gray2"}>
                            전체 선택
                        </Text.Body1>
                    </SelectAllWrapper>
                )}

                <Wrapper.FlexBox direction="column" gap="20px">
                    {filteredRecruits.length > 0 ? (
                        filteredRecruits.map(item => (
                            <GuesthouseListItem
                                key={item.employmentId}
                                {...item}
                                isTrashIconActive={isTrashIconClicked}
                                isChecked={checkedIds.includes(item.employmentId)}
                                onCheckToggle={handleToggleCheck}
                            />
                        ))
                    ) : (
                        <Wrapper.FlexBox gap="12px" alignItems="center" direction="column" padding="50% 0">
                            <Oops
                                message="작성된 나의 공고가 없어요."
                                description={`홈 > 게시글 작성하기로\n새로운 공고를 등록해 보세요!`}
                            />
                        </Wrapper.FlexBox>
                    )}
                </Wrapper.FlexBox>
            </PageWrapper>
        </>
    );
}

const TrashIcon = styled.img`
    width: 22px;
    height: 100%;
    cursor: pointer;
`;

const SelectAllWrapper = styled.div`
    display: flex;
    padding-bottom: 10px;
    cursor: pointer;
`;
