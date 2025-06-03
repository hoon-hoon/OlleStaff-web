import Header from "@/components/Header";
import PageWrapper from "@/components/PageWrapper";
import { AccompanyList } from "@/components/AccompanyList";
import { useMyCommentsList } from "@/hooks/staff/useMyCommentsList";

export default function MyCommentsPage() {
    const { data, isLoading } = useMyCommentsList();

    return (
        <>
            <Header showBackButton title="내가 작성한 댓글" />
            <PageWrapper hasHeader>
                {isLoading ? <div>로딩 중...</div> : <AccompanyList data={data || []} />}
            </PageWrapper>
        </>
    );
}
