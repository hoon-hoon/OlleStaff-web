import Input from "../components/Input";
import ProfileAdd from "../components/ProfileAdd";

export default function SignupPage() {
    const handleChange = () => {};
    return (
        <>
            <ProfileAdd />
            <Input value="" onChange={handleChange} placeholder="닉네임을 입력하세요." />
            <Input value="" onChange={handleChange} placeholder="전화번호를 입력하세요." />
            <Input value="" onChange={handleChange} placeholder="인증번호를 입력하세요." />
            <Input value="" onChange={handleChange} placeholder="YYYYMMDD를 입력하세요." />
        </>
    );
}
