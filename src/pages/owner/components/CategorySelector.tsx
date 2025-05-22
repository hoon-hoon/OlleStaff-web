import { Text } from "@/styles/Text";
import { Wrapper } from "@/styles/Wrapper";

export default function CategorySelector() {
    return (
        <>
            <Wrapper.FlexBox alignItems="flex-start" justifyContent="space-between">
                <Text.Body1_1>게스트하우스 카테고리</Text.Body1_1>
                <Text.Body3_1 color="Gray4">* 최대 1개만 선택할 수 있습니다.</Text.Body3_1>
            </Wrapper.FlexBox>
        </>
    );
}
