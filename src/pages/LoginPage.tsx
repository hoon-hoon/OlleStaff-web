import styled from "@emotion/styled";
import { Text } from "@/styles/Text";

export default function LoginPage() {
    const KAKAO_CLIENT_ID = import.meta.env.VITE_KAKAO_CLIENT_ID;
    const REDIRECT_URI = import.meta.env.VITE_KAKAO_REDIRECT_URI;
    const NAVER_CLIENT_ID = import.meta.env.VITE_NAVER_CLIENT_ID;
    const NAVER_REDIRECT_URI = import.meta.env.VITE_NAVER_REDIRECT_URI;

    const kakaoAuthUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;

    const handleKakaoLogin = () => {
        window.location.href = kakaoAuthUrl;
    };

    const handleNaverLogin = () => {
        const state = crypto.randomUUID();
        sessionStorage.setItem("naver_auth_state", state);

        const naverAuthUrl = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${NAVER_CLIENT_ID}&redirect_uri=${NAVER_REDIRECT_URI}&state=${state}`;
        window.location.href = naverAuthUrl;
    };

    const handleGoogleLogin = () => {
        window.location.href = "/auth/google";
    };

    return (
        <Container>
            {/* 임시 로고 */}
            <Logo src="/logo.png" alt="logo" />
            <Title color="Black">
                제주도 숙박공간과
                <br />
                스텝의 연결고리
            </Title>

            <ButtonContainer>
                <SocialButton bgcolor="#FEE500" textcolor="#000000" onClick={handleKakaoLogin}>
                    카카오 로그인
                </SocialButton>
                <SocialButton bgcolor="#03C75A" textcolor="#ffffff" onClick={handleNaverLogin}>
                    네이버 로그인
                </SocialButton>
                <SocialButton bgcolor="#ffffff" textcolor="#000000" onClick={handleGoogleLogin}>
                    이메일 로그인
                </SocialButton>
            </ButtonContainer>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;

const Title = styled(Text.Title3_1)`
    text-align: center;
`;

const Logo = styled.img`
    width: 100%;
    height: auto;
    background-color: #eee;
    border-radius: 60px;
    margin-bottom: 30px;
`;

const ButtonContainer = styled.div`
    width: 100vw;
    max-width: 333px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-top: 100px;
`;

const SocialButton = styled.button<{
    bgcolor: string;
    textcolor: string;
}>`
    width: 100%;
    display: flex;
    height: 40px;
    padding: 8px 16px;
    justify-content: center;
    align-items: center;
    border: none;
    background-color: ${({ bgcolor }) => bgcolor};
    color: ${({ textcolor }) => textcolor};
`;
