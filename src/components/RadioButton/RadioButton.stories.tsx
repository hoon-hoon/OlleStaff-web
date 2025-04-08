import { useState } from "react";
import type { Meta } from "@storybook/react";
import RadioButton from ".";
import { ThemeProvider } from "@emotion/react";
import theme from "@/styles/theme";

const meta: Meta<typeof RadioButton> = {
  title: "Components/RadioButton",
  component: RadioButton,
  decorators: [
    Story => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
};

export default meta;

export const Default = () => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const labelList = ["Option 1", "Option 2", "Option 3"];

  return (
    <RadioButton labelList={labelList} selectedIndex={selectedIndex} onSelect={index => setSelectedIndex(index)} />
  );
};
