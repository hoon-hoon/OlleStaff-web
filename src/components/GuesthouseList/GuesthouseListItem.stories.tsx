import type { Meta, StoryObj } from "@storybook/react";
import { GuesthouseListItem } from "./GuesthouseListItem";
import { GuesthouseListItemProps } from "@/types/guesthouse";

const meta: Meta<typeof GuesthouseListItem> = {
    title: "Components/GuesthouseListItem",
    component: GuesthouseListItem,
    tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof GuesthouseListItem>;

const baseArgs: GuesthouseListItemProps = {
    id: 1,
    imageUrl: "/images/guesthouse3.png",
    tags: ["활기찬", "힐링", "바다", "자연"],
    title: "결 게스트하우스 스탭모집",
    description: "바다 근처 힙한 게스트하우스",
    location: "함덕해수욕장",
    personnel: "남자 2명 모집",
    closed: false,
};

export const 기본카드: Story = {
    args: {
        ...baseArgs,
    },
};

export const 태그3개이상: Story = {
    args: {
        ...baseArgs,
        tags: ["활기찬", "힐링", "산속", "한적한", "시끌벅적"],
    },
};

export const 마감된카드: Story = {
    args: {
        ...baseArgs,
        closed: true,
    },
};
