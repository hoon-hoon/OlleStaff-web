export interface EmploymentPostProps {
    instaUrl: string;
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
        precautionsTitle: string;
        precautionsContent: string;
    }[];
}

export interface EmploymentGetProps {
    employmentId: number;
    images: string[];
    hashtagName: string[];
    title: string;
    instarUrl: string;
    personNum: number;
    sex: "all" | "male" | "female";
    endedAt: string;
    recruitmentEnd: string;
    content: string;
    latitude: number;
    longitude: number;
    benefitsContent: string[];
    phoneNum: string;
}
