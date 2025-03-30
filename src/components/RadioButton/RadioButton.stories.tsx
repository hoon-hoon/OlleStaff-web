import { useState } from "react";
import RadioButton from ".";

export default {
    title: "Components/RadioButton",
    component: RadioButton,
};

export const Default = () => {
    const [selectedIndex, setSelectedIndex] = useState<number>(0);
    const labelList = ["Option 1", "Option 2", "Option 3"];

    return (
        <RadioButton labelList={labelList} selectedIndex={selectedIndex} onSelect={index => setSelectedIndex(index)} />
    );
};
