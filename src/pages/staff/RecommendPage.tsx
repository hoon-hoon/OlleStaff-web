import { GuesthouseList } from "@/components/GuesthouseList";
import Header from "@/components/Header";
import PageWrapper from "@/components/PageWrapper";
import TabSelector from "@/components/TabSelector";
import { GuesthouseListItemProps } from "@/types/guesthouse";
import { useEffect, useState } from "react";

const mockData: GuesthouseListItemProps[] = [
    {
        id: 1,
        title: "결 게스트하우스 스탭모집",
        imageUrl: "/images/guesthouse3.png",
        tags: ["활기찬", "힐링", "자연", "바다"],
        description: "바다 근처 힙한 게스트 하우스",
        location: "함덕해수욕장",
        personnel: "남자 2명 모집",
    },
    {
        id: 2,
        title: "오션뷰 게스트하우스",
        imageUrl: "/images/guesthouse3.png",
        tags: ["뷰맛집", "바다", "프라이빗"],
        description: "바다가 보이는 오션뷰 숙소",
        location: "협재",
        personnel: "여자 1명 모집",
        closed: true,
    },
    {
        id: 3,
        title: "소소한 쉼터",
        imageUrl: "/images/guesthouse3.png",
        tags: ["힐링", "자연"],
        description: "마음이 편안해지는 조용한 숙소",
        location: "성산읍",
        personnel: "남자 2명 모집",
    },
    {
        id: 4,
        title: "오션뷰 게스트하우스",
        imageUrl: "/images/guesthouse3.png",
        tags: ["뷰맛집", "바다", "프라이빗"],
        description: "바다가 보이는 오션뷰 숙소",
        location: "협재",
        personnel: "여자 1명 모집",
        closed: true,
    },
    {
        id: 5,
        title: "소소한 쉼터",
        imageUrl: "/images/guesthouse3.png",
        tags: ["힐링", "자연"],
        description: "마음이 편안해지는 조용한 숙소",
        location: "성산읍",
        personnel: "남자 2명 모집",
    },
    {
        id: 6,
        title: "오션뷰 게스트하우스",
        imageUrl: "/images/guesthouse3.png",
        tags: ["뷰맛집", "바다", "프라이빗"],
        description: "바다가 보이는 오션뷰 숙소",
        location: "협재",
        personnel: "여자 1명 모집",
        closed: true,
    },
    {
        id: 7,
        title: "소소한 쉼터",
        imageUrl: "/images/guesthouse3.png",
        tags: ["힐링", "자연"],
        description: "마음이 편안해지는 조용한 숙소",
        location: "성산읍",
        personnel: "남자 2명 모집",
    },
    {
        id: 8,
        title: "오션뷰 게스트하우스",
        imageUrl: "/images/guesthouse3.png",
        tags: ["뷰맛집", "바다", "프라이빗"],
        description: "바다가 보이는 오션뷰 숙소",
        location: "협재",
        personnel: "여자 1명 모집",
        closed: true,
    },
];

export default function RecommendPage() {
    const [sort, setSort] = useState<"전체" | "인기순" | "추천순">("전체");
    const [data, setData] = useState<GuesthouseListItemProps[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // const response = await fetch(``);
                // const result = await response.json();
                // setData(result);
                setData(mockData);
            } catch (error) {
                console.error("카테고리 불러오기 실패", error);
                setData([]);
            }
        };

        fetchData();
    }, [sort]);
    return (
        <>
            <Header showBackButton title="취향저격 게스트 하우스" />
            <PageWrapper hasHeader>
                <TabSelector
                    labels={["전체", "인기순", "추천순"]}
                    selected={sort}
                    onChange={value => setSort(value as "전체" | "인기순" | "추천순")}
                    variant="bold"
                />
                <GuesthouseList data={data} />
            </PageWrapper>
        </>
    );
}
