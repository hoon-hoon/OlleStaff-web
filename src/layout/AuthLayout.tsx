import { Outlet } from "react-router-dom";
import styled from "@emotion/styled";
import PageWrapper from "@/components/PageWrapper";

export default function AuthLayout() {
    return (
        <>
            <PageWrapper>
                <ContentWrapper>
                    <Outlet />
                </ContentWrapper>
            </PageWrapper>
        </>
    );
}

const ContentWrapper = styled.div`
    padding: 30px;
    overflow-y: auto;
`;
