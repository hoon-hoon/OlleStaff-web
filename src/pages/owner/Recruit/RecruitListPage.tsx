import { GuesthouseList } from "@/components/GuesthouseList";
import Header from "@/components/Header";
import Oops from "@/components/Oops";
import PageWrapper from "@/components/PageWrapper";
import TabSelector from "@/components/TabSelector";
import { OwnerTabTypes, recruitTabToQueryType, TAB_LABELS } from "@/constants/tabs";
import { Wrapper } from "@/styles/Wrapper";
import { useMemo, useState } from "react";
import { useMyEmploymentList } from "@/hooks/owner/employment/useMyEmploymentList";

type RecruitTab = OwnerTabTypes["MY_RECRUIT"]; // "전체", "진행중인 공고", "마감공고"

export default function RecruitListPage() {
    const [sort, setSort] = useState<RecruitTab>("전체");
    const selectedType = recruitTabToQueryType[sort];
    const { data } = useMyEmploymentList(selectedType);

    const filteredRecruits = useMemo(() => {
        if (!data) return [];
        if (sort === "전체") return data;
        if (sort === "진행중인 공고") return data.filter(item => !item.closed);
        if (sort === "마감공고") return data.filter(item => item.closed);
        return data;
    }, [sort, data]);

    return (
        <>
            <Header title="나의 공고" />
            <PageWrapper hasHeader>
                <TabSelector
                    labels={[...TAB_LABELS.OWNER.MY_RECRUIT]}
                    selected={sort}
                    onChange={value => setSort(value as RecruitTab)}
                    variant="bold"
                />

                <Wrapper.FlexBox direction="column" gap="20px">
                    {filteredRecruits.length > 0 ? (
                        filteredRecruits.map(item => <GuesthouseList key={item.employmentId} data={filteredRecruits} />)
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
