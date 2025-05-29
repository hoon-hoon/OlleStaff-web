import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import RecruitBasicInfoPage from "./RecruitBasicInfoPage";
import RecruitPrecautionPage from "./RecruitPrecautionPage";
import { EmploymentProps } from "@/types/employment";

const initialFormData: EmploymentProps = {
    instaUrl: "",
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
    precautions: [{ precautionsTitle: "", precautionsContent: "" }],
};

export default function RecruitWriteContainer() {
    const [formData, setFormData] = useState<EmploymentProps>(initialFormData);
    const navigate = useNavigate();

    return (
        <Routes>
            <Route
                path="step1"
                element={
                    <RecruitBasicInfoPage
                        formData={formData}
                        setFormData={setFormData}
                        onNext={() => navigate("/owner/recruit/write/step2")}
                    />
                }
            />
            <Route
                path="step2"
                element={
                    <RecruitPrecautionPage
                        formData={formData}
                        setFormData={setFormData}
                        onSubmit={() => {
                            console.log("최종 제출", formData);
                        }}
                    />
                }
            />
        </Routes>
    );
}
