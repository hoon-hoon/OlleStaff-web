import { useEffect, useState } from "react";
import Header from "@/components/Header";
import PageWrapper from "@/components/PageWrapper";
import { AccompanyList } from "@/components/AccompanyList";
import TabSelector from "@/components/TabSelector";
import { AccompanyListItemProps } from "@/types/accompany";
import { useNavigate } from "react-router-dom";

const mockData = [
    {
        id: 1,
        title: "제주 서쪽 동행 분 구해요",
        content: "저는 인싸는 아니지만 이야기 듣는 걸 아주 좋아하는 인프피 남성입니다 퇴사 후에 어떤걸 해야할지...",
        timeAgo: "2시간 전",
        imageUrl: "/images/guesthouse3.png",
    },
    {
        id: 2,
        title: "한라산 같이 가실 분!",
        content: "등산 좋아하시는 분이라면 누구든 환영입니다!",
        timeAgo: "4시간 전",
    },
    {
        id: 3,
        title: "제주 서쪽 동행 분 구해요",
        content: "저는 인싸는 아니지만 이야기 듣는 걸 아주 좋아하는 인프피 남성입니다 퇴사 후에 어떤걸 해야할지...",
        timeAgo: "2시간 전",
        imageUrl: "/images/guesthouse3.png",
    },
    {
        id: 4,
        title: "한라산 같이 가실 분!",
        content: "등산 좋아하시는 분이라면 누구든 환영입니다!",
        timeAgo: "4시간 전",
    },
    {
        id: 5,
        title: "제주 서쪽 동행 분 구해요",
        content: "저는 인싸는 아니지만 이야기 듣는 걸 아주 좋아하는 인프피 남성입니다 퇴사 후에 어떤걸 해야할지...",
        timeAgo: "2시간 전",
        imageUrl: "/images/guesthouse3.png",
    },
    {
        id: 6,
        title: "한라산 같이 가실 분!",
        content: "등산 좋아하시는 분이라면 누구든 환영입니다!",
        timeAgo: "4시간 전",
    },
];

export default function AccompanyPage() {
    const [sort, setSort] = useState<"전체" | "인기순">("전체");
    const [data, setData] = useState<AccompanyListItemProps[]>([]);
    const navigate = useNavigate();

    const handleWriteClick = () => {
        navigate("write");
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                // const response = await fetch(``);
                // const result = await response.json();
                // setData(result);
                setData(mockData);
            } catch (error) {
                console.error("동행 리스트 불러오기 실패", error);
                setData([]);
            }
        };

        fetchData();
    }, [sort]);

    return (
        <>
            <Header title="동행 구하기" rightIconSrc="/Icon/edit.svg" onRightClick={handleWriteClick} />
            <PageWrapper hasHeader>
                <TabSelector
                    labels={["전체", "인기순"]}
                    selected={sort}
                    onChange={value => setSort(value as "전체" | "인기순")}
                    variant="bold"
                />
                <AccompanyList data={data} />
            </PageWrapper>
        </>
    );
}
