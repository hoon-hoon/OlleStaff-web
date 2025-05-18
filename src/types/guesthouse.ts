export interface GuesthouseListItemProps {
    id: number;
    imageUrl: string;
    tags: string[];
    title: string;
    description: string;
    location: string;
    personnel: string;
    closed?: boolean;
}
