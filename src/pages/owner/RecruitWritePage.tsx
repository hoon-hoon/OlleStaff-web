import { Button } from "@/components/Button";
import DropdownButton from "@/components/DropdownButton";
import Header from "@/components/Header";
import ImageUploader from "@/components/ImageUploader";
import Input from "@/components/Input";
import PageWrapper from "@/components/PageWrapper";
import RadioButton from "@/components/RadioButton";
import Textarea from "@/components/Textarea";
import { Wrapper } from "@/styles/Wrapper";
import { useState } from "react";
import HashTagEditor from "./components/HashTagEditor";
import BenefitListEditor from "./components/BenefitListEditor";
import LocationSelector from "./components/LocationSelector";
import CategorySelector from "./components/CategorySelector";

interface EmploymentProps {
    instarUrl: string;
    personNum: number;
    sex: "all" | "male" | "female";
    startedAt: string;
    endedAt: string;
    recruitmentEnd: string;
    title: string;
    content: string;
    category: string;
    latitude: number;
    longitude: number;
    // location : string
    hashtagName: string[];
    benefitsContent: string[];
    precautions: string[];
}

export default function RecruitWritePage() {
    const initialFormData: EmploymentProps = {
        instarUrl: "",
        personNum: 0,
        sex: "all",
        startedAt: "",
        endedAt: "",
        recruitmentEnd: "",
        title: "",
        content: "",
        category: "",
        latitude: 0,
        longitude: 0,
        hashtagName: [],
        benefitsContent: [],
        precautions: [],
    };

    const [formData, setFormData] = useState<EmploymentProps>(initialFormData);

    return (
        <>
            <Header title="게시글 작성" showBackButton />
            <PageWrapper hasHeader>
                <Wrapper.FlexBox direction="column" padding="30px" gap="20px">
                    <ImageUploader maxImages={9} />
                    <HashTagEditor />

                    <Input
                        inputTitle="게시글 제목"
                        placeholder="게시할 글의 제목을 작성해주세요."
                        variant="default"
                        value={formData.title}
                        onChange={e => setFormData({ ...formData, title: e.target.value })}
                    />

                    <Input
                        inputTitle="인스타 및 링크 URL"
                        placeholder="게스트하우스 대표 링크 1개를 첨부해 주세요."
                        variant="default"
                        value={formData.instarUrl}
                        onChange={e => setFormData({ ...formData, instarUrl: e.target.value })}
                    />
                    <Wrapper.FlexBox>
                        <Wrapper.FlexBox width="120px">
                            <DropdownButton
                                dropTitle="모집 인원"
                                label={`${formData.personNum || "00"}명`}
                                options={["1", "2", "3", "4", "5"]}
                                onSelect={value => setFormData({ ...formData, personNum: parseInt(value) })}
                            />
                        </Wrapper.FlexBox>
                        <RadioButton radioTitle="성별" labelList={["모두", "남자", "여자"]} selectedIndex={0} />
                    </Wrapper.FlexBox>

                    <Wrapper.FlexBox justifyContent="space-between">
                        <Wrapper.FlexBox width="48%">
                            <Input
                                inputTitle="시작일"
                                placeholder="예) 2025-02-08"
                                variant="default"
                                value={formData.startedAt}
                                onChange={e => setFormData({ ...formData, startedAt: e.target.value })}
                            />
                        </Wrapper.FlexBox>
                        <Wrapper.FlexBox width="48%">
                            <Input
                                inputTitle="종료일"
                                placeholder="예) 2025-12-22"
                                variant="default"
                                value={formData.endedAt}
                                onChange={e => setFormData({ ...formData, endedAt: e.target.value })}
                            />
                        </Wrapper.FlexBox>
                    </Wrapper.FlexBox>

                    <Input
                        inputTitle="모집 마감일"
                        placeholder="예) 2025-02-01"
                        variant="default"
                        value={formData.recruitmentEnd}
                        onChange={e => setFormData({ ...formData, recruitmentEnd: e.target.value })}
                    />
                    <Textarea
                        textareaTitle="게스트 하우스 소개글"
                        placeholder="소개글을 입력해 주세요."
                        value={formData.content}
                        onChange={e => setFormData({ ...formData, content: e.target.value })}
                        variant="flat"
                    />
                    <BenefitListEditor />
                    <LocationSelector />

                    <CategorySelector />

                    <Button label="다음 버튼" width="large">
                        다음으로
                    </Button>
                </Wrapper.FlexBox>
            </PageWrapper>
        </>
    );
}
