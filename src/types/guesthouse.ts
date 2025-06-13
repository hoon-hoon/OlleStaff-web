export interface GuesthouseListItemProps {
    employmentId: number;
    image: string;
    hashtagName: string[];
    title: string;
    sex: "all" | "female" | "male";
    recruitmentEnd: string;
    content: string;
    // latitude: number;
    // longitude: number;
    locationName: string;
    personNum: number;
    closed?: boolean;
}
