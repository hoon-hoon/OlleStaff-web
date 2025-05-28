import styled from "@emotion/styled";
import { useState } from "react";
import { Text } from "@/styles/Text";

interface ImageViewerProps {
    images: string[];
    startIndex?: number;
    onClose: () => void;
}

export default function ImageViewer({ images, startIndex = 0, onClose }: ImageViewerProps) {
    const [index, setIndex] = useState(startIndex);

    const handlePrev = () => {
        setIndex(i => Math.max(0, i - 1));
    };

    const handleNext = () => {
        setIndex(i => Math.min(images.length - 1, i + 1));
    };

    const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <Overlay onClick={handleOverlayClick}>
            <TopBar>
                <Text.Body1_1 color="White">
                    {index + 1} / {images.length}
                </Text.Body1_1>
            </TopBar>
            <ImageWrapper data-clickable="true">
                <Image src={images[index]} alt={`image-${index}`} />
            </ImageWrapper>
            <BottomBar data-clickable="true">
                <Navigation>
                    <NavButton onClick={handlePrev} disabled={index === 0}>
                        {"<"}
                    </NavButton>
                    <NavButton onClick={handleNext} disabled={index === images.length - 1}>
                        {">"}
                    </NavButton>
                </Navigation>
            </BottomBar>
        </Overlay>
    );
}

const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.9);
    z-index: 1000;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const TopBar = styled.div`
    margin-bottom: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ImageWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 40vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Image = styled.img`
    max-width: 100%;
    max-height: 100%;
    border-radius: 12px;
    object-fit: contain;
`;

const BottomBar = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20px;
`;

const NavButton = styled.button`
    font-size: 24px;
    color: white;
    background: transparent;
    border: none;
    cursor: pointer;

    &:disabled {
        opacity: 0.3;
        cursor: default;
    }
`;

const Navigation = styled.div`
    display: flex;
    gap: 32px;
`;
