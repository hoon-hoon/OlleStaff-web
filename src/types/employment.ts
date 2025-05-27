export interface EmploymentProps {
    instarUrl: string;
    personNum: number;
    sex: "all" | "male" | "female";
    startedAt: string;
    endedAt: string;
    recruitmentEnd: string;
    title: string;
    content: string;
    category: string;
    latitude: number;
    longitude: number;
    // location : string
    hashtagName: string[];
    benefitsContent: string[];
    precautions: {
        title: string;
        content: string;
    }[];
}
