// 각각 어느 페이지에서 사용하는지 주석으로 적어둠
export const TAB_LABELS = {
    STAFF: {
        SEARCH: ["진행중인 공고", "마감공고"] as const, // 검색
        COMPANION: ["전체", "인기순"] as const, // 동행구하기
        REVIEW: ["전체", "인기순"] as const, // 후기
        MY_REVIEW: ["1주일", "1개월", "3개월", "6개월"] as const, // 내가 작성한 후기
        CHAT_LIST: ["전체", "게스트하우스"] as const, // 채팅 리스트
        SAVED_POSTS: ["공고", "동행"] as const, // 저장한 글
        MY_APPLICATION: ["자기소개", "어필사항 및 사진"] as const, // 나의 지원서
    },

    OWNER: {
        MY_RECRUIT: ["전체", "진행중인 공고", "마감공고"] as const, // 나의 공고
        REVIEW_MANAGE: ["전체", "완료됨"] as const, // 후기 관리
        CHAT_LIST: ["지원자", "스탭"] as const, // 채팅 리스트
        STAFF_APPLICATION: ["자기소개", "어필사항 및 사진"] as const, // 누군가의 STAFF 지원서
    },
} as const;

export type StaffTabTypes = {
    SEARCH: (typeof TAB_LABELS.STAFF.SEARCH)[number];
    COMPANION: (typeof TAB_LABELS.STAFF.COMPANION)[number];
    REVIEW: (typeof TAB_LABELS.STAFF.REVIEW)[number];
    MY_REVIEW: (typeof TAB_LABELS.STAFF.MY_REVIEW)[number];
    CHAT_LIST: (typeof TAB_LABELS.STAFF.CHAT_LIST)[number];
    SAVED_POSTS: (typeof TAB_LABELS.STAFF.SAVED_POSTS)[number];
    MY_APPLICATION: (typeof TAB_LABELS.STAFF.MY_APPLICATION)[number];
};

export type OwnerTabTypes = {
    MY_RECRUIT: (typeof TAB_LABELS.OWNER.MY_RECRUIT)[number];
    REVIEW_MANAGE: (typeof TAB_LABELS.OWNER.REVIEW_MANAGE)[number];
    CHAT_LIST: (typeof TAB_LABELS.OWNER.CHAT_LIST)[number];
    STAFF_APPLICATION: (typeof TAB_LABELS.OWNER.STAFF_APPLICATION)[number];
};

export const recruitTabToQueryType: Record<OwnerTabTypes["MY_RECRUIT"], "ALL" | "IN_PROGRESS" | "END"> = {
    전체: "ALL",
    "진행중인 공고": "IN_PROGRESS",
    마감공고: "END",
};
