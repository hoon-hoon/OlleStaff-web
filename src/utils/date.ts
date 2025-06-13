import { format, register } from "timeago.js";

// 한국어 locale 정의
const koLocale = (_number: number, index: number): [string, string] => {
    const table: [string, string][] = [
        ["방금 전", "곧"],
        ["%s초 전", "%s초 후"],
        ["1분 전", "1분 후"],
        ["%s분 전", "%s분 후"],
        ["1시간 전", "1시간 후"],
        ["%s시간 전", "%s시간 후"],
        ["1일 전", "1일 후"],
        ["%s일 전", "%s일 후"],
        ["1주 전", "1주 후"],
        ["%s주 전", "%s주 후"],
        ["1개월 전", "1개월 후"],
        ["%s개월 전", "%s개월 후"],
        ["1년 전", "1년 후"],
        ["%s년 전", "%s년 후"],
    ];

    return table[index];
};

register("ko", koLocale);

export const timeAgo = (timestamp: number): string => {
    return format(new Date(timestamp * 1000), "ko");
};

export function calculateDDay(targetDateStr: string): string {
    const today = new Date();
    const target = new Date(targetDateStr);
    const diffTime = target.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    return diffDays >= 0 ? `D - ${diffDays}` : "마감됨";
}

export function formatDateToMonthDay(dateStr: string): string {
    const date = new Date(dateStr);
    return `${date.getMonth() + 1}월 ${date.getDate()}일`;
}

export const isClosed = (recruitmentEnd: string): boolean => {
    const today = new Date();
    const endDate = new Date(recruitmentEnd);
    return today > endDate;
};
