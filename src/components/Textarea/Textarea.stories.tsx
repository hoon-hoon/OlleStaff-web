import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import Textarea from ".";

const meta: Meta<typeof Textarea> = {
    title: "Components/Textarea",
    component: Textarea,
    tags: ["autodocs"],
    argTypes: {
        variant: {
            control: { type: "radio" },
            options: ["outline", "flat"],
        },
        placeholder: { control: "text" },
        disabled: { control: "boolean" },
    },
};

export default meta;
type Story = StoryObj<typeof Textarea>;

// Storybook에서도 입력해볼 수 있게 만들어주는 코드
const Template = (args: any) => {
    const [value, setValue] = useState("");
    return <Textarea {...args} value={value} onChange={e => setValue(e.target.value)} />;
};

export const Flat: Story = {
    render: Template,
    args: {
        placeholder: "flat textarea",
        variant: "flat",
        disabled: false,
    },
};
