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
            <ScrollableContent>{children}</ScrollableContent>
        </Wrapper>
    );
}

const Wrapper = styled.div<{ $hasHeader: boolean; $hasNav: boolean }>`
    width: 100%;
    height: ${({ $hasHeader, $hasNav }) => {
        if ($hasHeader && $hasNav) {
            return `calc(100vh - ${theme.size.HeaderHeight} - ${theme.size.NavHeight})`;
        }
        if ($hasHeader) {
            return `calc(100vh - ${theme.size.HeaderHeight})`;
        }
        if ($hasNav) {
            return `calc(100vh - ${theme.size.NavHeight})`;
        }
        return "100vh";
    }};

    display: flex;
    flex-direction: column;
    margin-top: ${({ $hasHeader }) => ($hasHeader ? theme.size.HeaderHeight : "0px")};
    margin-bottom: ${({ $hasNav }) => ($hasNav ? theme.size.NavHeight : "0px")};
    overflow: hidden;
`;

const ScrollableContent = styled.div`
    flex: 1;
    overflow-y: auto;
    width: 100%;
    background-color: rgba(255, 255, 0, 0.2);
    scrollbar-width: none;
`;
