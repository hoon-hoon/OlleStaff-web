import { useState } from "react";
import styled from "@emotion/styled";
import { TERMS_CONTENT } from "@/constants/terms";
import theme from "@/styles/theme";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/Button";
import { CheckBox } from "@/components/CheckBox";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Text } from "@/styles/Text";
import Header from "@/components/Header";
import PageWrapper from "@/components/PageWrapper";

export default function TermsPage() {
    const termsArray = Object.values(TERMS_CONTENT);
    const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>(
        termsArray.reduce((acc, { id }) => ({ ...acc, [id]: false }), {})
    );
    // const [marketingAgreed, setMarketingAgreed] = useState(false);
    const navigate = useNavigate();

    const allRequiredChecked = termsArray.filter(term => term.required).every(term => checkedItems[term.id]);

    const handleSingleCheck = (id: string) => {
        setCheckedItems(prev => ({ ...prev, [id]: !prev[id] }));
    };

    const handleAllCheck = () => {
        const next = !termsArray.every(term => checkedItems[term.id]);
        const newState = termsArray.reduce((acc, term) => ({ ...acc, [term.id]: next }), {} as Record<string, boolean>);
        setCheckedItems(newState);
    };

    const handleSubmit = () => {
        const agreed = termsArray
            .filter(term => checkedItems[term.id])
            .map(term => `${term.title}_${term.date}_${term.version}`);

        // if (marketingAgreed) {
        //     agreed.push("올래스텝 개인정보처리 동의서-마케팅_2025-04-09_v1");
        // }

        navigate("/signup", { state: { agreements: agreed } });
    };

    return (
        <>
            <Header showBackButton title="이용약관 동의" />
            <PageWrapper hasHeader>
                {termsArray.map(({ id, title, required, content }) => (
                    <AgreementBox key={id}>
                        <CheckBox
                            checked={checkedItems[id]}
                            onChange={() => handleSingleCheck(id)}
                            label={
                                <>
                                    {title}{" "}
                                    {required && (
                                        <Text.Body1_1 style={{ color: theme.color.Main }}>(필수)</Text.Body1_1>
                                    )}
                                </>
                            }
                        />

                        <ScrollBox>
                            <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
                        </ScrollBox>
                    </AgreementBox>
                ))}

                {/* <CheckBox
                checked={marketingAgreed}
                onChange={() => setMarketingAgreed(!marketingAgreed)}
                label={
                    <>
                        마케팅 및 이벤트 수신에 동의합니다. <span style={{ color: theme.color.Gray4 }}>(선택)</span>
                    </>
                }
            /> */}

                <AllCheckWrapper>
                    <CheckBox
                        checked={termsArray.every(term => checkedItems[term.id])}
                        onChange={handleAllCheck}
                        label={"모든 약관에 동의합니다."}
                    />
                </AllCheckWrapper>

                <Button
                    width="large"
                    backgroundColor="Main"
                    disabled={!allRequiredChecked}
                    isActive={allRequiredChecked}
                    onClick={handleSubmit}
                    label={"동의 완료"}
                >
                    동의완료
                </Button>
            </PageWrapper>
        </>
    );
}

const ScrollBox = styled.div`
    background-color: ${theme.color.White};
    padding: 12px 18.411px 0px 16.184px;
    border-radius: 8px;
    height: 130px;
    white-space: pre-line;
    align-self: stretch;
    overflow-y: auto;
    font-size: 14px;
    color: ${theme.color.Gray4};
    border: 1px solid ${theme.color.Gray2};

    table {
        width: 100%;
        border-collapse: collapse;
        margin-top: 12px;
        font-size: 13px;
    }

    th,
    td {
        border: 1px solid ${theme.color.Gray2};
        padding: 8px;
        text-align: left;
        word-break: break-word;
        white-space: normal;
    }

    th {
        background-color: ${theme.color.Gray1};
    }
`;

const AgreementBox = styled.div`
    margin-bottom: 24px;
`;

const AllCheckWrapper = styled.div`
    display: flex;
    align-items: center;
    margin: 16px 0;
`;
