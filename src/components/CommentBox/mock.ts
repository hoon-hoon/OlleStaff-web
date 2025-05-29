import { ReplyType } from "@/types/comment";

export const mockComments = [
    {
        id: 1,
        content: "아쉽게도 일정이 안맞을거 같아요 😢",
        createdAt: 1747900000,
        updatedAt: 1747900000,
        userId: 1,
        userNickname: "훈식",
        userImage: "/images/profile1.png",
        replyCount: 1,
    },
    {
        id: 2,
        content: "저도 갈래요",
        createdAt: 1747920000,
        updatedAt: 1747920000,
        userId: 2,
        userNickname: "나는스태프고주희",
        userImage: "/images/profile1.png",
        replyCount: 2,
    },
];

export const mockReplies: Record<number, ReplyType[]> = {
    1: [
        {
            id: 1,
            content: "다음에 같이가시죠!",
            createdAt: 1747990530,
            updatedAt: 1747990530,
            userId: 3,
            userNickname: "창언",
            userImage: "/images/profile1.png",
        },
    ],
    2: [
        {
            id: 1,
            content: "감사합니다",
            createdAt: 1747994130,
            updatedAt: 1747994130,
            userId: 1,
            userNickname: "훈식",
            userImage: "/images/profile1.png",
        },
        {
            id: 2,
            content: "어디로 가시나요?",
            createdAt: 1747997730,
            updatedAt: 1747997730,
            userId: 2,
            userNickname: "나는스태프고주희",
            userImage: "/images/profile1.png",
        },
    ],
};
