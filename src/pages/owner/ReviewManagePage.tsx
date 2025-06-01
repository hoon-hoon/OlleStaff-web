import Header from "@/components/Header";
import PageWrapper from "@/components/PageWrapper";
import ReviewList from "@/components/ReviewList";
import { Text } from "@/styles/Text";
import { Wrapper } from "@/styles/Wrapper";
import { ReviewListItemProps } from "@/types/reviews";

// const mockData: ReviewListItemProps = {
//     hasNext: false,
//     countReview: 2,
//     averageRating: 4.5,
//     allReviewInfoDTOS: [
//         {
//             reviewId: 1,
//             rating: 4.8,
//             title: "올레 게스트하우스",
//             nickName: "테스트유저111",
//             images: [],
//             review: "깔끔하고 친절했어요!깔끔하고 친절했어요!깔끔하고 친절했어요!깔끔하고 친절했어요!깔끔하고 친절했어요!깔끔하고 친절했어요!깔끔하고 친절했어요!깔끔하고 친절했어요!깔끔하고 친절했어요!깔끔하고 친절했어요!깔끔하고 친절했어요!깔끔하고 친절했어요!깔끔하고 친절했어요!깔끔하고 친절했어요!깔끔하고 친절했어요!깔끔하고 친절했어요!깔끔하고 친절했어요!깔끔하고 친절했어요!깔끔하고 친절했어요!",
//             disclosure: true,
//             reviewComment:
//                 "감사합니다! 또 놀러오세요 :)감사합니다! 또 놀러오세요 :)감사합니다! 또 놀러오세요 :)감사합니다! 또 놀러오세요 :)감사합니다! 또 놀러오세요 :)감사합니다! 또 놀러오세요 :)",
//             reviewDate: 1747900000,
//             reviewCommentDate: 1747900000,
//             hostNickName: "호스트",
//         },
//         {
//             reviewId: 2,
//             rating: 2.2,
//             title: "올레 게스트하우스 공고2",
//             nickName: "테스트22유저22",
//             images: [
//                 "https://media.istockphoto.com/id/1931942677/ko/%EB%B2%A1%ED%84%B0/%EC%96%B4%EB%A6%B0-%EC%95%84%EB%93%A4%EC%97%90%EA%B2%8C-%ED%82%A4%EC%8A%A4%ED%95%98%EB%8A%94-%ED%96%89%EB%B3%B5%ED%95%9C-%EC%97%84%EB%A7%88%EC%99%80-%EC%95%84%EB%B9%A0.jpg?s=612x612&w=is&k=20&c=p97JRWHfdsRYAlu5Cnx9tvCUl_jBSTxyXedZLRUUD_Q=",
//                 "https://media.istockphoto.com/id/1931942677/ko/%EB%B2%A1%ED%84%B0/%EC%96%B4%EB%A6%B0-%EC%95%84%EB%93%A4%EC%97%90%EA%B2%8C-%ED%82%A4%EC%8A%A4%ED%95%98%EB%8A%94-%ED%96%89%EB%B3%B5%ED%95%9C-%EC%97%84%EB%A7%88%EC%99%80-%EC%95%84%EB%B9%A0.jpg?s=612x612&w=is&k=20&c=p97JRWHfdsRYAlu5Cnx9tvCUl_jBSTxyXedZLRUUD_Q=",
//                 "https://media.istockphoto.com/id/1931942677/ko/%EB%B2%A1%ED%84%B0/%EC%96%B4%EB%A6%B0-%EC%95%84%EB%93%A4%EC%97%90%EA%B2%8C-%ED%82%A4%EC%8A%A4%ED%95%98%EB%8A%94-%ED%96%89%EB%B3%B5%ED%95%9C-%EC%97%84%EB%A7%88%EC%99%80-%EC%95%84%EB%B9%A0.jpg?s=612x612&w=is&k=20&c=p97JRWHfdsRYAlu5Cnx9tvCUl_jBSTxyXedZLRUUD_Q=",
//             ],
//             review: "깔끔하고 친절했어요!깔끔하고 친절했어요!",
//             disclosure: false,
//             reviewComment: null,
//             reviewDate: 1747900000,
//             reviewCommentDate: 1747900000,
//             hostNickName: "호스트",
//         },
//     ],
// };

const mockData: ReviewListItemProps = {
    hasNext: false,
    countReview: 0,
    averageRating: 0,
    allReviewInfoDTOS: [],
};

export default function ReviewManagePage() {
    const { countReview, averageRating, allReviewInfoDTOS } = mockData;

    const hasReview = countReview > 0 && allReviewInfoDTOS.length > 0;

    return (
        <>
            <Header showBackButton title="후기 관리" />
            <PageWrapper hasHeader>
                <Wrapper.FlexBox direction="column" gap="20px" padding="30px">
                    <Wrapper.FlexBox direction="column" gap="8px">
                        <Text.Body2_1>총 {countReview}개의 후기</Text.Body2_1>
                        {/* <Text.Body1_1>{allReviewInfoDTOS[0].hostNickName}님의 평균 평점</Text.Body1_1> */}
                        <Wrapper.FlexBox gap="6px" alignItems="center">
                            <img src="/icons/fullStar.svg" alt="별" />
                            <Text.Title2_2>
                                {averageRating} <Text.Title2_1>점</Text.Title2_1>
                            </Text.Title2_2>
                        </Wrapper.FlexBox>
                    </Wrapper.FlexBox>

                    {hasReview ? (
                        <ReviewList data={mockData} />
                    ) : (
                        <Wrapper.FlexBox gap="12px" alignItems="center" direction="column" padding="50% 0">
                            <img src="/icons/oops.svg" alt="작성된 후기 없음" />
                            <Text.Body1_1 color="Gray3">작성된 후기가 없어요.</Text.Body1_1>
                        </Wrapper.FlexBox>
                    )}
                </Wrapper.FlexBox>
            </PageWrapper>
        </>
    );
}
