import { RouteObject } from "react-router-dom";
import AuthLayout from "@/layout/AuthLayout";
import LoginPage from "@/pages/auth/LoginPage";
import SignupPage from "@/pages/auth/SignupPage";
import KakaoRedirectPage from "@/pages/auth/KakaoRedirectPage";
import NaverRedirectPage from "@/pages/auth/NaverRedirectPage";
import GoogleRedirectPage from "@/pages/auth/GoogleRedirectPage";
import TermsPage from "@/pages/auth/TermsPage";
import TypeSelectPage from "@/pages/auth/TypeSelectPage";
import BusinessVerificationPage from "@/pages/auth/BusinessVerification";

const AuthRoutes: RouteObject[] = [
    {
        path: "/",
        element: <AuthLayout />,
        children: [
            {
                index: true,
                element: <LoginPage />,
            },
            {
                path: "/signup",
                element: <SignupPage />,
            },
            {
                path: "/agreements",
                element: <TermsPage />,
            },
            {
                path: "/type-select",
                element: <TypeSelectPage />,
            },
            {
                path: "/auth/business-verification",
                element: <BusinessVerificationPage />,
            },
        ],
    },
    {
        path: "/auth/kakao",
        element: <KakaoRedirectPage />,
    },
    {
        path: "/auth/naver",
        element: <NaverRedirectPage />,
    },
    {
        path: "/auth/google",
        element: <GoogleRedirectPage />,
    },
];

export default AuthRoutes;
