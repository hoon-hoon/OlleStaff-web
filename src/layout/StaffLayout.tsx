import Nav from "@/components/Nav";
import PageWrapper from "@/components/PageWrapper";
import { Outlet } from "react-router-dom";
import styled from "@emotion/styled";

export default function StaffLayout() {
    return (
        <PageWrapper hasNav>
            <ContentWrapper>
                <Outlet />
            </ContentWrapper>
            <Nav version="staff" />
        </PageWrapper>
    );
}

const ContentWrapper = styled.div`
    padding: 30px;
    overflow-y: auto;
`;
