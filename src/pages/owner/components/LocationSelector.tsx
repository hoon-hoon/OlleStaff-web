import Modal from "@/components/Modal";
import { useState } from "react";
import styled from "@emotion/styled";
import { Text } from "@/styles/Text";
import theme from "@/styles/theme";
import { Wrapper } from "@/styles/Wrapper";
import { DaumPostcodeEmbed as RawPostcode } from "react-daum-postcode";

const DaumPostcodeEmbed = RawPostcode as unknown as React.FC<any>;
interface LocationSelectorProps {
    latitude: number;
    longitude: number;
    locationName: string;
    onChange: (lat: number, lng: number, locationName: string) => void;
}

export default function LocationSelector({ onChange }: LocationSelectorProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [address, setAddress] = useState("");

    const onToggleModal = () => setIsOpen(prev => !prev);

    const handleAddressChange = (data: { address: string }) => {
        setAddress(data.address);
        setIsOpen(false);

        // 실제로는 주소 → 위경도 변환 로직 필요
        onChange(33.499621, 126.531188, data.address);
    };

    return (
        <>
            <Text.Body1_1>위치 선택</Text.Body1_1>

            <Style.AddressSelectorWrapper onClick={onToggleModal}>
                {address === "" ? (
                    <Wrapper.FlexBox gap="8px" alignItems="center">
                        <img src="/icons/searchIcon.svg" alt="위치 검색" style={{ width: "14px" }} />
                        <Text.Body1 color="Gray3"> 위치를 선택해주세요.</Text.Body1>
                    </Wrapper.FlexBox>
                ) : (
                    <Text.Body1>{address}</Text.Body1>
                )}
            </Style.AddressSelectorWrapper>

            {isOpen && (
                <Modal variant="page" handleModalClose={onToggleModal}>
                    <Style.PostcodeWrapper>
                        <DaumPostcodeEmbed onComplete={handleAddressChange} />
                    </Style.PostcodeWrapper>
                </Modal>
            )}
        </>
    );
}

const Style = {
    AddressSelectorWrapper: styled.button`
        display: flex;
        width: 333px;
        height: 40px;
        border-radius: 8px;
        padding: 10px 17px;
        background-color: ${theme.color.Gray0};
        border: none;
        cursor: pointer;
    `,
    PostcodeWrapper: styled.div`
        width: auto;
        overflow: auto;
    `,
};
