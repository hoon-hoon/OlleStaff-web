import styled from "@emotion/styled";

import { Text } from "@/styles/Text";
import theme from "@/styles/theme";
import { Wrapper } from "@/styles/Wrapper";

export default function ReviewListItem() {
    return (
        <Card>
            <Wrapper.FlexBox justifyContent="space-between" alignItems="center">
                <Text.Body1_1>결 게스트하우스 스탭 모집!</Text.Body1_1>
                <img src="/icons/more.svg" alt="더보기" />
            </Wrapper.FlexBox>

            <ContentWrapper>
                <UserWrapper>
                    <Text.Body2_1>weifj님</Text.Body2_1>
                    <img src="/icons/fullStar.svg" alt="별" />
                    <Text.Body2_1>4.5</Text.Body2_1>
                </UserWrapper>

                <ImageList>
                    <img src="/images/guesthouse1.png" />
                    <img src="/images/guesthouse1.png" />
                    <img src="/images/guesthouse3.png" />
                </ImageList>

                <Text.Body2>
                    Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate...
                    <Text.Body2_1 color="Gray3">더보기</Text.Body2_1>
                </Text.Body2>

                <Meta>
                    <Text.Body3_1 color="Gray3">스탭에게만 공개</Text.Body3_1>
                    <Text.Body3_1 color="Gray3"> | </Text.Body3_1>
                    <Text.Body3_1 color="Gray3">10분전</Text.Body3_1>
                </Meta>
            </ContentWrapper>

            <CommentWrapper>
                <Wrapper.FlexBox justifyContent="space-between" alignItems="center">
                    <Text.Body1_1>맥스</Text.Body1_1> <img src="/icons/more.svg" alt="더보기" />
                </Wrapper.FlexBox>
                <Text.Body2>
                    weifj님 그동안 고생하셨어요 ㅎㅎ 덕분에 좋은 추억이 되었어요 좋은 후기 감사합니다!!
                </Text.Body2>
                <Wrapper.FlexBox justifyContent="flex-end">
                    <Text.Body3 color="Gray4">03/29 15:23</Text.Body3>
                </Wrapper.FlexBox>
            </CommentWrapper>
        </Card>
    );
}

const Card = styled.div`
    border: 1px solid ${theme.color.Gray1};
    border-radius: 12px;
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    background: ${theme.color.White};
`;

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    border-top: 1px solid #e4e4e4;
    padding-top: 10px;
`;

const CommentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 12px;
    padding: 12px;
    background: #f8f8f8;
    border-radius: 8px;
    gap: 5px;
`;

const UserWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 6px;
`;

const ImageList = styled.div`
    display: flex;
    gap: 6px;
    img {
        width: 80px;
        height: 80px;
        border-radius: 8px;
        object-fit: cover;
    }
`;

const Meta = styled.div`
    display: flex;
    gap: 6px;
`;
