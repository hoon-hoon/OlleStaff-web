import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import styled from "@emotion/styled";
import { Text } from "@/styles/Text";

const guesthouses = [
    {
        id: 1,
        name: "잉 게스트하우스",
        description: "아름다운\n자연속에서\n힐링",
        imageUrl: "/images/guesthouse1.png",
    },
    {
        id: 2,
        name: "도피 게스트하우스",
        description: "파워 E들의\n시끌벅적\n도파민 충전",
        imageUrl: "/images/guesthouse2.jpg",
    },
    {
        id: 3,
        name: "조용한 게스트하우스",
        description: "나홀로\n여유롭게\n힐링하기",
        imageUrl: "/images/guesthouse1.png",
    },
];

export default function CardCarousel() {
    const [sliderRef] = useKeenSlider<HTMLDivElement>({
        loop: true,
        slides: {
            perView: 2.3,
            spacing: 12,
        },
    });

    return (
        <SliderContainer ref={sliderRef} className="keen-slider">
            {guesthouses.map(({ id, name, description, imageUrl }) => (
                <Slide key={id} className="keen-slider__slide">
                    <ImageWrapper>
                        <StyledImage src={imageUrl} alt={name} />
                    </ImageWrapper>
                    <Overlay>
                        <TextWrapper>
                            <Text.Body2_1 color="White">{name}</Text.Body2_1>
                            <Text.Title3_1 color="White">
                                {description.split("\n").map((line, idx) => (
                                    <span key={idx}>
                                        {line}
                                        <br />
                                    </span>
                                ))}
                            </Text.Title3_1>
                        </TextWrapper>
                    </Overlay>
                    <More>
                        <Text.Body2_1 color="White">더보기</Text.Body2_1>
                    </More>
                </Slide>
            ))}
        </SliderContainer>
    );
}

const SliderContainer = styled.div`
    height: 180px;
`;

const Slide = styled.div`
    position: relative;
    width: 100%;
    height: 180px;
    border-radius: 12px;
    overflow: hidden;
`;

const ImageWrapper = styled.div`
    width: 100%;
    height: 100%;
`;

const StyledImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
`;

const Overlay = styled.div`
    position: absolute;
    top: 12px;
    left: 12px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    pointer-events: none; // 클릭 막기 원치 않으면 제거
`;

const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    color: white;
`;

const More = styled.div`
    position: absolute;
    bottom: 12px;
    right: 12px;
    pointer-events: auto;
`;
