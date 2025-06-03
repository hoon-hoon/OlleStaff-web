import Header from "@/components/Header";
import PageWrapper from "@/components/PageWrapper";

export default function MyPostsPage() {
    return (
        <>
            <Header showBackButton title="내가 작성한 댓글" />
            <PageWrapper hasHeader>wrap</PageWrapper>
        </>
    );
}
