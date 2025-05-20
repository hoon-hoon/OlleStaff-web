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
import CategoryTagEditor from "./components/CategoryTagEditor";
import BenefitListEditor from "./components/BenefitListEditor";
import LocationSelector from "./components/LocationSelector";

export default function RecruitWritePage() {
    const [formData, _setFormData] = useState({
        title: "",
        link: "",
        recruitmentCount: "",
        gender: "",
        startDate: "",
        endDate: "",
        recruitmentDeadline: "",
        description: "",
        benefits: [],
        location: "",
        category: "",
    });

    return (
        <>
            <Header title="게시글 작성" showBackButton />
            <PageWrapper hasHeader>
                <Wrapper.FlexBox direction="column" padding="30px" gap="20px">
                    <ImageUploader maxImages={9} />
                    <CategoryTagEditor />

                    <Input
                        inputTitle="게시글 제목"
                        placeholder="게시할 글의 제목을 작성해주세요."
                        variant="default"
                        value={formData.title}
                        onChange={() => {}}
                    />

                    <Input
                        inputTitle="인스타 및 링크 URL"
                        placeholder="게스트하우스 대표 링크 1개를 첨부해 주세요."
                        variant="default"
                        value={formData.link}
                        onChange={() => {}}
                    />
                    <Wrapper.FlexBox>
                        <Wrapper.FlexBox width="120px">
                            <DropdownButton dropTitle="모집 인원" label="00명" options={["1", "2", "3", "4", "5"]} />
                        </Wrapper.FlexBox>
                        <RadioButton radioTitle="성별" labelList={["모두", "남자", "여자"]} selectedIndex={0} />
                    </Wrapper.FlexBox>

                    <Wrapper.FlexBox justifyContent="space-between">
                        <Wrapper.FlexBox width="48%">
                            <Input
                                inputTitle="시작일"
                                placeholder="YYYYMMDD"
                                variant="default"
                                value={formData.startDate}
                                onChange={() => {}}
                            />
                        </Wrapper.FlexBox>
                        <Wrapper.FlexBox width="48%">
                            <Input
                                inputTitle="종료일"
                                placeholder="YYYYMMDD"
                                variant="default"
                                value={formData.endDate}
                                onChange={() => {}}
                            />
                        </Wrapper.FlexBox>
                    </Wrapper.FlexBox>

                    <Input
                        inputTitle="모집 마감일"
                        placeholder="YYYYMMDD"
                        variant="default"
                        value={formData.recruitmentDeadline}
                        onChange={() => {}}
                    />
                    <Textarea
                        textareaTitle="게스트 하우스 소개글"
                        placeholder="소개글을 입력해 주세요."
                        value={formData.description}
                        onChange={() => {}}
                        variant="flat"
                    />
                    <BenefitListEditor />
                    <LocationSelector />
                    <Button label="다음 버튼" width="large">
                        다음으로
                    </Button>
                </Wrapper.FlexBox>
            </PageWrapper>
        </>
    );
}
