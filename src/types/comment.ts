export interface BaseComment {
    id: number;
    content: string;
    createdAt: number;
    updatedAt: number;
    userId: number;
    userNickname: string;
    userImage: string;
}

export interface CommentType extends BaseComment {
    replyCount: number;
}

export interface ReplyType extends BaseComment {}

export interface CommentState {
    openReplies: Record<number, boolean>;
    loadedReplies: Record<number, ReplyType[]>;
    activeReply: {
        commentId: number;
        nickname: string;
    } | null;
}
