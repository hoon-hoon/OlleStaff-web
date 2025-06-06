import { useRef, useState } from "react";
import styled from "@emotion/styled";
import theme from "@/styles/theme";
import { Text } from "@/styles/Text";

interface ImageUploaderProps {
    maxImages?: number;
    onChange?: (files: File[]) => void;
}

export default function ImageUploader({ maxImages = 6, onChange }: ImageUploaderProps) {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [images, setImages] = useState<File[]>([]);

    const handleAddImage = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (!files || !files[0]) return;
        if (images.length >= maxImages) return;

        const updated = [...images, files[0]];
        setImages(updated);
        onChange?.(updated);
    };

    const handleRemoveImage = (index: number) => {
        const updated = images.filter((_, i) => i !== index);
        setImages(updated);
        onChange?.(updated);
    };

    return (
        <div>
            <Description>
                <Text.Body3_1 style={{ color: theme.color.Gray4 }}>
                    * 최대 {maxImages}개의 사진을 첨부할 수 있습니다.
                </Text.Body3_1>
                <Text.Body3_1 style={{ color: theme.color.Gray4 }}>
                    {images.length} / {maxImages}
                </Text.Body3_1>
            </Description>
            <Grid maxCount={maxImages}>
                {images.map((img, index) => (
                    <div key={`${img.name}-${img.lastModified}`} style={{ position: "relative" }}>
                        <ImagePreview>
                            <img src={URL.createObjectURL(img)} alt={`uploaded-${index}`} />
                        </ImagePreview>
                        <RemoveButton onClick={() => handleRemoveImage(index)} />
                    </div>
                ))}

                {images.length < maxImages && (
                    <AddButton onClick={() => fileInputRef.current?.click()}>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleAddImage}
                            ref={fileInputRef}
                            style={{ display: "none" }}
                        />
                    </AddButton>
                )}
            </Grid>
        </div>
    );
}

const Description = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
`;

const Grid = styled.div<{ maxCount: number }>`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 8px;
`;

const ImagePreview = styled.div`
    width: 100%;
    padding-top: 100%;
    border-radius: 8px;
    overflow: hidden;
    border: 1px solid ${theme.color.Main};

    position: relative;

    img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

const RemoveButton = styled.button`
    position: absolute;
    top: -4px;
    right: -4px;
    width: 16px;
    height: 16px;
    border: none;
    background-color: transparent;
    background-image: url("/icons/removeButton.svg");
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    z-index: 1;
`;

const AddButton = styled.div`
    position: relative;
    padding-top: 100%;
    border: 1px dashed ${theme.color.Gray2};
    border-radius: 8px;
    background-color: ${theme.color.White};
    cursor: pointer;
    background-image: url("/icons/cameraGroup.svg");
    background-size: 40%;
    background-repeat: no-repeat;
    background-position: center;
`;
