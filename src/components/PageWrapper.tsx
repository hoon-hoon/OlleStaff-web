import styled from "@emotion/styled";
import theme from "@/styles/theme";

type PageWrapperProps = {
    children: React.ReactNode;
    hasHeader?: boolean;
    hasNav?: boolean;
    className?: string;
};

export default function PageWrapper({ children, hasHeader = false, hasNav = false, className }: PageWrapperProps) {
    return (
        <Wrapper $hasHeader={hasHeader} $hasNav={hasNav} className={className}>
            <InnerContent>{children}</InnerContent>
        </Wrapper>
    );
}

const Wrapper = styled.div<{ $hasHeader: boolean; $hasNav: boolean }>`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding-top: ${({ $hasHeader }) => ($hasHeader ? theme.size.HeaderHeight : "0px")};
    padding-bottom: ${({ $hasNav }) => ($hasNav ? theme.size.NavHeight : "0px")};
    margin: 0;
    overflow: hidden;
`;

const InnerContent = styled.div`
    flex: 1;
    overflow-y: auto;
    width: 100%;
    background-color: rgba(255, 255, 0, 0.2);
    scrollbar-width: none;
`;
