import Header from "@/components/Header";
import PageWrapper from "@/components/PageWrapper";
import { AccompanyList } from "@/components/AccompanyList";
import { useMyAccompanyList } from "@/hooks/staff/useMyAccompanyList";

export default function MyPostsPage() {
    const { data, isLoading } = useMyAccompanyList();

    return (
        <>
            <Header showBackButton title="내가 작성한 게시글" />
            <PageWrapper hasHeader>
                {isLoading ? <div>로딩 중...</div> : <AccompanyList data={data || []} />}
            </PageWrapper>
        </>
    );
}
