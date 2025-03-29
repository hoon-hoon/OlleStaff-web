import { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import DropdownButton, { DropdownButtonProps } from "./DropdownButton";

const meta: Meta<DropdownButtonProps> = {
    title: "Components/DropdownButton",
    component: DropdownButton,
    argTypes: {
        onSelect: { action: "selected" },
    },
};

export default meta;
type Story = StoryObj<DropdownButtonProps>;

function DropdownButtonWrapper(props: DropdownButtonProps) {
    const [label, setLabel] = useState(props.label);

    const handleSelect = (option: string) => {
        setLabel(option);
        props.onSelect?.(option);
    };

    return <DropdownButton {...props} label={label} onSelect={handleSelect} />;
}

export const Default: Story = {
    args: {
        label: "00명",
        options: ["1명", "2명", "3명", "4명", "5명"],
    },

    render: args => <DropdownButtonWrapper {...args} />,
};
