import Header from "@/components/Header";
import Nav from "@/components/Nav";
import PageWrapper from "@/components/PageWrapper";

export default function BusinessCertification() {
    return (
        <>
            <PageWrapper hasHeader hasNav>
                <Header showBackButton title="사업자 인증" />

                {[...Array(1000)].map((_, i) => (
                    <div key={i}>긴글이라생각하고우오아아앙 {i + 1}</div>
                ))}

                <Nav version="owner" />
            </PageWrapper>
        </>
    );
}
