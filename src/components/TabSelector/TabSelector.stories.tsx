import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import TabSelector from ".";

const meta: Meta<typeof TabSelector> = {
    title: "Components/TabSelector",
    component: TabSelector,
    tags: ["autodocs"],
    argTypes: {
        variant: {
            control: { type: "radio" },
            options: ["underline", "bold"],
        },
    },
};

export default meta;
type Story = StoryObj<typeof TabSelector>;

const TabSelectorWithState = (args: any) => {
    const [selected, setSelected] = useState(args.labels[0]);
    return (
        <div style={{ width: 300 }}>
            <TabSelector {...args} selected={selected} onChange={setSelected} />
        </div>
    );
};

export const Underline: Story = {
    render: args => <TabSelectorWithState {...args} />,
    args: {
        labels: ["지원자", "스탭"],
        variant: "underline",
    },
};

export const Bold: Story = {
    render: args => <TabSelectorWithState {...args} />,
    args: {
        labels: ["전체", "진행중인 공고", "마감공고"],
        variant: "bold",
    },
};
