import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import Star from ".";

const meta: Meta<typeof Star> = {
    title: "Components/Star",
    component: Star,
    tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Star>;

const StarStoryWrapper = ({ totalStars = 5, rating = 0 }: { totalStars?: number; rating?: number }) => {
    const [currentRating, setCurrentRating] = useState(rating);
    return (
        <>
            <Star totalStars={totalStars} rating={currentRating} onChange={setCurrentRating} />
        </>
    );
};

export const Default: Story = {
    args: {
        totalStars: 5,
        rating: 3.5,
    },
    render: args => <StarStoryWrapper {...args} />,
};
