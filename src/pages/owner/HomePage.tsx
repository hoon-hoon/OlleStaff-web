import Modal from "@/components/Modal";
import { fetchMinimumUserInfo } from "@/hooks/user/useFetchMinumumUserInfo";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleModalOpen = () => {
        setIsModalOpen(true);
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
    };

    const navigate = useNavigate();

    const handleDeleteVerify = async () => {
        // https://dev.ollestaff.com/users/guesthouse/business-registration
        const res = await axios.delete(`${import.meta.env.VITE_API_BASE_URL}/users/guesthouse/business-registration`, {
            withCredentials: true,
        });
        console.log(res);
    };
    useEffect(() => {
        const checkApplicationStatus = async () => {
            try {
                const user = await fetchMinimumUserInfo();

                if (!user || !user.nickname) {
                    navigate("/"); // 로그인 안 된 경우
                } else if (!user.userType) {
                    navigate("/type-select");
                } else if (!user.onboarded) {
                    navigate("/business-verification");
                }
            } catch (err) {
                console.error("사용자 정보 확인 실패", err);
                navigate("/"); // catch된 경우도 안전하게 리디렉션
            }
        };

        checkApplicationStatus();
    }, []);

    return (
        <div>
            {/* {isModalOpen && (
                <Modal
                    variant="default"
                    message="가입 완료"
                    handleModalClose={handleModalClose}
                    onConfirm={handleModalClose}
                    confirmText="확인"
                />
            )} */}

            {isModalOpen && (
                <Modal
                    variant="confirm"
                    title="해당 공고글로 합격을 시키겠습니까?"
                    message="확인 버튼 클릭 시, '결게스트하우스 6월 스...' 
                    게시글에 wsdgs님을 합격 처리합니다."
                    handleModalClose={handleModalClose}
                    onConfirm={handleModalClose}
                    cancelText="이전으로"
                    confirmText="확인"
                />
            )}

            <h1>Owner Home</h1>
            <button onClick={handleModalOpen}>모달1</button>

            <button onClick={handleDeleteVerify}>삭제</button>
        </div>
    );
}
