import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import ImageViewer from "./index";

const meta: Meta<typeof ImageViewer> = {
    title: "Components/ImageViewer",
    component: ImageViewer,
    parameters: {
        layout: "fullscreen",
    },
};
export default meta;

type Story = StoryObj<typeof ImageViewer>;

const sampleImages = ["/images/guesthouse4.png", "/images/guesthouse4.png", "/images/guesthouse4.png"];

export const Default: Story = {
    render: () => {
        const [open, setOpen] = useState(true);

        return (
            <>
                {open && <ImageViewer images={sampleImages} startIndex={0} onClose={() => setOpen(false)} />}
                {!open && (
                    <button
                        style={{
                            position: "absolute",
                            top: 20,
                            left: 20,
                            padding: "8px 16px",
                            fontSize: "14px",
                        }}
                        onClick={() => setOpen(true)}
                    >
                        이미지 뷰어 열기
                    </button>
                )}
            </>
        );
    },
};
