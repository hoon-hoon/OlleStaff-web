import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import ProfileAdd from "./index";

const meta: Meta<typeof ProfileAdd> = {
    title: "Components/ProfileAdd",
    component: ProfileAdd,
};

export default meta;
type Story = StoryObj<typeof ProfileAdd>;

export const Default: Story = {
    render: () => {
        const [file, setFile] = useState<File | null>(null);

        return (
            <div>
                <ProfileAdd onImageChange={setFile} />
                {file && <p>선택한 파일: {file.name}</p>}
            </div>
        );
    },
};
