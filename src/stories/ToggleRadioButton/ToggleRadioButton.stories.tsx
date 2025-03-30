import { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import ToggleRadioButton, { ToggleRadioButtonProps } from "./ToggleRadioButton";

const DummyIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" stroke="black" strokeWidth="2" fill="gray" />
    </svg>
);

const meta: Meta<ToggleRadioButtonProps> = {
    title: "Components/ToggleRadioButton",
    component: ToggleRadioButton,
    argTypes: {
        onSelect: { action: "selected" },
    },
};

export default meta;
type Story = StoryObj<ToggleRadioButtonProps>;

function ToggleRadioButtonWrapper(props: ToggleRadioButtonProps) {
    const [selectedIndex, setSelectedIndex] = useState(props.selectedIndex);
    const handleSelect = (index: number) => {
        setSelectedIndex(index);
        props.onSelect?.(index);
    };

    return <ToggleRadioButton {...props} selectedIndex={selectedIndex} onSelect={handleSelect} />;
}

export const Default: Story = {
    args: {
        items: [
            { icon: <DummyIcon />, label: "Option 1" },
            { icon: <DummyIcon />, label: "Option 2" },
        ],
        selectedIndex: -1, // 초기 선택 상태는 선택 해제 (-1)
    },
    render: args => <ToggleRadioButtonWrapper {...args} />,
};
