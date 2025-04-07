import { Meta, StoryObj } from "@storybook/react";
import { SubmitButton, SubmitButtonProps } from ".";
import theme from "../../styles/theme";

const meta: Meta<SubmitButtonProps> = {
    title: "Components/SubmitButton",
    component: SubmitButton,
    argTypes: {
        primary: { control: "boolean" },
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

type Story = StoryObj<SubmitButtonProps>;

// 기본 버튼
export const Default: Story = {
    args: {
        children: "Button",
        primary: false,
        width: "medium",
        height: "medium",
        backgroundColor: "Gray0",
    },
};

// Primary 버튼
export const Primary: Story = {
    args: {
        children: "Primary Button",
        primary: true,
        width: "medium",
        height: "medium",
    },
};

// 작은 버튼
export const Small: Story = {
    args: {
        children: "Small",
        primary: false,
        width: "small",
        height: "small",
    },
};

// 큰 버튼
export const Large: Story = {
    args: {
        children: "Large",
        primary: false,
        width: "large",
        height: "large",
    },
};
