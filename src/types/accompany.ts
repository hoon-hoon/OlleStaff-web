export interface AccompanyListItemProps {
    id: number;
    title: string;
    content: string;
    createdAt: number;
    updatedAt: number;
    images: string[];
    userId: number;
    userNickname: string;
    userImage?: string;
    like: boolean;
    likeCount: number;
    commentCount: number;
}
