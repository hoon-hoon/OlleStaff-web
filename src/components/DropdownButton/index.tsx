import { useState, useRef, useEffect } from "react";
import styled from "styled-components";

export interface DropdownButtonProps {
    label: string;
    options: string[];
    onSelect?: (option: string) => void;
}

export default function DropdownButton({ label, options, onSelect }: DropdownButtonProps) {
    const [isOpen, setIsOpen] = useState(false);
    const wrapperRef = useRef<HTMLDivElement>(null);

    const toggleDropdown = () => {
        setIsOpen(prev => !prev);
    };

    const handleSelect = (option: string) => {
        onSelect?.(option);
        setIsOpen(false);
    };

    // 영역 밖 클릭 시 드롭다운 닫기
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <Style.Wrapper ref={wrapperRef}>
            <Style.Button onClick={toggleDropdown}>{label}</Style.Button>
            {isOpen && (
                <Style.DropdownMenu>
                    {options.map((option, index) => (
                        <Style.DropdownItem key={index} onClick={() => handleSelect(option)}>
                            {option}
                        </Style.DropdownItem>
                    ))}
                </Style.DropdownMenu>
            )}
        </Style.Wrapper>
    );
}

const Style = {
    Wrapper: styled.div`
        position: relative;
        display: inline-block;
    `,
    Button: styled.button`
        padding: 8px 12px;
        border: 1px solid #ccc;
        border-radius: 8px;
        background-color: #fff;
        cursor: pointer;
        font-size: 14px;
        color: #333;

        &:hover {
            background-color: #f7f7f7;
        }
    `,
    DropdownMenu: styled.div`
        position: absolute;
        top: calc(100% + 4px);
        left: 0;
        border: 1px solid #ccc;
        background-color: #fff;
        border-radius: 8px;
        min-width: 100%;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
        z-index: 999;
    `,
    DropdownItem: styled.div`
        padding: 8px 12px;
        font-size: 14px;
        color: #333;
        cursor: pointer;

        &:hover {
            background-color: #f0f0f0;
        }
    `,
};
