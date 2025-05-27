import Input from "@/components/Input";
import Textarea from "@/components/Textarea";

export default function Precaution() {
    return (
        <>
            <Input inputTitle="제목" value="" onChange={() => {}} placeholder="ex) 일과 재미, 균형 잡기! ⚖️"></Input>
            <Textarea
                textareaTitle="소개글을 입력해주세요."
                value=""
                onChange={() => {}}
                placeholder="ex) 즐길 때는 확실히! 하지만 업무 시간엔 프로페셔널하게 행동해 주세요."
                variant="flat-sm"
            />
        </>
    );
}
