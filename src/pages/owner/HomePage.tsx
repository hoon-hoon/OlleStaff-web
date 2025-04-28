import Modal from "@/components/Modal";
import { useState } from "react";

export default function HomePage() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleModalOpen = () => {
        setIsModalOpen(true);
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
    };

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
        </div>
    );
}
