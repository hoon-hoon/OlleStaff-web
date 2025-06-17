import { Outlet } from "react-router-dom";
import styled from "@emotion/styled";
import PageWrapper from "@/components/PageWrapper";

export default function FullscreenLayout() {
    return (
        <PageWrapper isRoot>
            <FullHeightContent>
                <Outlet />
            </FullHeightContent>
        </PageWrapper>
    );
}

const FullHeightContent = styled.div`
    height: 100%;
    width: 100%;
    overflow: hidden;
`;
