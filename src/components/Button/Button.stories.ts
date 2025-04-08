import { Meta, StoryObj } from "@storybook/react";
import { Button, ButtonProps } from ".";
import theme from "@/styles/theme";

const meta: Meta<ButtonProps> = {
    title: "Components/Button",
    component: Button,
    argTypes: {
        isActive: { control: "boolean" },
        backgroundColor: {
            control: "select",
            options: Object.keys(theme.color),
        },
        width: {
            control: "select",
            options: ["small", "medium", "large"],
        },
        height: {
            control: "select",
            options: ["small", "medium", "large"],
        },
        onClick: { action: "clicked" },
    },
};
export default meta;

type Story = StoryObj<ButtonProps>;

// 기본 버튼
export const Default: Story = {
    args: {
        children: "Button",
        isActive: false,
        width: "medium",
        height: "medium",
        backgroundColor: "Gray0",
    },
};

// 작은 버튼
export const Small: Story = {
    args: {
        children: "Small",
        isActive: false,
        width: "small",
        height: "small",
    },
};
