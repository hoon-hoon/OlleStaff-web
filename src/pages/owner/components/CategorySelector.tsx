import RadioButton from "@/components/RadioButton";
import { Text } from "@/styles/Text";
import { Wrapper } from "@/styles/Wrapper";
interface CategorySelectorProps {
    value: string;
    onChange: (category: string) => void;
}

export default function CategorySelector({ value, onChange }: CategorySelectorProps) {
    const categories = ["대규모", "소규모", "뷰맛집", "힐링", "체험"];

    return (
        <Wrapper.FlexBox direction="column">
            <Wrapper.FlexBox alignItems="flex-start" justifyContent="space-between">
                <Text.Body1_1>게스트하우스 카테고리</Text.Body1_1>
                <Text.Body3_1 color="Gray4">* 최대 1개만 선택할 수 있습니다.</Text.Body3_1>
            </Wrapper.FlexBox>

            <RadioButton
                radioTitle=""
                labelList={categories}
                selectedIndex={categories.includes(value) ? categories.indexOf(value) : 0}
                onSelect={index => onChange(categories[index])}
            />
        </Wrapper.FlexBox>
    );
}
