import Nav from "@/components/Nav";
import PageWrapper from "@/components/PageWrapper";
import { Outlet } from "react-router-dom";

export default function OwnerLayout() {
    return (
        <PageWrapper hasNav>
            <Outlet />
            <Nav version="owner" />
        </PageWrapper>
    );
}
