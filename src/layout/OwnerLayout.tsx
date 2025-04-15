import Nav from "@/components/Nav";
import PageWrapper from "@/components/PageWrapper";
import { Outlet } from "react-router-dom";
import styled from "@emotion/styled";

export default function OwnerLayout() {
    return (
        <PageWrapper hasNav>
            <ContentWrapper>
                <Outlet />
            </ContentWrapper>
            <Nav version="owner" />
        </PageWrapper>
    );
}

const ContentWrapper = styled.div`
    padding: 30px;
    overflow-y: auto;
`;
