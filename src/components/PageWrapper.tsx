import styled from "@emotion/styled";
import theme from "@/styles/theme";

type PageWrapperProps = {
    children: React.ReactNode;
    hasHeader?: boolean;
    hasNav?: boolean;
    className?: string;
    isRoot?: boolean;
};

export default function PageWrapper({
    children,
    hasHeader = false,
    hasNav = false,
    className,
    isRoot = false,
}: PageWrapperProps) {
    return (
        <Wrapper $hasHeader={hasHeader} $hasNav={hasNav} className={className} $isRoot={isRoot}>
            <InnerContent $hasHeader={hasHeader} $hasNav={hasNav} $isRoot={isRoot}>
                {children}
            </InnerContent>
        </Wrapper>
    );
}

const Wrapper = styled.div<{ $hasHeader: boolean; $hasNav: boolean; $isRoot: boolean }>`
    width: 100%;
    height: ${({ $isRoot }) => ($isRoot ? "100vh" : "100%")};
    display: flex;
    flex-direction: column;
    padding-top: ${({ $hasHeader }) => ($hasHeader ? theme.size.HeaderHeight : "0px")};
    padding-bottom: ${({ $hasNav }) => ($hasNav ? theme.size.NavHeight : "0px")};
    margin: 0;
`;
const InnerContent = styled.div<{ $hasHeader: boolean; $hasNav: boolean; $isRoot: boolean }>`
    width: 100%;
    flex: ${({ $isRoot }) => ($isRoot ? "1" : "none")};
    height: ${({ $hasHeader, $hasNav, $isRoot }) => {
        if (!$isRoot) return "100%";
        if ($hasHeader && $hasNav) {
            return `calc(100% - ${theme.size.HeaderHeight} - ${theme.size.NavHeight})`;
        } else if ($hasHeader) {
            return `calc(100% - ${theme.size.HeaderHeight})`;
        } else if ($hasNav) {
            return `calc(100% - ${theme.size.NavHeight})`;
        }
        return "100%";
    }};
    overflow-y: auto;
    background-color: rgba(255, 255, 0, 0.2);
    scrollbar-width: none;
`;
