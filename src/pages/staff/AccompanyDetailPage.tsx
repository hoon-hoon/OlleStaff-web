import Header from "@/components/Header";
import PageWrapper from "@/components/PageWrapper";
import { Text } from "@/styles/Text";
import { AccompanyListItemProps } from "@/types/accompany";
import { timeAgo } from "@/utils/date";
import styled from "@emotion/styled";
import { useLocation } from "react-router-dom";

export default function AccompanyDetailPage() {
    const { state } = useLocation();

    const { accompany } = state as { accompany: AccompanyListItemProps };
    const { title, content, images, createdAt, userNickname, likeCount, commentCount } = accompany;
    return (
        <>
            <Header showBackButton title="" />
            <PageWrapper hasHeader>
                <MetaInfo>
                    <ProfileImage src="/images/profile1.png" />
                    <MetaInfoText>
                        <Text.Body1_1>{userNickname}</Text.Body1_1>
                        <Text.Body2_1 color="Gray4">{timeAgo(createdAt)} 작성</Text.Body2_1>
                    </MetaInfoText>
                </MetaInfo>

                <Title>{title}</Title>

                <Content style={{ whiteSpace: "pre-wrap" }}>{content}</Content>

                {images.length > 0 && (
                    <ImageGrid>
                        {images.map((url, idx) => (
                            <PostImage key={idx} src={url} alt={`post-img-${idx}`} />
                        ))}
                    </ImageGrid>
                )}

                <ReactionBar>
                    <IconWrapper>
                        <Icon src="/Icon/heart_black.svg" />
                        <Text.Body1 style={{ marginTop: "4px" }}>{likeCount}</Text.Body1>
                    </IconWrapper>
                    <IconWrapper>
                        <Icon src="/Icon/comment_black.svg" />
                        <Text.Body1 style={{ marginTop: "4px" }}>{commentCount}</Text.Body1>
                    </IconWrapper>
                </ReactionBar>
            </PageWrapper>
            <Divider />
            <PageWrapper>댓글</PageWrapper>
        </>
    );
}

const ProfileImage = styled.img`
    width: 42px;
    height: 42px;
    border-radius: 6px;
    object-fit: cover;
`;

const MetaInfo = styled.div`
    display: flex;
    gap: 8px;
    align-items: center;
    padding-bottom: 10px;
    margin-bottom: 16px;
    border-bottom: 1px solid ${({ theme }) => theme.color.Gray1};
`;

const MetaInfoText = styled.div`
    display: flex;
    padding-top: 1px;
    flex-direction: column;
    justify-content: center;
    row-gap: 2px;
`;

const Title = styled(Text.Title2_1)`
    margin-bottom: 12px;
`;

const Content = styled(Text.Body1)`
    white-space: pre-wrap;
    margin-bottom: 16px;
`;

const ImageGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 6px;
    margin-bottom: 16px;
`;

const PostImage = styled.img`
    width: 100%;
    border-radius: 8px;
    aspect-ratio: 1/1;
    object-fit: cover;
`;

const ReactionBar = styled.div`
    display: flex;
    gap: 12px;
    margin-bottom: 16px;
`;

const IconWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Icon = styled.img`
    width: 24px;
    height: 24px;
    object-fit: contain;
`;

const Divider = styled.div`
    border-bottom: 1px solid ${({ theme }) => theme.color.Gray1};
    margin: 0px -30px 20px -30px;
`;
