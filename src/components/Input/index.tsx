import styled from "styled-components";

type InputProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  disabled?: boolean;
};

const StyledInput = styled.input`
  width: 333px;
  height: 40px;
  flex-shrink: 0;

  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.color.Gray2};

  background-color: ${({ theme }) => theme.color.White};
  color: ${({ theme }) => theme.color.Gray3};

  font-family: "Pretendard";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.32px;

  &::placeholder {
    color: ${({ theme }) => theme.color.Gray3};
  }
`;

export default function Input({
  value,
  onChange,
  placeholder,
  disabled,
}: InputProps) {
  return (
    <StyledInput
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      disabled={disabled}
    />
  );
}
