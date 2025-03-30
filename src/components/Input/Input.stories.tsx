import type { Meta, StoryObj } from "@storybook/react";
import Input from ".";
import { ThemeProvider } from "styled-components";
import theme from "../../styles/theme";

const meta: Meta<typeof Input> = {
    title: "Components/Input",
    component: Input,
    decorators: [
        (Story) => (
            <ThemeProvider theme={theme}>
                <Story />
            </ThemeProvider>
        ),
    ],
    tags: ["autodocs"],
    argTypes: {
        onChange: { action: "changed" },
        onRightIconClick: { action: "iconClicked" },
        onLeftIconClick: { action: "leftIconClicked" },
    },
};
export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
    args: {
        variant: "default",
        value: "",
        placeholder: "ex) 매주 흥이나는 파티🔥",
    },
};

export const Message: Story = {
    args: {
        variant: "message",
        value: "",
        placeholder: "채팅을 입력하세요.",
        rightIcon: <span style={{ fontSize: "14px" }}>→</span>,
        leftIcon: <span style={{ fontSize: "14px" }}>+</span>,
    },
};

export const Comment: Story = {
    args: {
        variant: "comment",
        value: "",
        placeholder: "댓글을 입력하세요.",
        rightIcon: <span style={{ fontSize: "14px" }}>→</span>,
    },
};
